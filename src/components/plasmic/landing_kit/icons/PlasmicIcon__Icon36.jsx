// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon36Icon(props) {
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
          "M22 10v3h-3v-3h3M2 13h3v-3H2v3m15-8c0-1.1-.9-2-2-2H9c-1.1 0-2 .9-2 2v8h10V5M7 15H6v2h5v1l-4 4h2.8l2.2-2.2 2.2 2.2H17l-4-4v-1h5v-2H7z"
        }
      ></path>
    </svg>
  );
}

export default Icon36Icon;
/* prettier-ignore-end */
