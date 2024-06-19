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
} from "@tma.js/sdk-react";
import { useEffect, useState } from "react";

import tonSvg from "../components/ton.svg";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import React from "react";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";

const discountMonth = 30;
const discountYear = 60;
const threeMonthPrice = 400;
const sixMonthPrice = threeMonthPrice * 2 * ((100 - discountMonth) / 100);
const oneYearPrice = threeMonthPrice * 4 * ((100 - discountYear) / 100);

const features = "ያልተገደበ የጨረታ ማሳወቂያ";
export default function PaymentMiniApp() {
  if (typeof window === "undefined") return <div>loading...</div>;
  const miniApp = useMiniApp();
  const popup = usePopup();
  const mainButton = useMainButton();

  const lp = useLaunchParams();
  const themeParams = useThemeParams();
  const viewport = useViewport();
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    postEvent("web_app_ready");
    postEvent("web_app_set_header_color", { color_key: "secondary_bg_color" });
    setViewportData();
    // Telegram.WebApp.onEvent("viewportChanged", setViewportData);
    on("viewport_changed", (payload) => {
      // console.log('Viewport changed:', payload);
      setViewportData();
    });

    on("theme_changed", (payload) => {
      // console.log('Viewport changed:', payload);
      document.body.setAttribute(
        "style",
        "--bg-color:" + payload.theme_params.bg_color
      );

      document.documentElement.className = miniApp.isDark ? "dark" : "light";
    });

    postEvent("web_app_setup_main_button", {
      is_visible: true,
      text: "Pay now",
    });

    on("main_button_pressed", (payload) => {});
  }, []);

  useEffect(() => {
    return bindMiniAppCSSVars(miniApp, themeParams);
  }, [miniApp, themeParams]);

  useEffect(() => {
    return bindThemeParamsCSSVars(themeParams);
  }, [themeParams]);

  useEffect(() => {
    return viewport && bindViewportCSSVars(viewport);
  }, [viewport]);

  function showPopup() {
    popup
      .open({
        title: "Hello!",
        message: "Here is a test message.",
        buttons: [{ id: "my-id", type: "default", text: "Default text" }],
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

  async function setViewportData() {
    requestViewport().then((data) => {
      var sizeEl = document.getElementById("viewport-params-size");
      if (sizeEl) {
        // Output:
        // { height: 122, isExpanded: false, width: 375, isStateStable: true }
        console.log(data);

        const appHeight = data.height;
        sizeEl.innerText =
          "width: " + window.innerWidth + " x " + "height: " + appHeight;

        var expandEl: HTMLElement | null = document.querySelector(
          "#viewport-params-expand"
        );
        if (expandEl) {
          const isAppExpanded = data.isExpanded;
          expandEl.innerText =
            "Is Expanded: " + (isAppExpanded ? "true" : "false");
        }
      }
    });
  }

  return (
    <AppRoot
      appearance={miniApp.isDark ? "dark" : "light"}
      platform={["macos", "ios"].includes(lp.platform) ? "ios" : "base"}
      // style={{ backgroundColor: "var(--tg-theme-secondary-bg-color)" }}
    >
      {/* <FixedLayout vertical="bottom"> */}
      <List
        style={{
          // background: "var(--tgui--secondary_bg_color)",
          // padding: "12px",
          width: "100%",
        }}
      >
        <Section
        // footer="The official Telegram app is available for Android, iPhone, iPad, Windows, macOS and Linux."
        // header="Main Settings"
        >
          {/* <Section
        style={{
          backgroundColor: "#ffffff",
        }}
        > */}
          {/* <Info subtitle="Subtitle" type="text"> */}
          <LargeTitle
            weight="3"
            color="accent"
            style={{
              padding: 12,
              width: "100%",
              // height: "40vh",
              textAlign: "center",
              alignContent: "center",
              verticalAlign: "center",
            }}
          >
            <Placeholder>
              {/* description="ዋጋው የዝውውር ክፍያን ይጨምራል"> */}
              {amount > 0 ? (
                <span>
                  <span
                    style={{
                      color: "var(--tg-theme-hint-color)",
                    }}
                  >
                    ብር{" "}
                  </span>
                  <span
                    style={{
                      // fontSize: "52px",
                      color: "var(--tg-theme-text-color)",
                    }}
                  >
                    {amount}
                  </span>
                </span>
              ) : (
                <span>ጥቅል ይምረጡ</span>
              )}
            </Placeholder>
          </LargeTitle>
          {/* </Info> */}
        </Section>

        <Section
          header="የምዝገባ አማራጮች"
          // footer="የነጻ ሙከራ ጊዜ ለማግኘየት@qedron_chat</a> ላይ መሄድ ይችላሉ።"
        >
          <Cell
            // after={<Badge type="number">62</Badge>}
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
            // after={<Badge type="number">3200+</Badge>}
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
            // after={<Badge type="number">340+</Badge>}
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
        </Section>
      </List>
      {/* </FixedLayout> */}
    </AppRoot>
  );
}
