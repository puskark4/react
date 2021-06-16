// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon25Icon(props) {
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
          "M16 21H8a1 1 0 01-1-1v-7.93l-1.3 1.05c-.39.38-1.02.38-1.41 0l-2.83-2.83a.996.996 0 010-1.41L7.34 3H9c0 1.1 1.34 2 3 2s3-.9 3-2h1.66l5.88 5.88c.39.39.39 1.02 0 1.41l-2.83 2.83c-.39.38-1.02.38-1.41 0L17 12.07V20a1 1 0 01-1 1m4.42-11.42l-4.31-4.3c-.31.35-.68.66-1.11.92-.84.5-1.87.8-3 .8-1.7 0-3.21-.68-4.11-1.72l-4.31 4.3L5 11l3-2h1v10h6V9h1l3 2 1.42-1.42z"
        }
      ></path>
    </svg>
  );
}

export default Icon25Icon;
/* prettier-ignore-end */
