<script lang="ts">
  import '../app.postcss'
  import { QueryClientProvider } from '@tanstack/svelte-query'
  import { SvelteQueryDevtools } from '@tanstack/svelte-query-devtools'
  // import Header from '$lib/components/Header.svelte'
  import Navbar from '$lib/components/Navbar.svelte'
  import ProgressBar from '$lib/components/ProgressBar.svelte'
  import { ModeWatcher } from 'mode-watcher'

  export let data
</script>

<ModeWatcher defaultMode="dark" />
<ProgressBar />
<QueryClientProvider client={data.queryClient}>
  <!-- <Header /> -->
  <div class="flex min-h-screen gap-6 p-6">
    <Navbar />
    <slot />
  </div>
  <SvelteQueryDevtools />
</QueryClientProvider>
