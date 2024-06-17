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
import { useEffect } from "react";

import tonSvg from "../components/ton.svg";
import { CardChip } from "@telegram-apps/telegram-ui/dist/components/Blocks/Card/components/CardChip/CardChip";
import React from "react";
import { InlineButtonsItem } from "@telegram-apps/telegram-ui/dist/components/Blocks/InlineButtons/components/InlineButtonsItem/InlineButtonsItem";

export default function PaymentMiniApp() {
  if (typeof window === "undefined") return <div>loading...</div>;
  const miniApp = useMiniApp();
  const popup = usePopup();
  const mainButton = useMainButton();

  const lp = useLaunchParams();
  const themeParams = useThemeParams();
  const viewport = useViewport();

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
    >
      <FixedLayout
        vertical="top"
        style={{
          alignContent: "center",
        }}
      >
        <Section header="seleda subscription">
          <LargeTitle
            weight="3"
            color="accent"
            style={{
              padding: 16,
            }}
          >
            br
            <span
              style={{ fontSize: "76px", color: "var(--tg-theme-link-color)" }}
            >
              $207
            </span>
          </LargeTitle>

          {/* <Card type="plain">
            <React.Fragment key=".0">
              <CardChip readOnly>Recomended</CardChip>
              <Cell readOnly subtitle="United states">
                3 months
              </Cell>
            </React.Fragment>
          </Card> */}

          {/* <Card type="plain">
            <Cell
              // after={<Badge type="number">99</Badge>}
              // before={<Avatar size={48} />}
              description="Description"
              subhead="Subhead"
              subtitle="Subtitle"
              titleBadge={<Badge type="dot" />}
            >
              Title
            </Cell>
          </Card> */}
          <InlineButtons mode="bezeled">
            <InlineButtonsItem>
              <Cell
                description="Description"
                subhead="አንድ ወር"
                subtitle="Subtitle"
              >
                ብር{" "}
                <span
                  style={{
                    fontSize: "32px",
                    color: "var(--tg-theme-link-color)",
                  }}
                >
                  207
                </span>
              </Cell>
            </InlineButtonsItem>
            <InlineButtonsItem>
              <Cell
                description="Description"
                subhead="አንድ ዓመት"
                subtitle="Subtitle"
                titleBadge={
                  <Badge large mode="critical" type="number">
                    save 60%
                  </Badge>
                }
              >
                ብር{" "}
                <span
                  style={{
                    fontSize: "32px",
                    color: "var(--tg-theme-link-color)",
                  }}
                >
                  680
                </span>
              </Cell>
            </InlineButtonsItem>
            <InlineButtonsItem>
              {/* text="QR"> */}
              <Cell
                description="Description"
                subhead="ሶስት ወራት"
                subtitle="Subtitle"
              >
                ብር{" "}
                <span
                  style={{
                    fontSize: "32px",
                    color: "var(--tg-theme-link-color)",
                  }}
                >
                  420
                </span>
              </Cell>
            </InlineButtonsItem>
          </InlineButtons>
        </Section>

        {/* <Button size="l" stretched>
          This is FixedLayout with top vertical
        </Button> */}
      </FixedLayout>

      {/* <main>
        <div style={{ alignContent: "center" }}>
          <a href="https://ton.org/">
            <img
              width="48"
              src="./assets/tapps.png"
              alt="logo of telegram web apps"
            />
          </a>
        </div>
        <h1>Modals</h1>
        <button
          onClick={() => {
            popup
              .open({
                title: "Hello!",
                message: "Here is a test message.",
                buttons: [
                  { id: "my-id", type: "default", text: "Default text" },
                ],
              })
              .then((buttonId: string | null) => {
                console.log(
                  buttonId === null
                    ? "User did not click any button"
                    : `User clicked a button with ID "${buttonId}"`
                );
              });
          }}
        >
          Launch Alert
        </button>
        <button onClick={() => showPopup()}>Launch Popup</button>

        <h1>Links</h1>
        <ul>
          <li>
            <a href="javascript:Telegram.WebApp.openTelegramLink('https://t.me/trendingapps');">
              Open link within Telegram
            </a>
          </li>
          <li>
            <a href="javascript:Telegram.WebApp.openLink('https://ton.org/');">
              Open link in external browser
            </a>
          </li>
          <li>
            <a href="javascript:Telegram.WebApp.openLink('https://telegra.ph/api',{try_instant_view:true});">
              Open link inside Telegram webview
            </a>
          </li>
        </ul>

        <h1>Buttons</h1>
        <button onClick={() => postEvent("web_app_expand")}>
          Expand Webview
        </button>
        <button onClick={() => toggleMainButton()}>Toggle Main Button</button>
      </main> */}
    </AppRoot>

    // <Page title="Home Page">
    //   <p>
    //     This page is a home page in this boilerplate. You can use the links
    //     below to visit other pages with their own functionality.
    //   </p>
    //   <ul className="list-style: none; padding-left: 0;">
    //     {routes.map(
    //       ({ path, title, icon }) =>
    //         title && (
    //           <li style={{ marginTop: "10px" }} key={path}>
    //             <a
    //               style={{
    //                 fontWeight: "bold",
    //                 display: "inline-flex",
    //                 gap: "5px",
    //               }}
    //               href={path}
    //             >
    //               {/* {icon && (
    //                 <i className="width: 20px; display: block;">{icon}</i>
    //               )} */}
    //               {title}
    //             </a>
    //           </li>
    //         )
    //     )}
    //   </ul>
    // </Page>
    // <AppRoot>
    //   <Placeholder header="Title" description="Description">
    //     <img
    //       alt="Telegram sticker"
    //       src="https://xelene.me/telegram.gif"
    //       style={{ display: "block", width: "144px", height: "144px" }}
    //     />
    //     <Button>hvjvj</Button>
    //   </Placeholder>
    // </AppRoot>

    // <List>
    //   <Section
    //     header="Features"
    //     footer="You can use these pages to learn more about features, provided by Telegram Mini Apps and other useful projects"
    //   >
    //     <Link to="/ton-connect">
    //       <Cell
    //         before={
    //           <Image src={tonSvg} style={{ backgroundColor: "#007AFF" }} />
    //         }
    //         subtitle="Connect your TON wallet"
    //       >
    //         TON Connect
    //       </Cell>
    //     </Link>
    //   </Section>
    //   <Section
    //     header="Application Launch Data"
    //     footer="These pages help developer to learn more about current launch information"
    //   >
    //     <Link to="/init-data">
    //       <Cell subtitle="User data, chat information, technical data">
    //         Init Data
    //       </Cell>
    //     </Link>
    //     <Link to="/launch-params">
    //       <Cell subtitle="Platform identifier, Mini Apps version, etc.">
    //         Launch Parameters
    //       </Cell>
    //     </Link>
    //     <Link to="/theme-params">
    //       <Cell subtitle="Telegram application palette information">
    //         Theme Parameters
    //       </Cell>
    //     </Link>
    //   </Section>
    // </List>
  );
}
