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
    amount: amount,
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

export default function PaymentMiniApp() {
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

  // async function setViewportData() {
  //   requestViewport().then((data) => {
  //     var sizeEl = document.getElementById("viewport-params-size");
  //     if (sizeEl) {
  //       // Output:
  //       // { height: 122, isExpanded: false, width: 375, isStateStable: true }
  //       console.log(data);
  //       const appHeight = data.height;
  //       sizeEl.innerText =
  //         "width: " + window.innerWidth + " x " + "height: " + appHeight;
  //       var expandEl: HTMLElement | null = document.querySelector(
  //         "#viewport-params-expand"
  //       );
  //       if (expandEl) {
  //         const isAppExpanded = data.isExpanded;
  //         expandEl.innerText =
  //           "Is Expanded: " + (isAppExpanded ? "true" : "false");
  //       }
  //     }
  //   });
  // }

  const initDataRaw = useLaunchParams().initDataRaw;
  const initData = useInitData();
  const user = initData ? initData.user : null;

  return (
    <AppRoot
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
      style={{ backgroundColor: "var(--tg-theme-bg-color)" }}
    >
      <List
        style={{
          width: "100%",
          backgroundColor: "var(--tg-theme-bg-color)",
        }}
      >
        <Section
          header="የምዝገባ አማራጮች"
          // footer={
          //   <span>
          //     የነጻ ሙከራ ጊዜ ለማግኘት{" "}
          //     <Link onClick={() => showPopup()}>@qedron_chat</Link>
          //     ላይ መሄድ ይችላሉ።
          //   </span>
          // }
          style={{
            backgroundColor: "var(--tg-theme-bg-color)",
          }}
        >
          <Cell
            after={amount === threeMonthPrice ? <Badge type="dot" /> : null}
            before={
              <AvatarStack>
                <Avatar size={48} src="subscribers/sb2.jpg" />
                <Avatar size={48} src="subscribers/sb3.jpg" />
                <Avatar size={48} src="subscribers/sb4.jpg" />
              </AvatarStack>
            }
            description={features}
            interactiveAnimation="opacity"
            subhead="ሶስት ወራት"
            // subtitle="Subtitle"
            // titleBadge={<Badge type="dot" />}
            onClick={() => setAmount(threeMonthPrice)}
          >
            ብር {threeMonthPrice}
          </Cell>
          <Cell
            after={amount === oneYearPrice ? <Badge type="dot" /> : null}
            before={
              <AvatarStack>
                <Avatar size={48} src="subscribers/sb5.jpg" />
                <Avatar size={48} src="subscribers/sb6.jpg" />
                <Avatar size={48} src="subscribers/sb7.jpg" />
              </AvatarStack>
            }
            description={features}
            interactiveAnimation="opacity"
            subhead="አንድ ዓመት"
            titleBadge={
              <Badge large mode="critical" type="number">
                save {discountYear}%
              </Badge>
            }
            onClick={() => setAmount(oneYearPrice)}
          >
            ብር {oneYearPrice}
          </Cell>
          <Cell
            after={amount === sixMonthPrice ? <Badge type="dot" /> : null}
            before={
              <AvatarStack>
                <Avatar size={48} src="subscribers/sb8.jpg" />
                <Avatar size={48} src="subscribers/sb9.jpg" />
                <Avatar size={48} src="subscribers/sb10.jpg" />
              </AvatarStack>
            }
            description={features}
            interactiveAnimation="opacity"
            subhead="ስድስት ወራት"
            titleBadge={
              <Badge large mode="secondary" type="number">
                save {discountMonth}%
              </Badge>
            }
            onClick={() => setAmount(sixMonthPrice)}
          >
            ብር {sixMonthPrice}
          </Cell>
          {/* <Section.Footer centered>
            የነጻ ሙከራ ጊዜ ለማግኘት{" "}
            <Link
              onClick={() => utils.openTelegramLink("https://t.me/qedron_chat")}
            >
              @qedron_chat
            </Link>{" "}
            ላይ መሄድ ይችላሉ።
          </Section.Footer> */}
        </Section>
      </List>
    </AppRoot>
  );
}
