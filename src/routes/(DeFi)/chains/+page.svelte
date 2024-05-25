<script lang="ts">
  import ChainsTable from './ChainsTable.svelte'
  import Trophy from 'lucide-svelte/icons/trophy'
</script>

<main class="bg-card p-4">
  <h1 class="my-3 flex items-center text-xl font-medium">
    <Trophy class="mr-2" size={20} />
    Chains Rankings
  </h1>
  <ChainsTable />
</main>
