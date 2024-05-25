<script lang="ts">
  import { browser } from '$app/environment'
  import CHART from '$lib/constants/chart'
  import { hslToHex } from '$lib/utils'
  import {
    type AutoscaleInfoProvider,
    type MouseEventParams,
    type SeriesDataItemTypeMap,
  } from 'lightweight-charts'
  import { createEventDispatcher } from 'svelte'
  import { AreaSeries, Chart } from 'svelte-lightweight-charts'

  const dispatch = createEventDispatcher<{ value: number }>()

  const data = CHART.map(
    ([date, data]) =>
      ({
        time: +date,
        value: data,
      }) as SeriesDataItemTypeMap['Line']
  )

  function priceFormatter(price: number): string {
    return `${Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      notation: 'compact',
      maximumFractionDigits: 3,
      minimumFractionDigits: 3,
    }).format(price)}`
  }
  const autoScaleInfoProvider = ((getOriginal) => {
    const { priceRange } = getOriginal()!
    return { priceRange }
  }) satisfies AutoscaleInfoProvider
  function crosshairMove(event: CustomEvent<MouseEventParams>) {
    const { seriesData } = event.detail
    const arr = seriesData.entries().next().value as [unknown, { value: number }] | null
    if (!arr) {
      dispatch('value', CHART[CHART.length - 1]![1])
      return
    }
    const value = arr[1].value
    dispatch('value', value)
  }

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
  container={{ class: '!h-[20rem] flex-1' }}
  grid={{ vertLines: { visible: false }, horzLines: { visible: false } }}
  layout={{
    background: { color: '#000' },
    textColor: getColor('foreground'),
  }}
  localization={{ priceFormatter }}
  on:crosshairMove={crosshairMove}
>
  <AreaSeries autoscaleInfoProvider={autoScaleInfoProvider} {data} />
</Chart>
