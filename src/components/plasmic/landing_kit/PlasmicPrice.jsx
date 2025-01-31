// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3SwC2F4BeXucfS9cpFbd24
// Component: -ltGw8pif2
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_kit.module.css"; // plasmic-import: 3SwC2F4BeXucfS9cpFbd24/projectcss
import * as sty from "./PlasmicPrice.module.css"; // plasmic-import: -ltGw8pif2/css

export const PlasmicPrice__VariantProps = new Array();

export const PlasmicPrice__ArgProps = new Array("children", "slot");

function PlasmicPrice__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__qtNb)}>
        {p.renderPlasmicSlot({
          defaultContents: "$",
          value: args.slot,
          className: classNames(sty.slotSlot)
        })}
      </div>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__bfMn)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__zZhxM
                )}
              >
                {"88"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__uuKmE
                )}
              >
                {".00"}
              </div>
            </React.Fragment>
          ),

          value: args.children
        })}
      </p.Stack>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicPrice__ArgProps,
      internalVariantPropNames: PlasmicPrice__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicPrice__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPrice";
  } else {
    func.displayName = `PlasmicPrice.${nodeName}`;
  }
  return func;
}

export const PlasmicPrice = Object.assign(
  // Top-level PlasmicPrice renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicPrice
    internalVariantProps: PlasmicPrice__VariantProps,
    internalArgProps: PlasmicPrice__ArgProps
  }
);

export default PlasmicPrice;
/* prettier-ignore-end */
