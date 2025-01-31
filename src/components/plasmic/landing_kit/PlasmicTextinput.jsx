// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3SwC2F4BeXucfS9cpFbd24
// Component: Ds50KhWxRf
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_kit.module.css"; // plasmic-import: 3SwC2F4BeXucfS9cpFbd24/projectcss
import * as sty from "./PlasmicTextinput.module.css"; // plasmic-import: Ds50KhWxRf/css

export const PlasmicTextinput__VariantProps = new Array();

export const PlasmicTextinput__ArgProps = new Array();

function PlasmicTextinput__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  return (
    <input
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.input, projectcss.root_reset, sty.root)}
      placeholder={"Some placeholder"}
      size={1}
      type={"text"}
      value={"Some value"}
    />
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
      internalArgPropNames: PlasmicTextinput__ArgProps,
      internalVariantPropNames: PlasmicTextinput__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTextinput__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTextinput";
  } else {
    func.displayName = `PlasmicTextinput.${nodeName}`;
  }
  return func;
}

export const PlasmicTextinput = Object.assign(
  // Top-level PlasmicTextinput renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTextinput
    internalVariantProps: PlasmicTextinput__VariantProps,
    internalArgProps: PlasmicTextinput__ArgProps
  }
);

export default PlasmicTextinput;
/* prettier-ignore-end */
