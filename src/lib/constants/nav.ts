import BarChart2 from 'lucide-svelte/icons/bar-chart-2'
import Percent from 'lucide-svelte/icons/percent'
import type { ComponentType } from 'svelte'

export interface NavLink {
  name: string
  href: string
}

export interface NavGroup {
  title: string
  icon: ComponentType
  links: NavLink[]
}

const NAV = [
  {
    title: 'DeFi',
    icon: BarChart2,
    links: [
      { name: 'Overview', href: '/' },
      { name: 'Chains', href: '/chains' },
      { name: 'Bridged TVL', href: 'bridged-tvl' },
      { name: 'Compare Chains', href: 'compare-chains' },
      { name: 'Airdrops', href: 'airdrops' },
      { name: 'Treasuries', href: 'treasuries' },
      { name: 'Oracles', href: 'oracles' },
      { name: 'Forks', href: 'forks' },
      { name: 'Top Protocols', href: 'top-protocols' },
      { name: 'Comparison', href: 'comparison' },
      { name: 'Protocol Expenses', href: 'protocol-expenses' },
      { name: 'Token Usage', href: 'token-usage' },
      { name: 'Categories', href: 'categories' },
      { name: 'Recent', href: 'recent' },
      { name: 'Languages', href: 'languages' },
    ],
  },
  {
    title: 'Yields',
    icon: Percent,
    links: [
      { name: 'Pools', href: '/yields' },
      { name: 'Delta Neutral', href: '/yields/delta-neutral' },
      { name: 'Long-Short Strats', href: '/yields/long-short-strats' },
      { name: 'Leveraged Lending', href: '/yields/leveraged-lending' },
    ],
  },
] as const satisfies NavGroup[]

export default NAV
