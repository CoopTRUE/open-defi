<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar'
  import { Button } from '$lib/components/ui/button'
  import * as Tooltip from '$lib/components/ui/tooltip'

  export let name: string
  export let logo: string
  export let chains: string[]
</script>

<div class="flex items-center gap-4">
  <Avatar.Root>
    <Avatar.Image alt={name} src={logo} />
    <Avatar.Fallback>{name.slice(0, 2)}</Avatar.Fallback>
  </Avatar.Root>
  <div class="flex flex-col items-start gap-2">
    <Button class="h-min p-0" href="/protocols/{name}" variant="link">{name}</Button>
    <Tooltip.Root disableHoverableContent openDelay={0}>
      <Tooltip.Trigger class="text-start text-muted">
        {chains.length} Chain{chains.length > 1 ? 's' : ''}</Tooltip.Trigger
      >
      <Tooltip.Content>
        <ul>
          {#each chains as chain}
            <li>{chain}</li>
          {/each}
        </ul>
      </Tooltip.Content>
    </Tooltip.Root>
  </div>
</div>
