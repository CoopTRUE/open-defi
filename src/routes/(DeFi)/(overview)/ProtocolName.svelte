<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar'
  import { Button } from '$lib/components/ui/button'
  import * as Tooltip from '$lib/components/ui/tooltip'

  export let name: string
  export let logo: string
</script>

<div class="flex items-center gap-2">
  <Avatar.Root>
    <Avatar.Image alt={name} src={logo} />
    <Avatar.Fallback>{name.slice(0, 2)}</Avatar.Fallback>
  </Avatar.Root>
  <div class="flex flex-col items-center gap-2">
    <Button class="p-0" href="/protocols/{name}" variant="link">{name}</Button>
    <Tooltip.Root>
      <Tooltip.Trigger>Hover</Tooltip.Trigger>
      <Tooltip.Content>
        <p>Add to library</p>
      </Tooltip.Content>
    </Tooltip.Root>
  </div>
</div>
