// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Icon7Icon(props) {
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
          "M12 2a3 3 0 00-3 3 3 3 0 002 2.83V9H8v2h3v8.92c-.74-.13-1.5-.34-2.21-.65-.74-.32-1.39-.71-1.97-1.18-.58-.47-1.04-.98-1.38-1.54L7 15l-4-3v3c0 .97.27 1.88.82 2.72A8.23 8.23 0 006 19.95c.87.64 1.84 1.14 2.88 1.5 1.05.36 2.09.55 3.12.55 1.03 0 2.07-.2 3.12-.56 1.04-.36 2.01-.86 2.88-1.49.92-.64 1.63-1.38 2.18-2.23.55-.84.82-1.75.82-2.72v-3l-4 3 1.56 1.55c-.34.56-.8 1.07-1.38 1.54-.58.47-1.23.86-1.97 1.18-.71.31-1.47.52-2.21.65V11h3V9h-3V7.82A3 3 0 0015 5a3 3 0 00-3-3m0 2a1 1 0 011 1 1 1 0 01-1 1 1 1 0 01-1-1 1 1 0 011-1z"
        }
      ></path>
    </svg>
  );
}

export default Icon7Icon;
/* prettier-ignore-end */
