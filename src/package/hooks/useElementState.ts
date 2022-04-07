import { stateEnum } from "../constants/enums";
import {
  innerCssProcessor,
  outerCssProcessor,
  propertyCssProcessor,
} from "../helpers/cssProcessor";
import { Options } from "../components/types";
import { useState } from "react";

export function useElementState(options: Options = {}) {
  const { animation, style } = options;
  const [cssState, setCssState] = useState<stateEnum>(stateEnum.NONE);

  const onMouseEnter = () => setCssState(stateEnum.HOVER);
  const onMouseLeave = () => setCssState(stateEnum.NONE);

  const outerClass: string = [
    // programmatically apply hover style, because we want to be able to control css state in designer view
    cssState !== stateEnum.NONE ? `state-${cssState}` : "",
    outerCssProcessor(style),
    // ...this.visibilityClasses,
  ].join(" ");

  const innerClass: string = [
    animation ? `perpetual-animation ${animation}` : "",
    innerCssProcessor(style),
  ].join(" ");

  const propertyClass: string = [propertyCssProcessor(style)].join(" ");

  const onClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLDivElement>) => {
    if (options.click) {
      e.stopPropagation();
      e.preventDefault();
      options.click(e);
    }
  };

  //   computedState ({ options: { $state, $inheritState }, $containerParent, href }) {
  //   if ($state && $state.selected) return stateEnum.SELECTED
  //   if (href && href === this.$router.currentRoute.value.path) return stateEnum.SELECTED
  //   if ($inheritState && $containerParent) {
  //     const parentState = $containerParent.currentState
  //     if (parentState && $inheritState[parentState]) return parentState
  //   }
  //   return this.state
  // },

  // computed:{
  //   ...
  //   computedState
  //   isHover

  // onMouseEnter () {
  //   this.setIsHover()
  // },
  // onMouseLeave () {
  //   this.setIsHover(false)
  // }
  // setIsHover (isHover = true) {
  //   this.updateState(isHover ? stateEnum.HOVER : undefined)
  // },

  // }

  return {
    outerClass,
    innerClass,
    propertyClass,
    onMouseEnter,
    onMouseLeave,
    onClick,
  };
}
