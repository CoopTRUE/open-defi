<script lang="ts">
  import { cn } from '$lib/utils.js'
  import { Avatar as AvatarPrimitive } from 'bits-ui'

  type $$Props = AvatarPrimitive.ImageProps

  let className: $$Props['class'] = undefined
  export let src: $$Props['src'] = undefined
  export let alt: $$Props['alt'] = undefined
  export { className as class }
</script>

<AvatarPrimitive.Image
  class={cn('aspect-square size-full', className)}
  {alt}
  {src}
  {...$$restProps}
/>
