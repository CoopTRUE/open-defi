<script lang="ts">
  import '../app.postcss'
  import { QueryClientProvider } from '@tanstack/svelte-query'
  import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools'
  import Header from '$lib/components/Header.svelte'
  import Navbar from '$lib/components/Navbar.svelte'
  import { ModeWatcher } from 'mode-watcher'

  export let data
</script>

<ModeWatcher defaultMode="dark" />
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
