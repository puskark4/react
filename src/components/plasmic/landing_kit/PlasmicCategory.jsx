// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3SwC2F4BeXucfS9cpFbd24
// Component: MuQdqaRx3L
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
import * as sty from "./PlasmicCategory.module.css"; // plasmic-import: MuQdqaRx3L/css

export const PlasmicCategory__VariantProps = new Array();

export const PlasmicCategory__ArgProps = new Array("children", "slot");

function PlasmicCategory__RenderFunc(props) {
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
      <div className={classNames(defaultcss.all, sty.box__sJux)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__wa3Qt)}
              role={"img"}
              src={
                "https://images.unsplash.com/photo-1552664199-fd31f7431a55?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3034&q=80"
              }
            />
          ),

          value: args.children
        })}
      </div>

      <div className={classNames(defaultcss.all, sty.box__llTv7)}>
        <div className={classNames(defaultcss.all, sty.box__s9Wzs)}>
          {p.renderPlasmicSlot({
            defaultContents: "New arrivals",
            value: args.slot,
            className: classNames(sty.slotSlot)
          })}
        </div>
      </div>
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
      internalArgPropNames: PlasmicCategory__ArgProps,
      internalVariantPropNames: PlasmicCategory__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCategory__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCategory";
  } else {
    func.displayName = `PlasmicCategory.${nodeName}`;
  }
  return func;
}

export const PlasmicCategory = Object.assign(
  // Top-level PlasmicCategory renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicCategory
    internalVariantProps: PlasmicCategory__VariantProps,
    internalArgProps: PlasmicCategory__ArgProps
  }
);

export default PlasmicCategory;
/* prettier-ignore-end */
