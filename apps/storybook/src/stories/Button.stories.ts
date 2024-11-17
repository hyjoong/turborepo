import { Button } from "@ui/components/ui/button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    children: { control: "text", defaultValue: "Button" },
    variant: { control: "select" },
    onClick: { action: "clicked", type: "function" },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    variant: "default",
    children: "Button",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Button",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: "Button",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Button",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Button",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "Button",
  },
};

export const Large: Story = {
  args: {
    variant: "default",
    size: "lg",
    children: "Button",
  },
};

export const Small: Story = {
  args: {
    variant: "default",
    size: "sm",
    children: "Button",
  },
};
