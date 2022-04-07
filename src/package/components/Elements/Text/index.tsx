import { ElementProps } from "../../../components/types";
import React, { FunctionComponent } from "react";

/**
 * Displays a text based on HTML content
 * @param value some HTML content to display
 * @returns
 */
const Text: FunctionComponent<ElementProps> = ({ value, className }) => {
  return (
    <span className={className} dangerouslySetInnerHTML={{ __html: value }} />
  );
};

export default Text;
