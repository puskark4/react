// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon35Icon(props) {
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
          "M6 12a6 6 0 016-6 6 6 0 016 6 6 6 0 01-6 6 6 6 0 01-6-6m14 0a7.94 7.94 0 00-3.05-6.27L16 0H8l-.95 5.73A7.94 7.94 0 004 12c0 2.54 1.19 4.81 3.05 6.27L8 24h8l.95-5.73A7.955 7.955 0 0020 12z"
        }
      ></path>
    </svg>
  );
}

export default Icon35Icon;
/* prettier-ignore-end */
