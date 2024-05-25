<script lang="ts">
  import Percentage from '$lib/components/Percentage.svelte'
  import * as Table from '$lib/components/ui/table'
  import { createChainsQuery } from '$lib/queries'
  import { derived } from 'svelte/store'
  import { createRender, createTable, Render, Subscribe } from 'svelte-headless-table'

  const chains = createChainsQuery()
  const data = derived(chains, ($chains) => $chains.data ?? [])
  const table = createTable(data)

  const columns = table.createColumns([
    table.column({
      accessor: (chain) => chain,
      header: 'Name',
      cell: ({ value }) => value.name,
    }),
    table.column({
      accessor: 'protocols',
      header: 'Protocols',
    }),

    table.column({
      accessor: (chain) => (chain.tvl - chain.tvlPrevDay) / chain.tvlPrevDay,
      header: '1d Change',
      cell: ({ value }) => createRender(Percentage, { number: value }),
    }),
    table.column({
      accessor: (chain) => (chain.tvl - chain.tvlPrevWeek) / chain.tvlPrevWeek,
      header: '7d Change',
      cell: ({ value }) => createRender(Percentage, { number: value }),
    }),
    table.column({
      accessor: (chain) => (chain.tvl - chain.tvlPrevMonth) / chain.tvlPrevMonth,
      header: '1m Change',
      cell: ({ value }) => createRender(Percentage, { number: value }),
    }),
    table.column({
      accessor: 'tvl',
      header: 'TVL',
      cell: ({ value }) =>
        `${Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD',
          notation: 'compact',
          maximumFractionDigits: 3,
          minimumFractionDigits: 3,
        }).format(value)}`,
    }),
  ])

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = table.createViewModel(columns)
</script>

<Table.Root {...$tableAttrs} class="border-separate rounded-xl border bg-black">
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
</Table.Root>
