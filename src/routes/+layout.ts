import { QueryClient } from '@tanstack/svelte-query'
import { browser } from '$app/environment'

export async function load() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        enabled: browser,
        refetchOnMount: false,
        staleTime: Infinity,
      },
    },
  })

  return { queryClient }
}
