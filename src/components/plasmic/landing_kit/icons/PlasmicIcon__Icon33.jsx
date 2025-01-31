// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon33Icon(props) {
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
          "M2 7h20v3h-2l1 9h-2.5l-.56-5H6.06l-.56 5H3l1-9H2V7m15.5 3h-11l-.21 2h11.42l-.21-2z"
        }
      ></path>
    </svg>
  );
}

export default Icon33Icon;
/* prettier-ignore-end */
