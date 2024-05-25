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

export interface Pool {
  chain: string
  project: string
  symbol: string
  tvlUsd: number
  apyBase: number | null
  apyReward: number | null
  apy: number
  rewardTokens: string[]
  pool: string
  apyPct1D: number | null
  apyPct7D: number | null
  apyPct30D: number | null
  stablecoin: boolean
  ilRisk: string
  exposure: string
  predictions: {
    predictedClass: string | null
    predictedProbability: number | null
    binnedConfidence: number | null
  }
  poolMeta: string | null
  mu: number
  sigma: number
  count: number
  outlier: boolean
  underlyingTokens: string[]
  il7d: number | null
  apyBase7d: number | null
  apyMean30d: number | null
  volumeUsd1d: number | null
  volumeUsd7d: number | null
  apyBaseInception: number | null
  projectName: string
  audits: string
  airdrop: boolean
  category: string
  url: string
  apyNet7d: number | null
  apyLsd: number | null
  apyBaseIncludingLsdApy: number | null
  apyIncludingLsdApy: number | null
  lsdTokenOnly: boolean
  rewardTokensSymbols: string[]
  rewardTokensNames: string[]
  apyBaseBorrow: number | null
  apyRewardBorrow: number | null
  apyBorrow: number | null
  totalSupplyUsd: number | null
  totalBorrowUsd: number | null
  totalAvailableUsd: number | null
  ltv: number | null
}
