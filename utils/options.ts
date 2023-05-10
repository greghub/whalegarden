import { linearGradientDef } from '@nivo/core';
import { SpendingType } from './types';

export const chartColors = ['#a1c4fd', '#f5576c', '#96e6a1']

export const chartDefs = [
  linearGradientDef('red', [
    { offset: 0, color: '#f5576c' },
    { offset: 100, color: '#f093fb' },
  ]),
  linearGradientDef('green', [
    { offset: 0, color: '#96e6a1' },
    { offset: 100, color: '#d4fc79' },
  ]),
  linearGradientDef('blue', [
    { offset: 0, color: '#a1c4fd' },
    { offset: 100, color: '#c2e9fb' },
  ]),
]

export const chartFills = [
  {
    match: {
      id: SpendingType.COMPUTE
    },
    id: 'blue'
  },
  {
    match: {
      id: SpendingType.STORAGE
    },
    id: 'red'
  },
  {
    match: {
      id: SpendingType.NETWORK
    },
    id: 'green'
  },
]