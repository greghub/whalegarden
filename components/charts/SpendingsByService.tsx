import { ResponsivePie } from "@nivo/pie";

import { chartColors, chartDefs, chartFills } from "@/utils/options";
import { SpendingData, SpendingDataGroup } from '@/utils/types';

export const SpendingsByService = ({
  data
}: SpendingData[]) => {
  const groupedData = data.reduce((acc: any, item: SpendingData) => {
    item.groups.forEach((group: SpendingDataGroup) => {
      acc[group.key] = (acc[group.key] || 0) + group.amount;
    });
    return acc;
  }, {});

  const datasets = Object.keys(groupedData).map((key: string) => {
    return {
      id: key,
      label: key,
      value: groupedData[key],
    }
  });

  return (
    <div style={{ height: 500 }}>
      <h2 className="font-bold text-gray-900">Spend by service</h2>
      <ResponsivePie
        data={datasets}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        cornerRadius={12}
        activeOuterRadiusOffset={8}
        valueFormat=">$,.2f"
        colors={chartColors}
        borderColor={{ from: 'color', modifiers: [['darker', 0.6]] }}
        arcLabelsTextColor={{ from: 'color', modifiers: [['darker', 3]] }}
        arcLinkLabelsThickness={0}
        arcLinkLabelsTextOffset={0}
        defs={chartDefs}
        fill={chartFills}
      />
    </div>
  );
};
