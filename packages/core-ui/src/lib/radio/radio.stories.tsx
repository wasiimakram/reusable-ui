import type { Meta, StoryObj } from '@storybook/react';
import Radio from './radio';

const meta: Meta<typeof Radio> = {
  component: Radio,
  title: 'Radio',
};
export default meta;
type Story = StoryObj<typeof Radio>;

export const Primary = {
  args: {
    title: 'Radio',
  },
};
