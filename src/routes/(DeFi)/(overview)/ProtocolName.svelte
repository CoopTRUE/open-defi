<script lang="ts">
  import * as Avatar from '$lib/components/ui/avatar'
  import { Button } from '$lib/components/ui/button'
  import * as Tooltip from '$lib/components/ui/tooltip'

  export let index: number
  export let name: string
  export let logo: string
  export let chains: string[]
</script>

<div class="flex items-center gap-2">
  <p>{index}</p>
  <Avatar.Root class="size-8">
    <Avatar.Image alt={name} src={logo} />
    <Avatar.Fallback>{name.slice(0, 2)}</Avatar.Fallback>
  </Avatar.Root>
  <div class="flex flex-col items-start">
    <Button class="h-min p-0" href="/protocol/{name}" variant="link">{name}</Button>
    <Tooltip.Root disableHoverableContent openDelay={0}>
      <Tooltip.Trigger class="text-start text-muted-foreground">
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
