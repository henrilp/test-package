import React, { FunctionComponent } from "react";
import { Options, ElementProps } from "./types";
import "../styles/_kapix.scss";
import { useElementState } from "../hooks/useElementState";

interface ElementWrapperProps {
  // confirmed props
  Element: FunctionComponent<ElementProps>; // typically, "<p>Hello</p>" for a text or button
  value: string;
  code: string; // used for className generation
  options?: Options;

  // optional ones
  hasLabelSlot?: boolean;
  labelPosition?: string;
  labelClass?: string;
  label?: string;
}

/**
 * a wrapper that manage common props to components like Text, Image, Button etc
 * @param options a lot of params
 * @returns
 */
const ElementWrapper = ({
  hasLabelSlot,
  labelPosition,
  labelClass,
  label,
  value,
  options,
  Element,
  code,
}: ElementWrapperProps) => {
  // MAIN PROP IS OPTIONS
  const {
    outerClass,
    innerClass,
    propertyClass,
    onMouseEnter,
    onMouseLeave,
    onClick,
  } = useElementState(options);
  const Tag = options && (options.click || options.href) ? "a" : "div";

  //  NO IDEA WHAT THIS DOES FOR NOW
  //     const { code, $el } = this

  //   const children = $el.querySelector('.property-style').children
  //   for (let i = 0; i < children.length; i++) {
  //     const el = children[i]
  //     el.classList.add('template-style')
  //     el.classList.add(code)
  //   }
  // }
  const elementClassName = "template-style " + code;
  return (
    <div // OUTER DIV manages STATE (hover/selected..), borders, common style etc
      className={["outer-style", code, outerClass].join(" ")}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div // INNER DIV manages ANIMATION
        className={["inner-style", code, innerClass].join(" ")}
      >
        {
          // if no label
          !hasLabelSlot ? (
            <Tag
              className={["property-style", code, propertyClass].join(" ")}
              onClick={onClick}
              // WE PUT "a" container because of href
              // href={href}
            >
              <Element
                //options={currentOptions}
                value={value}
                className={elementClassName}
                // lazyValue={lazyValue}
                // deactivated={blockValue}
              />
            </Tag>
          ) : (
            <div
              className={
                "label-container " + (labelPosition ? labelPosition : "")
              }
            >
              {/* else, if label specified */}
              <span className={"label-style " + (labelClass ? labelClass : "")}>
                {label}
              </span>
              {/* MAIN COMPONENT, same as above*/}
              <Tag
                className={
                  "property-style " + (propertyClass ? propertyClass : "")
                }
                // TODO animation

                // WE PUT "a" container because of href
                // href={href}
                // onClick={(e: any) => onClick && onClick(e)}
              >
                <Element
                  //options={currentOptions}
                  value={value}
                  className={elementClassName}
                  // lazyValue={lazyValue}
                  // deactivated={blockValue}
                />
              </Tag>
            </div>
          )
        }
      </div>
    </div>
  );
};
export default ElementWrapper;
