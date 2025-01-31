// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3SwC2F4BeXucfS9cpFbd24
// Component: qZnnGE7HkYG
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Button from "../../Button"; // plasmic-import: QaipWgLIw8/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: K7Rqgqmh9OYf/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_kit.module.css"; // plasmic-import: 3SwC2F4BeXucfS9cpFbd24/projectcss
import * as sty from "./PlasmicCallToActionSection1.module.css"; // plasmic-import: qZnnGE7HkYG/css

export const PlasmicCallToActionSection1__VariantProps = new Array();

export const PlasmicCallToActionSection1__ArgProps = new Array("art", "copy");

function PlasmicCallToActionSection1__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

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
      <div
        data-plasmic-name={"box"}
        data-plasmic-override={overrides.box}
        className={classNames(defaultcss.all, sty.box)}
      >
        <div
          data-plasmic-name={"art"}
          data-plasmic-override={overrides.art}
          className={classNames(defaultcss.all, sty.art)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <img
                  alt={""}
                  className={classNames(defaultcss.img, sty.img__y9D6D)}
                  role={"img"}
                  src={
                    "https://images.unsplash.com/photo-1530099486328-e021101a494a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2916&q=80"
                  }
                />

                <div className={classNames(defaultcss.all, sty.box__kxjfb)} />
              </React.Fragment>
            ),

            value: args.art
          })}
        </div>

        <p.Stack
          as={"div"}
          data-plasmic-name={"copy"}
          data-plasmic-override={overrides.copy}
          hasGap={true}
          className={classNames(defaultcss.all, sty.copy)}
        >
          {p.renderPlasmicSlot({
            defaultContents: (
              <React.Fragment>
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box__fdvGg)}
                >
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__gfKdM
                    )}
                  >
                    {"Welcome"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__qrel5
                    )}
                  >
                    {"Let's get going"}
                  </div>

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___4CgV
                    )}
                  >
                    {
                      "Consectetur a adipiscing sagittis sed proin libero himenaeos ornare adipiscing suscipit leo vestibulum facilisi consequat nisi nisi adipiscing habitant facilisis suspendisse hac integer eget quam facilisis sem placerat fames."
                    }
                  </div>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(defaultcss.all, sty.box___07YkE)}
                >
                  <Button
                    className={classNames("__wab_instance", sty.button__t8DX4)}
                    colors={"blue"}
                    slot={"Start now ->"}
                  />

                  <Button
                    bgDifference={"bgDifference"}
                    className={classNames("__wab_instance", sty.button__eW4Ap)}
                    darkGray={"darkGray"}
                    slot={
                      <div
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.box__xHg3V
                        )}
                      >
                        {"Learn more…"}
                      </div>
                    }
                  />
                </p.Stack>
              </React.Fragment>
            ),

            value: args.copy
          })}
        </p.Stack>
      </div>
    </p.Stack>
  );
}

const PlasmicDescendants = {
  root: ["root", "box", "art", "copy"],
  box: ["box", "art", "copy"],
  art: ["art"],
  copy: ["copy"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCallToActionSection1__ArgProps,
      internalVariantPropNames: PlasmicCallToActionSection1__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicCallToActionSection1__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCallToActionSection1";
  } else {
    func.displayName = `PlasmicCallToActionSection1.${nodeName}`;
  }
  return func;
}

export const PlasmicCallToActionSection1 = Object.assign(
  // Top-level PlasmicCallToActionSection1 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),
    art: makeNodeComponent("art"),
    copy: makeNodeComponent("copy"),
    // Metadata about props expected for PlasmicCallToActionSection1
    internalVariantProps: PlasmicCallToActionSection1__VariantProps,
    internalArgProps: PlasmicCallToActionSection1__ArgProps
  }
);

export default PlasmicCallToActionSection1;
/* prettier-ignore-end */
