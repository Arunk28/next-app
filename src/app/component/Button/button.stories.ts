import type { Meta, StoryObj } from '@storybook/react';
 
import ButtonPrimary  from './button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Components/Button',
  component: ButtonPrimary,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    cname : {
        options: ['primary', 'secondary'],
        control: { type: 'select' },
      },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  //args: { onClick: fn() },
} satisfies Meta<typeof ButtonPrimary>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    text: 'Button-primary',
    cname : 'primary',
    callback :()=>{console.log('iam primary')}
  },
};

export const Secondary: Story = {
  args: {
    text: 'Button-secondary',
    cname : 'secondary',
    callback :()=>{console.log('i am secondary')}
  },
};
