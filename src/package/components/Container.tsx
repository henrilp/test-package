import { useScrollClass } from "../hooks/useScrollClass";
import { useElementState } from "../hooks/useElementState";
import React from "react";
import SimpleContainer from "./SimpleContainer";
import { Options } from "./types";

export interface ContainerProps {
  children: any;
  simple?: boolean;
  options?: Options;
  code: string;
  xs?: any;
  data?: any;
}

/**
 * A container, that can be "simple" or not, used for layout purposes or specific objects like video
 * @returns
 */
const Container = ({
  children,
  simple,
  options = {},
  code,
}: ContainerProps) => {
  const { overflow, flexDirection, click } = options;

  const { outerClass, innerClass, onMouseEnter, onMouseLeave, propertyClass } =
    useElementState(options);

  // get scroller class
  const { scrollerClass } = useScrollClass({
    overflow,
    flexDirection,
  });
  if (simple) {
    return (
      <SimpleContainer
        simple
        className={["outer-style", "kapix-simple", code, outerClass].join(" ")}
        scrollerClass={scrollerClass}
        code={code}
        onClick={click}
      >
        {children}
      </SimpleContainer>
    );
  } else {
    return (
      <div // OUTER DIV manages STATE (hover/selected..), borders, common style etc
        className={["outer-style", code, outerClass].join(" ")}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <div // INNER DIV manages ANIMATION
          className={["inner-style", code, innerClass].join(" ")}
        >
          <SimpleContainer
            className={["property-style", code, propertyClass].join(" ")}
            scrollerClass={scrollerClass}
            code={code}
            onClick={click}
          >
            {children}
          </SimpleContainer>
        </div>
      </div>
    );
  }
};
export default Container;
