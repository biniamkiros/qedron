"use client";
import {
  AppRoot,
  Cell,
  Link,
  Section,
  Image,
  List,
  Banner,
  Button,
  // CardCell,
  Card,
  ColorInput,
  IconContainer,
  Input,
  Slider,
  InlineButtons,
  LargeTitle,
  FixedLayout,
  Avatar,
  Badge,
  AvatarStack,
  Info,
  Placeholder,
} from "@telegram-apps/telegram-ui";
import {
  postEvent,
  on,
  requestViewport,
  initMiniApp,
  initPopup,
  useMiniApp,
  usePopup,
  useMainButton,
  MiniApp,
  useLaunchParams,
  bindMiniAppCSSVars,
  bindThemeParamsCSSVars,
  bindViewportCSSVars,
  useThemeParams,
  useViewport,
  initUtils,
  User,
  useInitData,
  parseInitData,
} from "@tma.js/sdk-react";
import { useEffect, useMemo, useState } from "react";

import tonSvg from "../components/ton.svg";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import React from "react";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";
import { env } from "~/env";

const discountMonth = 30;
const discountYear = 60;
const threeMonthPrice = 400;
const sixMonthPrice = threeMonthPrice * 2 * ((100 - discountMonth) / 100);
const oneYearPrice = threeMonthPrice * 4 * ((100 - discountYear) / 100);

const features = "ያልተገደበ የጨረታ ማሳወቂያ";

function makeid(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

const initSeledaPayment = async (user: any, amount: number) => {
  let sub = -1;
  switch (amount) {
    case threeMonthPrice:
      sub = 1000 * 60 * 60 * 24 * 30 * 3;
      break;
    case sixMonthPrice:
      sub = 1000 * 60 * 60 * 24 * 182;
      break;
    case oneYearPrice:
      sub = 1000 * 60 * 60 * 24 * 365;
      break;
    default:
      sub = -1;
      break;
  }
  if (sub < 0)
    return { status: "failed", messsage: "invalid amount", checkout: null };

  var raw = JSON.stringify({
    amount: 10,
    currency: "ETB",
    email: null,
    first_name: user.firstName,
    last_name: user.lastName,
    phone_number: user.phoneNumber,
    tx_ref: user.id + "-" + sub + "-" + makeid(8), //"user.id",
    callback_url: window.location.origin + "/api/chapa/confirm",
    return_url: "https://t.me/SeledaGramBot",
    customization: {
      title: "ሰሌዳግራም ምዝገባ",
      description: "ሰሌዳግራም ጨረታ ማሳወቂያ አገልግሎት ክፍያ",
    },
  });

  var requestOptions: any = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: raw,
    redirect: "follow",
  };

  const payment = await fetch(
    window.location.origin + "/api/chapa/payment",
    requestOptions
  );
  const r = await payment.json();
  return r;
};

