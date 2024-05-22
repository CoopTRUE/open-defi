<script lang="ts">
  import { browser } from '$app/environment'
  import CHART from '$lib/constants/chart'
  import { hslToHex } from '$lib/utils'
  import { type AutoscaleInfoProvider, type SeriesDataItemTypeMap } from 'lightweight-charts'
  import { AreaSeries, Chart } from 'svelte-lightweight-charts'

  const data = CHART.map(
    ([date, data]) =>
      ({
        time: +date,
        value: data,
      }) as SeriesDataItemTypeMap['Line']
  )

  function priceFormatter(price: number): string {
    return `$${Intl.NumberFormat('en-US', {
      notation: 'compact',
      maximumFractionDigits: 3,
      minimumFractionDigits: 3,
    }).format(price)}`
  }
  const autoScaleInfoProvider = ((getOriginal) => {
    const { priceRange } = getOriginal()!
    return { priceRange }
  }) satisfies AutoscaleInfoProvider

  function getColor(name: string) {
    if (!browser) return
    const hsl = getComputedStyle(document.documentElement).getPropertyValue(`--${name}`)
    const replaced = hsl.replaceAll('%', '')
    const split = replaced.split(' ').map(Number) as [number, number, number]
    const hex = hslToHex(...split)
    return hex
  }
</script>

<Chart
  container={{ class: '!h-[20rem] !w-full' }}
  grid={{ vertLines: { visible: false }, horzLines: { visible: false } }}
  layout={{
    background: { color: getColor('card') },
    textColor: getColor('foreground'),
  }}
  localization={{ priceFormatter }}
>
  <AreaSeries autoscaleInfoProvider={autoScaleInfoProvider} {data} />
</Chart>
