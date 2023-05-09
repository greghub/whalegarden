import React from 'react';

import { TrendType } from '@/utils/types';

export interface InfoCardProps {
  title: string;
  value: number;
  prefix?: string;
  isDanger?: boolean;
  trend?: string;
  trendType?: TrendType;
}

export const InfoCard = ({
  title,
  value,
  prefix,
  isDanger,
  trend,
  trendType,
}: InfoCardProps) => {
  const getTrendBgColorByType = (type: TrendType) => {
    switch (type) {
      case TrendType.POSITIVE:
        return 'bg-green-100 text-green-500';
      case TrendType.NEGATIVE:
        return 'bg-red-100 text-red-500';
      case TrendType.NEUTRAL:
        return 'bg-gray-100 text-gray-500';
    }
  }

  return (
    <div className={`rounded-xl border py-4 px-6 ${isDanger ? 'bg-red-50 border-red-100' : 'border-gray-200'}`}>
      <h5 className={`font-bold text-sm ${isDanger ? 'text-red-900' : 'text-gray-900'}`}>{title}</h5>
      <p className={`flex items-center font-light text-lg ${isDanger ? 'text-red-700' : 'text-gray-500'}`}>
        {prefix}
        {value.toLocaleString('en-US')}
        {trend && trendType && <span className={`font-semibold ml-2 text-xs py-0.5 px-2 rounded-full ${getTrendBgColorByType(trendType)}`}>{trend}</span>}
      </p>
    </div >
  );
};
