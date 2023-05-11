import type { Meta, StoryObj } from '@storybook/react';

import { sampleDropdownData } from '@/utils/storybook';
import { Dropdown } from './Dropdown';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'array',
    }
  },
  decorators: [
    (Story) => (
      <div style={{ marginBottom: '8em' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta;
type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {
  args: {
    items: sampleDropdownData,
  },
};
