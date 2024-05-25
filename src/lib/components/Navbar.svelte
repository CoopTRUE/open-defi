<script lang="ts">
  import { page } from '$app/stores'
  import * as Accordion from '$lib/components/ui/accordion'
  import { Button, buttonVariants } from '$lib/components/ui/button'
  import NAV from '$lib/constants/nav'
  import { cn } from '$lib/utils'

  function isActive(url: URL, href: string) {
    return url.pathname === href
  }

  let openGroup: (typeof NAV)[number]['title'] | undefined
  $: openGroup =
    openGroup ?? NAV.find(({ links }) => links.some(({ href }) => isActive($page.url, href)))?.title
</script>

<aside class="p-8">
  <nav>
    <Accordion.Root class="w-56" value={openGroup}>
      {#each NAV as { title, icon, links }}
        <Accordion.Item value={title}>
          <Accordion.Trigger class={cn(buttonVariants({ variant: 'ghost' }), 'h-full p-1')}>
            <div class="flex flex-1 items-center gap-4">
              <svelte:component this={icon} size={20} />
              <span class="font-medium">{title}</span>
            </div>
          </Accordion.Trigger>
          <Accordion.Content>
            <ul class="flex flex-col gap-1 pt-1">
              {#each links as { name, href }}
                {@const linkIsActive = isActive($page.url, href)}
                <li>
                  <Button
                    class={cn(
                      'size-full justify-start p-1 text-muted-foreground',
                      linkIsActive && '!bg-primary text-foreground'
                    )}
                    aria-current={linkIsActive ? 'page' : undefined}
                    {href}
                    variant="ghost"
                  >
                    <span class="ml-10">{name}</span>
                  </Button>
                </li>
              {/each}
            </ul>
          </Accordion.Content>
        </Accordion.Item>
      {/each}
    </Accordion.Root>
    <!-- <Accordion.Root class="w-full">
      <Accordion.Item value="item-1">
        <Accordion.Trigger class={buttonVariants()}>

        </Accordion.Trigger>
        <Accordion.Content>Yes. It adheres to the WAI-ARIA design pattern.</Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-2">
        <Accordion.Trigger>Is it styled?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It comes with default styles that matches the other components' aesthetic.
        </Accordion.Content>
      </Accordion.Item>
      <Accordion.Item value="item-3">
        <Accordion.Trigger>Is it animated?</Accordion.Trigger>
        <Accordion.Content>
          Yes. It's animated by default, but you can disable it if you prefer.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion.Root> -->
  </nav>
</aside>
