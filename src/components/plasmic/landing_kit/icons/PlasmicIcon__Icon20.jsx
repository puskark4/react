// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon20Icon(props) {
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
          "M12 16.54l7.37-5.74L21 12.07l-9 7-9-7 1.62-1.26L12 16.54M12 14L3 7l9-7 9 7-9 7m0-11.47L6.26 7 12 11.47 17.74 7 12 2.53m0 18.94l7.37-5.74L21 17l-9 7-9-7 1.62-1.26L12 21.47"
        }
      ></path>
    </svg>
  );
}

export default Icon20Icon;
/* prettier-ignore-end */
