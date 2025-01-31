// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3SwC2F4BeXucfS9cpFbd24
// Component: sf7ZQXAWpm2
import * as React from "react";
import * as p from "@plasmicapp/react-web";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Navigation from "../../Navigation"; // plasmic-import: QL_hAqdWKc/component
import Button from "../../Button"; // plasmic-import: QaipWgLIw8/component
import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: K7Rqgqmh9OYf/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_landing_kit.module.css"; // plasmic-import: 3SwC2F4BeXucfS9cpFbd24/projectcss
import * as sty from "./PlasmicHeroSection4.module.css"; // plasmic-import: sf7ZQXAWpm2/css
import image13XpI2S7PCl2 from "./images/image13.svg"; // plasmic-import: XpI2S7pCl2/picture

export const PlasmicHeroSection4__VariantProps = new Array();

export const PlasmicHeroSection4__ArgProps = new Array();

function PlasmicHeroSection4__RenderFunc(props) {
  const { variants, args, overrides, forNode, dataFetches } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <Navigation
        data-plasmic-name={"navigation"}
        data-plasmic-override={overrides.navigation}
        className={classNames("__wab_instance", sty.navigation)}
      >
        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__dR7Vf)}
          role={"img"}
          src={image13XpI2S7PCl2}
        />
      </Navigation>

      <div
        data-plasmic-name={"hero"}
        data-plasmic-override={overrides.hero}
        className={classNames(defaultcss.all, sty.hero)}
      >
        <img
          alt={""}
          className={classNames(defaultcss.img, sty.img__mnTDh)}
          role={"img"}
          src={
            "https://thaichamber.org/public/themes/backend/img/bg-gradient/Columbia-Blue.jpg"
          }
        />

        <div
          data-plasmic-name={"background5"}
          data-plasmic-override={overrides.background5}
          className={classNames(defaultcss.all, sty.background5)}
        />

        <p.Stack
          as={"div"}
          data-plasmic-name={"foreground"}
          data-plasmic-override={overrides.foreground}
          hasGap={true}
          className={classNames(defaultcss.all, sty.foreground)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__yxlVw)}
          >
            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__uJojH)}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__jkr5A
                )}
              >
                <span>
                  <React.Fragment>{"Designs that "}</React.Fragment>
                  <span style={{ textDecoration: "underline" }}>{"mesh"}</span>
                </span>
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__mJos6
                )}
              >
                {
                  "Orci dui condimentum rutrum laoreet hac purus porta sem sem a vivamus a posuere vel molestie."
                }
              </div>
            </p.Stack>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(defaultcss.all, sty.box__ypKn)}
            >
              <Button
                className={classNames("__wab_instance", sty.button__q8UZl)}
                darkGray={"darkGray"}
                slot={"Start now ->"}
              />

              <Button
                bgDifference={"bgDifference"}
                className={classNames("__wab_instance", sty.button__agoYt)}
                darkGray={"darkGray"}
                slot={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__w2Ju
                    )}
                  >
                    {"Learn more…"}
                  </div>
                }
              />
            </p.Stack>
          </p.Stack>

          <div className={classNames(defaultcss.all, sty.box__k7LlP)} />
        </p.Stack>
      </div>
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "navigation", "hero", "background5", "foreground"],
  navigation: ["navigation"],
  hero: ["hero", "background5", "foreground"],
  background5: ["background5"],
  foreground: ["foreground"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHeroSection4__ArgProps,
      internalVariantPropNames: PlasmicHeroSection4__VariantProps
    });

    const { dataFetches } = props;
    return PlasmicHeroSection4__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeroSection4";
  } else {
    func.displayName = `PlasmicHeroSection4.${nodeName}`;
  }
  return func;
}

export const PlasmicHeroSection4 = Object.assign(
  // Top-level PlasmicHeroSection4 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navigation: makeNodeComponent("navigation"),
    hero: makeNodeComponent("hero"),
    background5: makeNodeComponent("background5"),
    foreground: makeNodeComponent("foreground"),
    // Metadata about props expected for PlasmicHeroSection4
    internalVariantProps: PlasmicHeroSection4__VariantProps,
    internalArgProps: PlasmicHeroSection4__ArgProps
  }
);

export default PlasmicHeroSection4;
/* prettier-ignore-end */
