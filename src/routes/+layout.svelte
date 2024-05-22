<script lang="ts">
  import '../app.postcss'
  import { QueryClientProvider } from '@tanstack/svelte-query'
  import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools'
  import Header from '$lib/components/Header.svelte'
  import Navbar from '$lib/components/Navbar.svelte'

  export let data
</script>

<QueryClientProvider client={data.queryClient}>
  <Header />
  <div class="flex">
    <Navbar />
    <div class="flex-1">
      <slot />
    </div>
  </div>
  <SvelteQueryDevtools />
</QueryClientProvider>
