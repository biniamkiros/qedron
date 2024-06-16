// import "~/styles/globals.css";

import "@telegram-apps/telegram-ui/dist/styles.css";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function PaymentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <title>Telegram Mini Apps Vanilla JS Sample App</title>
        <style>
          {`body {
        --bg-color: var(--tg-theme-bg-color);
        font: 12px/18px "Lucida Grande", "Lucida Sans Unicode", Arial, Helvetica,
          Verdana, sans-serif;
        background-color: var(--bg-color);
        color: var(--tg-theme-text-color);
        margin: 48px 24px;
        padding: 0;
        color-scheme: var(--tg-color-scheme);
      }

      a {
        color: var(--tg-theme-link-color);
      }
      #viewport {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        height: var(--tg-viewport-stable-height, 100vh);
        pointer-events: none;
        transition: all 0.2s ease;
      }
      #viewport:after {
        content: "";
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        border-width: 4px;
        border-style: solid;
        border-image: linear-gradient(
            45deg,
            rgba(64, 224, 208, 0.5),
            rgba(173, 255, 47, 0.5)
          )
          1;
      }

      #viewport-params-size,
      #viewport-params-expand {
        content: attr(text);
        position: absolute;
        display: inline-block;
        background: var(--tg-theme-link-color, rgb(64, 224, 208));
        right: 4px;
        left: auto;
        font-size: 8px;
        padding: 4px;
        vertical-align: top;
      }
      #viewport-params-size {
        top: 4px;
      }
      #viewport-params-expand {
        top: 30px;
      }`}
        </style>
      </head>
      <body className={`font-sans ${inter.variable}`}>
        {children}
        <div id="viewport"></div>
        <div id="viewport-params-size"></div>
        <div id="viewport-params-expand"></div>

        {/* <!-- Eruda is console for mobile browsers --> */}
        <script src="https://cdn.jsdelivr.net/npm/eruda"></script>
        <script>eruda.init();</script>
      </body>
    </html>
  );
}
