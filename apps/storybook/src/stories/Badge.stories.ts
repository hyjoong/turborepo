import type { Meta, StoryObj } from "@storybook/react";
import { Badge } from "@ui/components/ui/badge";

const meta = {
  title: "Components/Badge",
  component: Badge,
  tags: ["autodocs"],
  argTypes: {
    children: {
      control: "text",
      description: "Badge 내부에 표시될 텍스트",
    },
    variant: {
      control: "select",
      options: ["default", "secondary", "destructive", "outline"],
      description: "Badge 스타일 변형",
    },
  },
  parameters: {
    docs: {
      description: {
        component: `
Badge 컴포넌트는 상태, 카테고리 또는 태그를 표시하는데 사용되는 컴포넌트 입니다..
- 4가지 variant 지원 (default, secondary, destructive, outline)
- 반응형 디자인
- 호버 효과 포함
        `,
      },
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Badge",
  },
  parameters: {
    docs: {
      description: {
        story: "기본 스타일의 Badge",
      },
    },
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: "Destructive",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
    children: "Outline",
  },
};

export const LongText: Story = {
  args: {
    children: "Badge long text emample badge long text emample",
  },
};
