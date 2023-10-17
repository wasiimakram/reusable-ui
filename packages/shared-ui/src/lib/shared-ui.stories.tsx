import type { Meta, StoryObj } from '@storybook/react';
import { SharedUi } from './shared-ui';

const meta: Meta<typeof SharedUi> = {
  component: SharedUi,
  title: 'SharedUi',
};
export default meta;
type Story = StoryObj<typeof SharedUi>;

export const Primary = {
  args: {},
};
