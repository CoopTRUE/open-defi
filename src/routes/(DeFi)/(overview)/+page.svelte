<script lang="ts">
  import ProtocolTable from './ProtocolTable.svelte'
  import { createQuery } from '@tanstack/svelte-query'
  import { Button } from '$lib/components/ui/button'
  import Smile from 'lucide-svelte/icons/smile'

  let clicked = 0
</script>

<svelte:head>
  <title>Overview | Open Llama</title>
  <meta
    name="description"
    content="An open-source and much faster alternative to DeFi Llama. Built with svelte and shadcn/ui"
  />
</svelte:head>

<main>
  <h1 class="flex items-center">Welcome<Smile /></h1>
  <ProtocolTable />
</main>

<style lang="postcss">
</style>
