import Button from "package/components/Elements/KapixButton";
import ElementWrapper from "package/components/KapixElement";
import { Options } from "package/components/types";
import React from "react";

export interface KaButtonProps {
  children: string;
  code: string;
  options?: Options;
}
/**
 * @value a string or a stringified html component
 * @returns a component
 */
export const KaButton = ({ children, code, options }: KaButtonProps) => {
  return (
    <ElementWrapper
      code={code}
      value={children}
      Element={Button}
      options={options}
    />
  );
};
