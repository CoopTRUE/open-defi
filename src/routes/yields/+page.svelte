<script lang="ts">
  import { createYieldsQuery } from '$lib/queries'
  const tokens = createYieldsQuery()
</script>

<h1>{$tokens.status}</h1>
