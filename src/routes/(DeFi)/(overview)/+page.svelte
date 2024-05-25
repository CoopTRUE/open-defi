<script lang="ts">
  import Header from './Header.svelte'
  import ProtocolTable from './ProtocolTable.svelte'
  import Trophy from 'lucide-svelte/icons/trophy'
</script>

<svelte:head>
  <title>Overview | Open Llama</title>
  <meta
    name="description"
    content="An open-source and much faster alternative to DeFi Llama. Built with svelte and shadcn/ui"
  />
</svelte:head>

<main class="bg-card p-4">
  <Header />
  <h1 class="my-3 flex items-center text-xl font-medium">
    <Trophy class="mr-2" size={20} />
    Protocol Rankings
  </h1>
  <ProtocolTable />
</main>

<style lang="postcss">
</style>
