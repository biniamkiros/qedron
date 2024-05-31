const { createHash } = require("crypto");
const fs = require("fs");

function hash(string) {
  return createHash("sha256").update(string).digest("hex");
}

const getDate =
  "https://production.egp.gov.et/po-gw/cms/api/economic-operators/get-current-server-time";
let total = 0;
let suppliers = [];

const getSecret = async () => {
  const res = await fetchData(getDate);
  const date = new Date(res);
  return date.getTime();
};

const fetchData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
    });
    return response.json();
  } catch (error) {
    console.error("Error:", error);
    process.exit();
    return null;
  }
};

const getSuplier = async (skip, top, fileName) => {
  const secret = await getSecret();
  const token = getSecreteToken(secret);
  const url = `https://production.egp.gov.et/po-gw/cms/api/economic-operators/get-economic-operators-portal?skip=${skip}&top=${top}&orderBy%5B0%5D.field=dateOfRegistration&orderBy%5B0%5D.direction=desc&filter%5B0%5D%5B0%5D.field=status&filter%5B0%5D%5B0%5D.operator==&filter%5B0%5D%5B0%5D.value=active&secretToken=${token}&secretCode=${secret}`;
  const list = await fetchData(url);
  const eo = await fetchData(
    `https://production.egp.gov.et/po-gw/registration/api/economic-operators/get-supplier-by-id/${list.items[0].economicOperatorId}`
  );
  total = list.total;
  list.items.forEach(async (l) => {
    const eo = await fetchData(
      `https://production.egp.gov.et/po-gw/registration/api/economic-operators/get-supplier-by-id/${l.economicOperatorId}`
    );
    try {
      eo.basicRegistration.managers?.forEach(
        async (m) => (m.photo = "deleted")
      );
      eo.businessLicenses?.forEach(async (bl) => {
        if (bl.managers)
          bl.managers.forEach(async (m) => (m.photo = "deleted"));
      });
    } catch (e) {
      console.log("Error deleting pictures", e);
    }

    save(eo, fileName);
  });
};

function getSecreteToken(time) {
  const encryptionKey = "aSg8HsauuHdjK6O04hCXO0u8JHpLMWpZ";
  secretToken = hash(`${time}${encryptionKey}`); //Object(A.SHA256)(`1716640277290${encryptionKey}`)
  return secretToken;
}

const setValue = (fn, value) =>
  fs
    .readFile(fn)
    .then((body) => JSON.parse(body))
    .then((json) => {
      json.value = value;
      return json;
    })
    .then((json) => JSON.stringify(json))
    .then((body) => fs.writeFile(fn, body))
    .catch((error) => console.warn(error));

function save(item, filename) {
  const path = filename;
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([item]));
  } else {
    var data = fs.readFileSync(path, "utf8");
    var list = data.length ? JSON.parse(data) : [];
    if (list instanceof Array) list.push(item);
    else list = [item];
    fs.writeFileSync(path, JSON.stringify(list));
  }
}

const startScrapping = async (from, top) => {
  let index = from;
  let fileName = `./scrapped_data/suppliers-${top * index}-${top * index + top}.json`;
  ls = await getSuplier(0, top, fileName);
  suppliers.concat([ls]);
  const loop = Math.ceil(total / top);
  for (let index = from + 1; index < loop; index++) {
    console.log("🚀 ~ startScrapping ~ page: ", index);
    fileName = `./scrapped_data/suppliers-${top * index}-${top * index + top}.json`;

    if (fs.existsSync(fileName)) {
      const raw = fs.readFileSync(fileName, "utf8");
      const fl = JSON.parse(raw);
      if (fl.length !== top) {
        console.log(
          "Deleting old file ",
          fileName,
          " invalid length",
          fl.length
        );
        fs.unlinkSync(fileName);
        await getSuplier(top * index, top, fileName);
      } else {
        console.log("Found file ", fileName, " with ", top, "rows skipping.");
      }
    } else {
      await getSuplier(top * index, top, fileName);
    }
  }
};
const verifyFilesAndScrap = async (top) => {
  const loop = Math.ceil(18000 / top);
  let i = 0;
  let found = false;
  for (let index = 0; index < loop; index++) {
    let fileName = `./scrapped_data/suppliers-${top * index}-${top * index + top}.json`;
    if (fs.existsSync(fileName)) {
      const raw = fs.readFileSync(fileName, "utf8");
      const fl = JSON.parse(raw);
      if (fl.length !== top) {
        console.log("Deleting ", fileName, " invalid length", fl.length);
        fs.unlinkSync(fileName);
        if (!found) i = index;
        found = true;
      } else {
        console.log("Found file ", fileName, " with ", top, "rows skipping.");
      }
      //   }
    } else {
      if (!found) i = index;
      found = true;
    }
  }
  startScrapping(i, top);
};

verifyFilesAndScrap(Number(process.argv[2]));
// RUN node sc.js 50
