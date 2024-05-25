<script lang="ts">
  import Chart from './Chart.svelte'
  import CHART from '$lib/constants/chart'
  import { onMount } from 'svelte'

  let totalValueLocked = CHART[CHART.length - 1]![1]
  let rerender = false
  let width = 0
  let loaded = false
  onMount(() => (loaded = true))
  $: if (loaded && width) rerender = !rerender
</script>

<header class="flex rounded-xl border bg-black p-4" bind:offsetWidth={width}>
  <div class="w-96">
    <p class="text-lg text-muted-foreground">Total Value Locked</p>
    <p class="font-mono text-3xl font-bold">
      {Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        notation: 'compact',
        maximumFractionDigits: 3,
        minimumFractionDigits: 3,
      }).format(totalValueLocked)}
    </p>
  </div>
  {#key rerender}
    <Chart on:value={({ detail }) => (totalValueLocked = detail)} />
  {/key}
</header>
