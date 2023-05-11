import { ResponsiveBar } from "@nivo/bar";

import { chartColors, chartDefs, chartFills } from "@/utils/options";
import { SpendingType, SpendingData } from '@/utils/types';

interface SpendingsByMonthProps {
  data: SpendingData[];
}

export const SpendingsByMonth = ({
  data
}: SpendingsByMonthProps) => {
  const datasets = data.map((monthData: SpendingData) => {
    const output = { "month": (new Date(monthData.date)).toLocaleString('default', { month: 'long' }) };
    monthData.groups.forEach(group => {
      output[group.key] = group.amount
    });

    return output;
  }).slice(-6);

  return (
    <div style={{ height: 500 }}>
      <h2 className="font-bold text-gray-900">Last 6 months spend by service</h2>
      <ResponsiveBar
        data={datasets}
        keys={Object.values(SpendingType)}
        groupMode="grouped"
        indexBy="month"
        borderRadius={4}
        borderWidth={1}
        colors={chartColors}
        labelSkipWidth={36}
        borderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        labelTextColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20,
          }
        ]}
        defs={chartDefs}
        fill={chartFills}
      />
    </div>
  );
};
