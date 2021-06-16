// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3SwC2F4BeXucfS9cpFbd24
// Component: 1MFPRU1oT6
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
import * as sty from "./PlasmicTestimonial.module.css"; // plasmic-import: 1MFPRU1oT6/css

export const PlasmicTestimonial__VariantProps = new Array();

export const PlasmicTestimonial__ArgProps = new Array(
  "slot2",
  "slot3",
  "slot",
  "children"
);

function PlasmicTestimonial__RenderFunc(props) {
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
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__n5N7B)}
      >
        {p.renderPlasmicSlot({
          defaultContents:
            '"A sem a velit consequat a torquent posuere nibh consectetur ac sodales mi vulputate imperdiet suspendisse a adipiscing felis convallis est tristique faucibus condimentum ante viverra."',
          value: args.children,
          className: classNames(sty.slotChildren)
        })}
      </p.Stack>

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box__aYnpe)}
      >
        {p.renderPlasmicSlot({
          defaultContents: (
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__mhdDy)}
              role={"img"}
            />
          ),

          value: args.slot
        })}

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box___9Qz4Q)}
        >
          <div className={classNames(defaultcss.all, sty.box__buwIe)}>
            {p.renderPlasmicSlot({
              defaultContents: "Tracy Jordan",
              value: args.slot2,
              className: classNames(sty.slotSlot2)
            })}
          </div>

          {p.renderPlasmicSlot({
            defaultContents: "Comedian, TGS",
            value: args.slot3,
            className: classNames(sty.slotSlot3)
          })}
        </p.Stack>
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
      internalArgPropNames: PlasmicTestimonial__ArgProps,
      internalVariantPropNames: PlasmicTestimonial__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicTestimonial__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicTestimonial";
  } else {
    func.displayName = `PlasmicTestimonial.${nodeName}`;
  }
  return func;
}

export const PlasmicTestimonial = Object.assign(
  // Top-level PlasmicTestimonial renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicTestimonial
    internalVariantProps: PlasmicTestimonial__VariantProps,
    internalArgProps: PlasmicTestimonial__ArgProps
  }
);

export default PlasmicTestimonial;
/* prettier-ignore-end */