export default function TenderDetailsMiniApp() {
  const miniApp = useMiniApp();
  const popup = usePopup();
  const mainButton = useMainButton();
  const utils = initUtils();
  const lp = useLaunchParams();
  // if (typeof window === "undefined")
  // return (
  //   <AppRoot
  //     appearance={miniApp.isDark ? "dark" : "light"}
  //     platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
  //     style={{ backgroundColor: "var(--tg-theme-bg-color)" }}
  //   >
  //     loading...
  //   </AppRoot>
  // );
  const themeParams = useThemeParams();
  const viewport = useViewport();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    postEvent("web_app_ready");
    postEvent("web_app_set_header_color", { color_key: "secondary_bg_color" });
    // setViewportData();
    // Telegram.WebApp.onEvent("viewportChanged", setViewportData);
    on("viewport_changed", (payload) => {
      // console.log('Viewport changed:', payload);
      // setViewportData();
    });

    on("theme_changed", (payload) => {
      // console.log('Viewport changed:', payload);
      document.body.setAttribute(
        "style",
        "--bg-color:" + payload.theme_params.bg_color
      );

      document.documentElement.className = miniApp.isDark ? "dark" : "light";
    });
  }, []);

  useEffect(() => {
    // postEvent("web_app_setup_main_button", {
    //   is_visible: amount > 0 ? true : false,
    //   text: `ብር${amount} ይክፈሉ`,
    // });
    // on("main_button_pressed", (payload) => {
    //   showPopup();
    // });
    mainButton.setParams({
      isVisible: amount > 0 ? true : false,
      text: `ብር${amount} ይክፈሉ`,
    });
    if (amount > 0) {
      mainButton.enable();
      mainButton.on("click", () => {
        handleMainButton(amount);
      });
    }
  }, [amount]);

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  function showPopup(title = "Hello!", message = "Here is a test message.") {
    if (!popup.isOpened)
      popup
        .open({
          title: title,
          message: message,
          buttons: [{ id: "my-id", type: "default", text: "Okay" }],
        })
        .then((buttonId: string | null) => {
          console.log(
            buttonId === null
              ? "User did not click any button"
              : `User clicked a button with ID "${buttonId}"`
          );
        });
  }

  // Function to toggle main TWA button
  function toggleMainButton() {
    if (mainButton.isVisible) {
      mainButton.hide();
    } else {
      mainButton.show();
    }
  }

  const handleMainButton = async (amount: number) => {
    if (amount < 100) {
      showPopup(
        "ስህተት",
        "ክፍያ ከ100 ብር ማነስ አይችልም። ምርጫዎን ያስተካክሉ እና እንደገና ይሞክሩ!" + amount
      );
      return;
    }
    if (!user) {
      showPopup("ስህተት", "የእርስዎን መረጃ ማግኘት አልተቻለም። ትንሽ ቆይተው እንደገና ይሞክሩ!");
      return;
    }

    const { status, checkout } = await initSeledaPayment(user, amount);
    if (status === "success" && checkout) {
      utils.openLink(checkout, true);
    } else
      showPopup(
        "ስህተት: " + status,
        "የክፍያ ስራዓቱ ችግር አጋጥሞታል። ትንሽ ቆይተው እንደገና ይሞክሩ!" //+ JSON.stringify(payment)
      );
  };

  const initDataRaw = useLaunchParams().initDataRaw;
  const initData = useInitData();
  const user = initData ? initData.user : null;

  return (
    <AppRoot
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
      style={{ backgroundColor: "var(--tg-theme-bg-color)" }}
    >
      <Placeholder description="ሙሉ መረጃ ከቴሌግራም ሳይወጡ ማየት ይችላሉ።" header="ጨረታ ዝርዝር">
        <img
          alt="Telegram sticker"
          className="blt0jZBzpxuR4oDhJc8s"
          src="https://xelene.me/telegram.gif"
          style={{ width: "25%" }}
        />
      </Placeholder>
      {/* <List
        style={{
          background: "var(--tgui--secondary_bg_color)",
          padding: "40px",
          width: 500,
        }}
      >
        <Section
          footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
          header="Main Settings"
        >
          <Cell before={<IconContainer>
           <Icon28Chat /> 
          </IconContainer>}>
            Chat Settings
          </Cell>
          <Cell
            before={<IconContainer>
            <Icon28Devices /> 
            </IconContainer>}
          >
            Data and Storage
          </Cell>
          <Cell before={<IconContainer>
           <Icon28Stats /> 
          </IconContainer>}>
            Devices
          </Cell>
        </Section>
        <Section
          footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
          header="Personal Information"
        >
          <Input
            header="First name"
            placeholder="21 y.o. designer from San Francisco"
          />
          <Input
            header="Last name"
            placeholder="21 y.o. designer from San Francisco"
          />
        </Section>
      </List> */}
    </AppRoot>
  );
}

