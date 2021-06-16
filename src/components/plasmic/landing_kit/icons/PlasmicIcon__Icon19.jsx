// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon19Icon(props) {
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
          "M15.9 18.5l6 1.6-.4 1.9-9.4-2.5L2.7 22l-.5-1.9 6-1.6-6.1-1.6.5-1.9 9.4 2.5 9.4-2.5.5 1.9-6 1.6m.17-10.58c-.16-.22-.36-.42-.57-.59-.45-.43-1-.74-1.44-1.2C13 5.08 12.79 3.34 13.44 2c-.65.17-1.26.54-1.77.95C9.84 4.46 9.11 7.1 10 9.38c0 .07.04.15.04.24 0 .16-.11.3-.25.38a.512.512 0 01-.57-.23c-.8-1.03-.93-2.51-.38-3.7-1.19.99-1.84 2.65-1.73 4.22.02.36.07.71.19 1.07.11.44.29.87.52 1.25.75 1.25 2.08 2.15 3.5 2.33 1.52.2 3.14-.09 4.31-1.15 1.3-1.2 1.77-3.12 1.08-4.79l-.1-.17c-.14-.33-.33-.63-.57-.9l.03-.01m-2.24 4.55c-.2.18-.52.36-.78.44-.79.28-1.59-.12-2.05-.6.84-.2 1.34-.84 1.5-1.48.11-.58-.11-1.05-.21-1.61-.08-.53-.07-.99.13-1.49.13.27.27.55.44.77.55.72 1.41 1.04 1.59 2 .02.13.05.22.05.33 0 .6-.24 1.24-.68 1.64"
        }
      ></path>
    </svg>
  );
}

export default Icon19Icon;
/* prettier-ignore-end */
