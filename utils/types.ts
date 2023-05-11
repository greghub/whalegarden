export enum TrendType {
  POSITIVE = 'POSITIVE',
  NEGATIVE = 'NEGATIVE',
  NEUTRAL = 'NEUTRAL'
}

export enum SpendingType {
  COMPUTE = 'Compute',
  STORAGE = 'Storage',
  NETWORK = 'Network',
}

export type SpendingDataGroup = {
  key: SpendingType;
  amount: number;
}

export type SpendingData = {
  date: string;
  groups: SpendingDataGroup[];
}

export type Account = {
  id: string,
  label: string,
  description: string,
  icon: string,
}

export type NonEmptyArray<T> = [T, ...T[]];