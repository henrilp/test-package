import Text from "package/components/Elements/KapixText";
import ElementWrapper from "package/components/KapixElement";
import { FullComponentProps } from "package/components/types";
import React from "react";

export interface KaTextProps {
  children: string;
  code: string;
}
/**
 * @value a string or a stringified html component
 * @returns a component
 */
export const KaText = ({ children, code, options }: FullComponentProps) => {
  return (
    <ElementWrapper
      code={code}
      value={children}
      Element={Text}
      options={options}
    />
  );
};
