<script lang="ts">
  import CHAIN_TVL from '$lib/constants/chaints'
  import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    type ChartData,
    Legend,
    Title,
    Tooltip,
  } from 'chart.js'
  import chroma from 'chroma-js'
  import { Pie } from 'svelte-chartjs'

  ChartJS.register(Title, Tooltip, Legend, ArcElement, CategoryScale)

  const NUM = 7
  const topLabels = CHAIN_TVL.slice(0, NUM - 1).map(({ name }) => name)
  const topData = CHAIN_TVL.slice(0, NUM - 1).map(({ tvl }) => tvl)
  const otherData = CHAIN_TVL.slice(NUM).reduce((acc, { tvl }) => acc + tvl, 0)
  const colors = generateRainbowColors(NUM)

  export const data = {
    labels: [...topLabels, 'Others'],
    datasets: [
      {
        data: [...topData, otherData],
        backgroundColor: colors,
        hoverBackgroundColor: generateHoverColors(colors),
      },
    ],
  } satisfies ChartData<'pie', number[], unknown>

  function generateRainbowColors(steps: number) {
    return Array(steps)
      .fill(0)
      .map((_, i) => chroma.hsl((i * 360) / steps, 0.6, 0.7).hex())
  }
  console.log(generateRainbowColors(5))
  function generateHoverColors(colors: string[]) {
    return colors.map((color) => chroma(color).brighten().hex())
  }
</script>

<div class="test size-96">
  <Pie {data} options={{ responsive: true }} />
</div>
