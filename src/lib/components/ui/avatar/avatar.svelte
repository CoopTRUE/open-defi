<script lang="ts">
  import { cn } from '$lib/utils.js'
  import { Avatar as AvatarPrimitive } from 'bits-ui'

  type $$Props = AvatarPrimitive.Props

  let className: $$Props['class'] = undefined
  export let delayMs: $$Props['delayMs'] = undefined
  export { className as class }
</script>

<AvatarPrimitive.Root
  class={cn('relative flex size-10 shrink-0 overflow-hidden rounded-full', className)}
  {delayMs}
  {...$$restProps}
>
  <slot />
</AvatarPrimitive.Root>