const d = {
  id: "48de3bef-36ee-42fc-96b8-fa0082dfbebe",
  lotInPackageId: "5990a518-c88c-4cd1-8124-219efce5b05d",
  packageId: "f8bee400-f749-4fbf-858f-8d047a1b7658",
  lotId: "4fd1dc1c-84a5-4db8-95ca-8d6bc39fd833",
  spdId: "20b7719f-a898-48ad-a15b-4927b01abcc7",
  packageInformation: {
    address: {
      town: "DEBRE BIRHAN",
      email: "mulukenfikire12@gmail.com",
      poBox: "445",
      street: "DBU",
      country: "Ethiopia",
      postCode: "-",
      facsimile: "-",
      telephone: {
        code: "+251",
        number: "912907452",
      },
      roomNumber: "ADMIN BLOCK G17",
    },
    marketType: "National",
    envelopType: "single envelop",
    packageName: " የማገዶ እንጨት (ለሁለተኛ ጊዜ የወጣ)",
    packageNumber: "DBU-NCB-G-0034-2016-BID",
    invitationDate: "2024-06-27 15:00:00.000+03:00",
    procurementType: "Bidding",
    procuringEntity: {
      am: "ደብረ ብርሃን ዩኒቨርሰቲ ",
      en: "Debre Birhan University",
    },
    procurementMethod: "Open",
    packageDescription: " የማገዶ እንጨት (ለሁለተኛ ጊዜ የወጣ)",
    procurementCategory: "Goods",
    procurementLanguage: "en",
    procurementClassification: [],
  },
  procurementClassification: [],
  lotInformation: {
    lotNumber: 1,
    description: "student service directorate ",
    governingRule: {
      id: "fr6df296-2edf-498a-8a67-ff9e0a7a67f4",
      name: {
        en: "The Federal Republic of Ethiopia",
      },
    },
    sourceOfFund: "",
    openingSchedule: "2024-07-12 10:30:00.000+03:00",
    submissionDeadline: "2024-07-12 10:00:00.000+03:00",
    lotReferenceNumber: "EGP_PROC0012556",
    objectOfProcurement: "የማገዶ እንጨት (ለሁለተኛ ጊዜ የወጣ)",
    clarificationDeadline: "2024-07-08 17:00:00.000+03:00",
  },
  sourceOfFund: {},
  eligibilityRequirements: {
    eligibleDocument: [
      {
        id: "6a5f50d9-c5b6-4579-a0c4-c517c5be0b6b",
        note: null,
        order: 1,
        value: {},
        factor: "Bidder Nationality ",
        remark: null,
        mandate: "PE",
        category: "legalQualification",
        formLink: "bidSubmissionSheet",
        attribute: "nationality",
        reference: "4.2",
        isRequired: null,
        requirement: "<p>Nationality in accordance with ITB Sub-Clause 4.2</p>",
        itbDescription: "Bidder Nationality ",
        lotInPackageId: "00000000-0000-0000-0000-000000000000",
        jvCominedCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        spdQualificationId: null,
        financialEvaluationId: "00000000-0000-0000-0000-000000000000",
        singleEntityCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        technicalEvaluationId: "3aa6749c-f548-406f-a7cd-1215bcaebb12",
        jvEachPartherCondition: {
          value: "good to have",
          additionalRequirements: null,
        },
        jvAtleastOnePartnerCondition: {
          value: "good to have",
          additionalRequirements: null,
        },
      },
      {
        id: "e131f8ec-0c27-4cc8-87de-49797c716179",
        note: null,
        order: 2,
        value: {},
        factor: "Conflict of interest ",
        remark: null,
        mandate: "PE",
        category: "legalQualification",
        formLink: "bidSubmissionSheet",
        attribute: "conflictOfInterest",
        reference: "4.3",
        isRequired: null,
        requirement:
          '<p><span style="background-color: rgb(232, 234, 239);">No conflict of interest as described in ITB Clause</span> 4.3</p>',
        itbDescription: "Conflict of interest ",
        lotInPackageId: "00000000-0000-0000-0000-000000000000",
        jvCominedCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        spdQualificationId: null,
        financialEvaluationId: "00000000-0000-0000-0000-000000000000",
        singleEntityCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        technicalEvaluationId: "3aa6749c-f548-406f-a7cd-1215bcaebb12",
        jvEachPartherCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        jvAtleastOnePartnerCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
      },
      {
        id: "856909ce-c957-409b-bd8d-f2f496963481",
        note: null,
        order: 6,
        value: {
          value: [],
        },
        factor: "Valid tax clearance certificate for Domestic Bidders ",
        remark: null,
        mandate: "PE",
        category: "legalQualification",
        formLink: "certificationCompliance",
        attribute: "generalSpecification",
        reference: "4.6(b)(iii)",
        isRequired: null,
        requirement:
          '<p><span style="background-color: rgb(232, 234, 239);">Having been submitted valid tax clearance certificate issued by the tax authority (Domestic Bidders Only) in accordance with ITB Clause</span> 4.6(b)(iii)</p>',
        itbDescription: "Valid tax clearance certificate for Domestic Bidders ",
        lotInPackageId: "00000000-0000-0000-0000-000000000000",
        jvCominedCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        spdQualificationId: null,
        financialEvaluationId: "00000000-0000-0000-0000-000000000000",
        singleEntityCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        technicalEvaluationId: "3aa6749c-f548-406f-a7cd-1215bcaebb12",
        jvEachPartherCondition: {
          value: "good to have",
          additionalRequirements: null,
        },
        jvAtleastOnePartnerCondition: {
          value: "good to have",
          additionalRequirements: null,
        },
      },
      {
        id: "beae0971-020a-47fa-b6ac-bbf382e26b91",
        note: null,
        order: 8,
        value: {
          value: [],
        },
        factor:
          "Debarred by a decision of the Public Procurement and Property Authority",
        remark: null,
        mandate: "PE",
        category: "legalQualification",
        formLink: "certificationCompliance",
        attribute: "generalSpecification",
        reference: "4.4",
        isRequired: null,
        requirement:
          "<p>Bidder has been debarred by a decision of the Public Procurement and Property Administration Agency from participating in public procurements for breach of its obligation under previous contracts, in accordance with ITB Clause 4.4.</p>",
        itbDescription:
          "Debarred by a decision of the Public Procurement and Property Authority",
        lotInPackageId: "00000000-0000-0000-0000-000000000000",
        jvCominedCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        spdQualificationId: null,
        financialEvaluationId: "00000000-0000-0000-0000-000000000000",
        singleEntityCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        technicalEvaluationId: "3aa6749c-f548-406f-a7cd-1215bcaebb12",
        jvEachPartherCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        jvAtleastOnePartnerCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
      },
      {
        id: "60be504f-57d7-44e7-89d5-f716a9cee171",
        note: null,
        order: 9,
        value: {
          value: [],
        },
        factor: "Form Data on Joint Ventures",
        remark: null,
        mandate: "PE",
        category: "legalQualification",
        formLink: "bidSubmissionSheet",
        attribute: "generalSpecification",
        reference: "4.1",
        isRequired: null,
        requirement:
          "<p>In the case of a bid submitted by a joint venture (JV), the Bidder has failed to submit the Form Data on Joint Ventures, the Agreement governing the formation of joint venture, or letter of intent to form JV, including a draft agreement, in accordance with ITB Clause 4.1</p>",
        itbDescription: "Form Data on Joint Ventures",
        lotInPackageId: "00000000-0000-0000-0000-000000000000",
        jvCominedCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        spdQualificationId: null,
        financialEvaluationId: "00000000-0000-0000-0000-000000000000",
        singleEntityCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        technicalEvaluationId: "3aa6749c-f548-406f-a7cd-1215bcaebb12",
        jvEachPartherCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        jvAtleastOnePartnerCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
      },
      {
        id: "c33d3230-6f85-479c-900f-65703b57dc73",
        note: null,
        order: 3,
        value: {
          value: [],
        },
        factor: "Valid business license ",
        remark: null,
        mandate: "PE",
        category: "legalQualification",
        formLink: "certificationCompliance",
        attribute: "generalSpecification",
        reference: "4.6(b)(i)",
        isRequired: null,
        requirement:
          '<p><span style="background-color: rgb(232, 234, 239);">Having been submitted valid trade license or business organization registration certificate issued by the country of establishment in accordance with ITB Clause 4.6</span>(b)(i)</p>',
        itbDescription: "Valid business license ",
        lotInPackageId: "00000000-0000-0000-0000-000000000000",
        jvCominedCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        spdQualificationId: null,
        financialEvaluationId: "00000000-0000-0000-0000-000000000000",
        singleEntityCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        technicalEvaluationId: "3aa6749c-f548-406f-a7cd-1215bcaebb12",
        jvEachPartherCondition: {
          value: "good to have",
          additionalRequirements: null,
        },
        jvAtleastOnePartnerCondition: {
          value: "good to have",
          additionalRequirements: null,
        },
      },
      {
        id: "2dbf27fd-6816-42b4-9cec-eccb3ed00aab",
        note: null,
        order: 5,
        value: {
          value: [],
        },
        factor: "VAT registration certificate for Domestic Bidders",
        remark: null,
        mandate: "PE",
        category: "legalQualification",
        formLink: "certificationCompliance",
        attribute: "generalSpecification",
        reference: "4.6(b)(ii)",
        isRequired: null,
        requirement:
          '<p><span style="background-color: rgb(232, 234, 239);">Having been submitted VAT registration certificate issued by the tax authority (in case of contract value of Birr 100,000.00 and above) in accordance with ITB Clause&nbsp; </span>4. 6(b)(ii)</p>',
        itbDescription: "VAT registration certificate for Domestic Bidders",
        lotInPackageId: "5990a518-c88c-4cd1-8124-219efce5b05d",
        jvCominedCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        spdQualificationId: "2e84f542-134b-46db-91ae-70389b08daa2",
        financialEvaluationId: "00000000-0000-0000-0000-000000000000",
        singleEntityCondition: {
          value: "must meet",
          additionalRequirements: null,
        },
        technicalEvaluationId: "3aa6749c-f548-406f-a7cd-1215bcaebb12",
        jvEachPartherCondition: {
          value: "good to have",
          additionalRequirements: null,
        },
        jvAtleastOnePartnerCondition: {
          value: "good to have",
          additionalRequirements: null,
        },
      },
    ],
    participationFee: 0,
    bidSecurityAmount: {
      amount: 60000,
    },
    bidSecurityFormForLocalBidders: ["Bank/Wire Transfer", "Bank_Guarantee"],
    bidSecurityFormForSMEBidders: ["Letter_from_Small_and_Micro_Enterprise"],
  },
  termsAndConditions: {
    termsAndConditions:
      "\tኦሪጅናል የጨረታ ማስከበሪያ ጨረታው ከመዘጋቱ በፊት በአካል መቅረብ አለበት፡፡ \n\tዩኒቨርሲቲው የተሻለ አማራጭ ካገኘ ጨረታውን በከፊልም ሆነ በሙሉ የመሰረዝ መብቱ የተጠበቀ ነው፡፡\n",
  },
  suppliers: [],
  status: "Published",
};
