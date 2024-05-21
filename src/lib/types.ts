export interface Protocol {
  category: string
  chains: string[]
  oracles?: unknown[]
  forkedFrom?: unknown[]
  listedAt?: number
  mcap?: number | null
  name: string
  symbol: string
  logo: string
  url: string
  referralUrl?: string
  tvl: number
  tvlPrevDay: number
  tvlPrevWeek: number
  tvlPrevMonth: number
  chainTvls: {
    [chain: string]: {
      tvl: number
      tvlPrevDay: number
      tvlPrevWeek: number
      tvlPrevMonth: number
    }
  }
  defillamaId: string
  governanceID?: string[]
  geckoId: string
}
