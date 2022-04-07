import Image from "package/components/Elements/KapixImage";
import ElementWrapper from "package/components/KapixElement";
import { FullComponentProps } from "package/components/types";
import React from "react";

export interface KaImageProps {
  children: string;
  code: string;
}
/**
 * @value a string or a stringified html component
 * @returns a component
 */
export const KaImage = ({ children, code, options }: FullComponentProps) => {
  return (
    <ElementWrapper
      code={code}
      value={children}
      Element={Image}
      options={options}
    />
  );
};
