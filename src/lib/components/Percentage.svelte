<script lang="ts">
  import { cn } from '$lib/utils'

  export let number: number
</script>

<div class={cn('flex', number < 0 && 'text-red-500', number > 0 && 'text-green-500')}>
  <span>{number > 0 ? '+' : ''}</span>
  <span>
    {new Intl.NumberFormat('en-US', { style: 'percent', minimumFractionDigits: 2 }).format(number)}
  </span>
</div>
