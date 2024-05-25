<script lang="ts">
  import { cn } from '$lib/utils.js'
  import { Accordion as AccordionPrimitive } from 'bits-ui'
  import ChevronRight from 'lucide-svelte/icons/chevron-right'

  type $$Props = AccordionPrimitive.TriggerProps
  type $$Events = AccordionPrimitive.TriggerEvents

  let className: $$Props['class'] = undefined
  export let level: AccordionPrimitive.HeaderProps['level'] = 3
  export { className as class }
</script>

<AccordionPrimitive.Header class="flex" {level}>
  <AccordionPrimitive.Trigger
    class={cn(
      'flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-90',
      className
    )}
    {...$$restProps}
    on:click
  >
    <slot />
    <ChevronRight class="h-4 w-4 transition-transform duration-200" />
  </AccordionPrimitive.Trigger>
</AccordionPrimitive.Header>
