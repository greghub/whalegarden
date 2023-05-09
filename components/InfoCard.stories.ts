import type { Meta, StoryObj } from '@storybook/react';

import { InfoCard } from './InfoCard';
import { TrendType } from '@/utils/types';

const meta: Meta<typeof InfoCard> = {
  component: InfoCard,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
    },
    value: {
      control: 'number',
    },
    prefix: {
      control: 'text',
    },
    isDanger: {
      control: 'boolean',
    },
    trend: {
      control: 'text'
    },
    trendType: {
      control: 'select', options: Object.values(TrendType)
    }
  }
}

export default meta;
type Story = StoryObj<typeof InfoCard>;

export const Simple: Story = {
  args: {
    title: "Servers",
    value: 45
  },
};

export const Rich: Story = {
  args: {
    title: "Bill",
    value: 1479.22,
    prefix: "$",
    isDanger: false,
    trend: '+25%',
    trendType: TrendType.POSITIVE
  },
};
