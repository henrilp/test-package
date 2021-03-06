import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Button from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "kapix-components-react/KapixButton",
  component: Button,
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const ClickMe = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ClickMe.args = {
  value: "<p>Hello world!</p>",
};
