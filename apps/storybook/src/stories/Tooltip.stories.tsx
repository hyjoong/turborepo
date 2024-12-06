import type { Meta, StoryObj } from "@storybook/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@ui/components/ui/tooltip";
import { Button } from "@ui/components/ui/button";

const meta = {
  title: "Components/Tooltip",
  component: Tooltip,
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <TooltipProvider>
        {/* 중앙 정렬 좌우 상하 */}
        <div className='flex justify-center items-center h-screen'>
          <Story />
        </div>
      </TooltipProvider>
    ),
  ],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant='outline'>Hover</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Add to library</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const WithDelay: Story = {
  render: () => (
    <Tooltip delayDuration={2000}>
      <TooltipTrigger asChild>
        <Button variant='outline'>Hover with delay</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>Tooltip with 2sec delay</p>
      </TooltipContent>
    </Tooltip>
  ),
};

export const Positions: Story = {
  render: () => (
    <div className='flex gap-8'>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Left</Button>
        </TooltipTrigger>
        <TooltipContent side='left'>
          <p>Left tooltip</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Top</Button>
        </TooltipTrigger>
        <TooltipContent side='top'>
          <p>Top tooltip</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Bottom</Button>
        </TooltipTrigger>
        <TooltipContent side='bottom'>
          <p>Bottom tooltip</p>
        </TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant='outline'>Right</Button>
        </TooltipTrigger>
        <TooltipContent side='right'>
          <p>Right tooltip</p>
        </TooltipContent>
      </Tooltip>
    </div>
  ),
};
