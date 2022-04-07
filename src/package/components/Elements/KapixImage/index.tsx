import { ElementProps } from "../../types";
import React from "react";
import "./style.scss";

/**
 * Displays an Image with possible options
 * @param value an url for the image source
 * @param options contains properties : "alt" (description), "defaultImage" and "fit".
 * @returns img component
 */
const Image = ({ value, options }: ElementProps) => {
  function toFit(fit?: string) {
    // this style is distributed via KapixElement wrapper
    if (fit === undefined) return "ka-fit-contain";
    if (fit) return `ka-fit-${fit}`;
    return "ka-fit-none";
  }
  return (
    <img
      className={"kapix-image " + toFit(options?.imgFit)}
      alt={options?.alt}
      src={value || options?.defaultImage}
    />
  );
};

export default Image;
