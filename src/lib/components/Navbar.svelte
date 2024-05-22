<script lang="ts">
  import * as Accordion from '$lib/components/ui/accordion'

  interface NavLink {
    name: string
    href: string
  }
  interface NavGroup {
    title: string
    links: NavLink[]
  }

  const nav = [
    {
      title: 'DeFi',
      links: [
        { name: 'Overview', href: '/defi/overview' },
        { name: 'Chains', href: '/defi/chains' },
        { name: 'Bridged TVL', href: '/defi/bridged-tvl' },
        { name: 'Compare Chains', href: '/defi/compare-chains' },
        { name: 'Airdrops', href: '/defi/airdrops' },
        { name: 'Treasuries', href: '/defi/treasuries' },
        { name: 'Oracles', href: '/defi/oracles' },
        { name: 'Forks', href: '/defi/forks' },
        { name: 'Top Protocols', href: '/defi/top-protocols' },
        { name: 'Comparison', href: '/defi/comparison' },
        { name: 'Protocol Expenses', href: '/defi/protocol-expenses' },
        { name: 'Token Usage', href: '/defi/token-usage' },
        { name: 'Categories', href: '/defi/categories' },
        { name: 'Recent', href: '/defi/recent' },
        { name: 'Languages', href: '/defi/languages' },
      ],
    },
    {
      title: 'Yields',
      links: [
        { name: 'Pools', href: '/yields/pools' },
        { name: 'Delta Neutral', href: '/yields/delta-neutral' },
        { name: 'Long-Short Strats', href: '/yields/long-short-strats' },
        { name: 'Leveraged Lending', href: '/yields/leveraged-lending' },
      ],
    },
  ] as const satisfies NavGroup[]
</script>

<aside>
  <nav>
    <Accordion.Root class="w-full sm:max-w-[70%]">
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Is it accessible?</Accordion.Trigger>
        <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It's animated by default, but you can disable it if you prefer.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root>
  </nav>
</aside>
