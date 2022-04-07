import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Iframe from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "kapix-components-react/KapixIframe",
  component: Iframe,
} as ComponentMeta<typeof Iframe>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Iframe> = (args) => <Iframe {...args} />;

export const WikiRandom = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
WikiRandom.args = {
  lazyValue: "https://fr.wikipedia.org/wiki/Sp%C3%A9cial:Page_au_hasard",
};
