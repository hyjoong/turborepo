import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@ui/components/ui/input";

const meta = {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "email", "number", "search", "tel", "url"],
      defaultValue: "text",
    },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    required: { control: "boolean" },
  },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    placeholder: "Enter text...",
  },
};

export const Email: Story = {
  args: {
    type: "email",
    placeholder: "example@email.com",
  },
};

export const Password: Story = {
  args: {
    type: "password",
    placeholder: "Enter password...",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: "Disabled input",
  },
};

export const Required: Story = {
  args: {
    required: true,
    placeholder: "Required field",
  },
};

export const WithValue: Story = {
  args: {
    value: "Pre-filled value",
    onChange: () => {},
  },
};

export const Search: Story = {
  args: {
    type: "search",
    placeholder: "Search...",
  },
};

export const Number: Story = {
  args: {
    type: "number",
    placeholder: "Enter number",
    min: 0,
    max: 100,
  },
};
