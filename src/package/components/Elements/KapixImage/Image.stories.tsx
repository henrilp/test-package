import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Image from ".";
import { imgFitEnum } from "../../../constants/enums";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "kapix-components-react/KapixImage",
  component: Image,
} as ComponentMeta<typeof Image>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

const options = {
  alt: "La voie lactée",
  defaultImage: undefined,
  imgFit: imgFitEnum.CONTAIN,
};

export const Contain = Template.bind({});
Contain.args = {
  value:
    "https://cdn.pixabay.com/photo/2017/08/30/01/05/milky-way-2695569_960_720.jpg",
  options,
};
export const Cover = Template.bind({});
Cover.args = {
  ...Contain.args,
  options: { ...options, imgFit: imgFitEnum.COVER },
};
export const Custom = Template.bind({});
Custom.args = {
  ...Contain.args,
  options: { ...options, imgFit: imgFitEnum.CUSTOM },
};
