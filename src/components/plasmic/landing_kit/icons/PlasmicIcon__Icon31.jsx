// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon31Icon(props) {
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
        d={"M3 18h8.7l5.3-4h1v4h2v-4s1-2 1-4-.5-4-.5-4h-2L18 7l-8 7H8l-5 2v2z"}
      ></path>
    </svg>
  );
}

export default Icon31Icon;
/* prettier-ignore-end */
