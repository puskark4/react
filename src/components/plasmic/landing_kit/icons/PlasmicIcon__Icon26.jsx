// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon26Icon(props) {
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
          "M16 5V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v1a4 4 0 00-4 4v11a2 2 0 002 2h12a2 2 0 002-2V9a4 4 0 00-4-4m-6-1h4v1h-4V4m2 5l2 2-2 2-2-2 2-2m6 11H6v-4h2v2h1v-2h9v4m0-5H6V9a2 2 0 012-2h8a2 2 0 012 2v6z"
        }
      ></path>
    </svg>
  );
}

export default Icon26Icon;
/* prettier-ignore-end */
