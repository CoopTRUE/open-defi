<script lang="ts">
  import ChainsTable from './ChainsTable.svelte'
  import Header from './Header.svelte'
  import Trophy from 'lucide-svelte/icons/trophy'
</script>

<main class="rounded-xl bg-card p-4">
  <Header />
  <h1 class="my-3 flex items-center text-xl font-medium">
    <Trophy class="mr-2" size={20} />
    Chains Rankings
  </h1>
  <!-- <ChainsTable /> -->
</main>
