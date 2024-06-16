import type { FC, PropsWithChildren, ReactNode } from "react";

// import styles from "./Page.module.css";
import React from "react";

export interface PageProps extends PropsWithChildren {
  title: string;
  disclaimer?: ReactNode;
}

export const Page: FC<PageProps> = ({ title, children, disclaimer }) => (
  <div style={{ padding: "0 10px", boxSizing: "border-box;" }}>
    <h1>{title}</h1>
    {disclaimer && <div style={{ marginBottom: "16px" }}>{disclaimer}</div>}
    {children}
  </div>
);
