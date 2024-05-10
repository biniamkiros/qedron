export const scrapToday = () => {};
export const scrapWeek = () => {};
export const scrapAll = async() => {
  let tender = []
  // let raw = []
  const perPage = 10
  const active = await getEGPActiveTenders(0, perPage);
  const {total,items} = active
  // raw.push(...items)
  tender.push(...items.map((item: { result: any; })=> item.result))
  // const skip = Math.ceil(total / perPage)+1
  for(let i=1; i<total; i + 10) {
    // const {total, items:{result}} = 
    getEGPActiveTenders(i, 10)
    .then(({total, items:{result}}) => {
      // if(total)
      tender.push(...items.map((item: { result: any; })=> item.result))
      if(i==total || i > total) {
        console.log("🚀 ~ fetching ~ tender complete");
        console.log("🚀 ~ getEGPActiveTenders ~ tender:", tender.length); 	
        return tender.flat()
      } else {
          console.log("🚀 ~ fetching ~ tender page:", i); 
        }
    	}
    	);
    }
    // raw.push(...items)
      // console.log("🚀 ~ scrapAll ~ tender:", tender)
  
};
export const getEGPTenderSummary = async () => {
  const summaryUrl =
    "https://egp.ppa.gov.et/po-gw/cms/api/sourcing/get-tender-summary";
  const res = await getRequest(summaryUrl);
  console.log("🚀 ~ getEGPTenderSummary ~ res:", res);
  return res;
};

export const getEGPActiveTenders = async (skip = 0, top = 10) => {
  const scrapActiveUrl = `https://production.egp.gov.et/po-gw/cms/api/sourcing/get-grouped-sourcing?type=all&skip=${skip}&top=${top}&locale=en&orderBy%5B0%5D.field=invitationDate&orderBy%5B0%5D.direction=desc`
  const scrapActiveUrl2 = `https://egp.ppa.gov.et/po-gw/cms/api/sourcing/get-grouped-sourcing?type=all&skip=${skip}&top=${top}&locale=en&orderBy%5B0%5D.field=invitationDate&orderBy%5B0%5D.direction=desc`;
  const activePage = await getRequest(scrapActiveUrl);
  return activePage;
};

export const getRequest = async (url:string) => {
  try {
    const response = await fetch(url, {
      method: "GET", // or 'PUT'
      // headers: {
      //   "Content-Type": "application/json",
      // },
    });

    return response.json();
    // return result;
  } catch (error) {
    console.error("Error:", error);
    // notifySeledaAdmin("Error scraping egp: " + url + "\n" + error);
    return null;
  }
};

const t = {
  packageId: "89df2369-3fde-462c-adb1-f6f3691bc557",
  count: 1,
  result: [
    {
      id: "4c0686a8-9497-4c30-866b-d81d3a134977",
      lotId: "8b7a5499-1460-464d-b07c-b67640891f73",
      lotInPackageId: "8b7a5499-1460-464d-b07c-b67640891f73",
      lotName: "procurement of registration book large/ባለመስመሩ መዝገብ/",
      lotDescription: "Goods",
      lotReferenceNo: "MoH-NCB-G-0323-2016-PUR",
      lotNo: "1",
      procurementReferenceNo: "MoH-NCB-G-0323-2016-PUR",
      procurementCategory: "Goods",
      packageId: "89df2369-3fde-462c-adb1-f6f3691bc557",
      packageInformation: {},
      procurementClassification: [],
      spdId: "00000000-0000-0000-0000-000000000000",
      submissionDeadline: "2024-02-07T01:00:00",
      openingSchedule: null,
      sourceId: "d897fea0-46d9-4f86-b0ec-968c425df5f2",
      sourceApplication: "Purchasing",
      method: "Open",
      language: "en",
      marketPlace: "National",
      procuringEntity: "Ministry of Health ",
      timestamp: "2024-02-06T14:05:22.307047",
      invitationDate: "2024-02-06T16:11:12.798716",
      suppliers: null,
      isSubmittable: true,
    },
  ],
};

const single = {
  quotationRequestInvitees: [],
  quotationRequestClassifications: [],
  id: "d897fea0-46d9-4f86-b0ec-968c425df5f2",
  quotationRequestId: "8b7a5499-1460-464d-b07c-b67640891f73",
  purchaseRequestDefinition: {
    governing_rule: "The Federal Republic of Ethiopia",
    terms_and_conditions: {
      termsAndConditions:
        "The procuring entity has the right to cancel the bid fully or partially",
    },
    eligibility_requirements: {
      bidSecurityForm: [],
      participationFee: null,
      bidSecurityAmount: 0,
      participationCurrency: null,
    },
  },
  lotInformation: {
    name: "procurement of registration book large/ባለመስመሩ መዝገብ/",
    address: {
      town: "Addis Ababa",
      email: "sebli19mm@gmail.com",
      poBox: "1234",
      street: "goma kuteba",
      country: "Ethiopia",
      postCode: "1000",
      telephone: {
        code: "+251",
        number: "967141479",
      },
      roomNumber: "MOH 2ND Floor procurement office",
    },
    award_type: "Item based",
    description: "Goods",
    market_type: "National",
    bid_currency: null,
    reference_no: "MoH-NCB-G-0323-2016-PUR",
    invitation_date: "2024-02-06 00:00:00.000-05:00",
    procurement_type: "Shopping",
    procuring_entity: "Ministry of Health ",
    procurement_method: "Open",
    submission_deadline: "2024-02-06 00:00:00",
    clarification_deadline: "2024-02-07T08:00:00",
    quatation_request_language: "en",
  },
  timestamp: "2024-02-06T16:11:12.758485",
  procurementMethod: "Open",
  submissionDeadline: "2024-02-06T00:00:00",
  status: "Published",
};
