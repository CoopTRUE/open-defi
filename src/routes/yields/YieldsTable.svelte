<script lang="ts">
  import { shortcut, type ShortcutEventDetail } from '@svelte-put/shortcut'
  import { createWindowVirtualizer } from '@tanstack/svelte-virtual'
  import Percentage from '$lib/components/Percentage.svelte'
  import { createYieldsQuery } from '$lib/queries'
  import { derived } from 'svelte/store'

  function handleK(detail: ShortcutEventDetail) {
    detail.originalEvent.preventDefault()
    alert('Search is not implemented yet')
  }

  const yieldsQuery = createYieldsQuery()
  const data = derived(yieldsQuery, ($yieldsQuery) => $yieldsQuery.data?.pools || [])

  $: virtualizer = createWindowVirtualizer({
    count: $data.length,
    estimateSize: () => 56.8,
    overscan: 5,
  })
</script>

<svelte:window
  use:shortcut={{ trigger: { key: 'f', modifier: ['ctrl', 'meta'], callback: handleK } }}
/>
<ol style="position: relative; height: {$virtualizer.getTotalSize()}px; width: 100%;">
  {#each $virtualizer.getVirtualItems() as { index, size, start } (index)}
    {@const row = $data[index]}
    <li
      style="position: absolute; top: 0; left: 0; width: 100%; height: {size}px; transform: translateY({start}px);"
    >
      <div class="flex items-center justify-between border-b border-gray-800 p-4">
        <div class="flex items-center">
          <span class="text-gray-400">{index + 1}</span>
          <p>{row.symbol}</p>
        </div>
        <p>
          {new Intl.NumberFormat('en-US', {
            style: 'percent',
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          }).format(row.apy)}
        </p>
      </div>
    </li>
  {/each}
</ol>
<!-- <Table.Root {...$tableAttrs} class="border-separate rounded-xl border bg-black">
  <Table.Header>
    {#each $headerRows as headerRow}
      <Subscribe rowAttrs={headerRow.attrs()}>
        <Table.Row>
          {#each headerRow.cells as cell (cell.id)}
            <Subscribe attrs={cell.attrs()} props={cell.props()} let:attrs>
              <Table.Head {...attrs} class="border-l first:border-l-0">
                <Render of={cell.render()} />
              </Table.Head>
            </Subscribe>
          {/each}
        </Table.Row>
      </Subscribe>
    {/each}
  </Table.Header>
  <Table.Body {...$tableBodyAttrs}>
    {#each $pageRows as row (row.id)}
      <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
        <Table.Row {...rowAttrs} class="">
          {#each row.cells as cell (cell.id)}
            <Subscribe attrs={cell.attrs()} let:attrs>
              <Table.Cell {...attrs} class="border-l border-t first:border-l-0">
                {#if cell.id.startsWith('tvlPrev')}
                  <span class="text-green-500">
                    <Render of={cell.render()} />
                  </span>
                {:else if cell.id === 'tvl'}
                  <Render of={cell.render()} />
                {:else}
                  <Render of={cell.render()} />
                {/if}
              </Table.Cell>
            </Subscribe>
          {/each}
        </Table.Row>
      </Subscribe>
    {/each}
  </Table.Body>
</Table.Root> -->
<!-- <Table.Root {...$tableAttrs} class="border-separate rounded-xl border bg-black">
  <Table.Header>
    {#each $headerRows as headerRow}
      <Subscribe rowAttrs={headerRow.attrs()}>
        <Table.Row>
          {#each headerRow.cells as cell (cell.id)}
            <Subscribe attrs={cell.attrs()} props={cell.props()} let:attrs>
              <Table.Head {...attrs} class="border-l first:border-l-0">
                <Render of={cell.render()} />
              </Table.Head>
            </Subscribe>
          {/each}
        </Table.Row>
      </Subscribe>
    {/each}
  </Table.Header>
  <div style="position: relative; height: {$virtualizer.getTotalSize()}px; width: 100%;">
    {#each $virtualizer.getVirtualItems() as vRow (index)}
      {@const row = $pageRows[vRow.index]}

      <div
        style="position: absolute; top: 0; left: 0; width: 100%; height: {vRow.size}px; transform: translateY({vRow.start}px);"
      >
        <Subscribe rowAttrs={row.attrs()} let:rowAttrs>
          <Table.Row {...rowAttrs} class="">
            {#each row.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs>
                <Table.Cell {...attrs} class="border-l border-t first:border-l-0">
                  {#if cell.id.startsWith('tvlPrev')}
                    <span class="text-green-500">
                      <Render of={cell.render()} />
                    </span>
                  {:else if cell.id === 'tvl'}
                    <Render of={cell.render()} />
                  {:else}
                    <Render of={cell.render()} />
                  {/if}
                </Table.Cell>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      </div>
    {/each}
  </div>
</Table.Root> -->
