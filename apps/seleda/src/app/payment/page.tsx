"use client";
// import Telegram from "https://telegram.org/js/telegram-web-app.js";
import {
  postEvent,
  on,
  requestViewport,
  initMiniApp,
  initPopup,
  useMiniApp,
  usePopup,
  useMainButton,
  SDKProvider,
} from "@tma.js/sdk-react";

import { mock } from "../../config/mock.config";
import { FC, useEffect, useMemo, useState } from "react";
import PaymentMiniApp from "../../components/PaymentMiniApp";
import { ErrorBoundary } from "../../components/ErrorBoundary";

const ErrorBoundaryError: FC<{ error: unknown }> = ({ error }) => (
  <div>
    <p>An unhandled error occurred:</p>
    <blockquote>
      <code>
        {error instanceof Error
          ? error.message
          : typeof error === "string"
            ? error
            : JSON.stringify(error)}
      </code>
    </blockquote>
  </div>
);

export default function HomePage() {
  // const [ready, setReady] = useState(false);
  // useEffect(() => {
  //   setReady(true);
  //   }, []);
  if (typeof window !== "undefined") {
    // if (process.browser) {
    // client-side-only code
    mock();
  }
  return (
    <ErrorBoundary fallback={ErrorBoundaryError}>
      <SDKProvider acceptCustomStyles debug>
        <PaymentMiniApp />
      </SDKProvider>
    </ErrorBoundary>
  );
}
