import type { Meta, StoryObj } from '@storybook/react';

import { sampleChartData } from '@/utils/storybook';
import { SpendingData } from '@/utils/types';
import { SpendingsByService } from './SpendingsByService';

const meta: Meta<SpendingData[]> = {
   component: SpendingsByService,
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