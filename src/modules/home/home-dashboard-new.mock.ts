export interface RegionProgress {
  name: string
  count1: number
  count2: number
  percentage: number
}

export interface AdvanceChartSegment {
  id: 'received' | 'notReceived'
  name: string
  value: number
  count: number
  percent: number
  color: string
}

export const ADVANCE_CHART_MOCK = {
  total: 4800,
  segments: [
    {
      id: 'received',
      name: 'Аванс тушган',
      value: 50,
      count: 1594,
      percent: 96,
      color: '#2fd17f',
    },
    {
      id: 'notReceived',
      name: 'Аванс тушмаган',
      value: 50,
      count: 1594,
      percent: 96,
      color: '#fb5f5f',
    },
  ],
} as const satisfies { total: number; segments: AdvanceChartSegment[] }

export const REGIONS_MOCK: RegionProgress[] = [
  { name: 'Қорақалпоғистон', count1: 1594, count2: 8600.9, percentage: 45 },
  { name: 'Жиззах', count1: 1594, count2: 8600.9, percentage: 45 },
  { name: 'Навоий', count1: 1594, count2: 8600.9, percentage: 45 },
  { name: 'Самарқанд', count1: 1594, count2: 8600.9, percentage: 45 },
]

export const ADVANCE_REGIONS_MOCK = [
  { name: 'Навсий', count: 1594, percentage: 45 },
  { name: 'Самарқанд', count: 1594, percentage: 45 },
]

export const INVOICE_REGIONS_MOCK = [
  { name: 'Самарқанд', count: 1594 },
  { name: 'Самарқанд', count: 1594 },
  { name: 'Самарқанд', count: 1594 },
  { name: 'Самарқанд', count: 1594 },
  { name: 'Самарқанд', count: 1594 },
]

