import type { Meta, StoryObj } from '@storybook/react';

import { sampleChartData } from '@/utils/storybook';
import { SpendingData } from '@/utils/types';
import { SpendingsByMonth } from './SpendingsByMonth';

const meta: Meta<SpendingData[]> = {
  component: SpendingsByMonth,
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
    }
  }
}

export default meta;
type Story = StoryObj<SpendingData[]>;

export const Default: Story = {
  args: {
    data: JSON.parse(sampleChartData) as SpendingData[],
  },
};