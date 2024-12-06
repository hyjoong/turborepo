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
      description: "입력 필드의 타입을 지정합니다.",
    },
    placeholder: {
      control: "text",
      description: "입력 필드의 placeholder 텍스트를 지정합니다.",
    },
    disabled: {
      control: "boolean",
      description: "입력 필드의 비활성화 여부를 지정합니다.",
    },
    required: {
      control: "boolean",
      description: "필수 입력 필드 여부를 지정합니다.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Input 컴포넌트는 사용자로부터 다양한 유형의 입력을 받을 수 있는 기본적인 폼 요소입니다.
- 다양한 input 타입 지원 (text, password, email, number, search, tel, url) 
        `,
      },
    },
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
