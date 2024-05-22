<script lang="ts">
  import Chart from './Chart.svelte'
  import ProtocolTable from './ProtocolTable.svelte'
  import { createQuery } from '@tanstack/svelte-query'
  import { Button } from '$lib/components/ui/button'
  import Trophy from 'lucide-svelte/icons/trophy'

  let clicked = 0
</script>

<svelte:head>
  <title>Overview | Open Llama</title>
  <meta
    name="description"
    content="An open-source and much faster alternative to DeFi Llama. Built with svelte and shadcn/ui"
  />
</svelte:head>

<main class="container bg-card">
  <Chart />
  <h1 class="my-6 flex items-center text-xl font-medium">
    <Trophy class="mr-2" size={20} />
    Protocol Rankings
  </h1>
  <ProtocolTable />
</main>

<style lang="postcss">
</style>
