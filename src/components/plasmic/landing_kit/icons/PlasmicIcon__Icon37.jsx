// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon37Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fill={"currentColor"}
        d={
          "M15 5v7H9V5h6m0-2H9a2 2 0 00-2 2v9h10V5a2 2 0 00-2-2m7 7h-3v3h3v-3M5 10H2v3h3v-3m15 5H4v6h2v-4h12v4h2v-6z"
        }
      ></path>
    </svg>
  );
}

export default Icon37Icon;
/* prettier-ignore-end */
