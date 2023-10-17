import type { Meta, StoryObj } from '@storybook/react';
import { AntButton } from './antbutton';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof AntButton> = {
  component: AntButton,
  title: 'AntButton',
};
export default meta;
type Story = StoryObj<typeof AntButton>;

export const Primary = {
  args: {},
};
