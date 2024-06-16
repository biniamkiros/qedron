import { classNames, useUtils } from "@tma.js/sdk-react";
import { type FC, type MouseEventHandler, useCallback } from "react";

// import "./Link.css";
import Link, { LinkProps } from "next/link";
import React from "react";

export const TMALink: FC<LinkProps> = ({
  // className,
  onClick: propsOnClick,
  // href,
  href,
  ...rest
}) => {
  const utils = useUtils();

  const onClick = useCallback<MouseEventHandler<HTMLAnchorElement>>(
    (e) => {
      propsOnClick?.(e);

      // Compute if target path is external. In this case we would like to open link using
      // TMA method.
      let path: string;
      if (typeof href === "string") {
        path = href;
      } else {
        const { search = "", pathname = "", hash = "" } = href;
        path = `${pathname}?${search}#${hash}`;
      }

      const targetUrl = new URL(path, window.location.toString());
      const currentUrl = new URL(window.location.toString());
      const isExternal =
        targetUrl.protocol !== currentUrl.protocol ||
        targetUrl.host !== currentUrl.host;

      if (isExternal) {
        e.preventDefault();
        return utils.openLink(targetUrl.toString());
      }
    },
    [href, propsOnClick, utils]
  );

  return (
    <Link
      {...rest}
      href={href}
      onClick={onClick}
      className="text-decoration: none; color: var(--tg-theme-link-color);)"
    />
  );
};
