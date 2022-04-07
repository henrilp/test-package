import { ElementProps } from "../../types";
import React, { FunctionComponent } from "react";
import "./style.scss";

/**
 * Displays a Button based on HTML content
 * @param value some HTML content to display
 * @returns
 */
const Button: FunctionComponent<ElementProps> = ({
  value,
  className = "",
}: ElementProps) => {
  return (
    <span
      className={"kapix-button " + className}
      dangerouslySetInnerHTML={{ __html: value }}
    />
  );
};

export default Button;
