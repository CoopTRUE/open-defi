<script lang="ts">
  import ProtocolName from './ProtocolName.svelte'
  import Percentage from '$lib/components/Percentage.svelte'
  import * as Table from '$lib/components/ui/table'
  import { createProtocolsQuery } from '$lib/queries'
  import { derived } from 'svelte/store'
  import { createRender, createTable, Render, Subscribe } from 'svelte-headless-table'

  const protocols = createProtocolsQuery()
  const data = derived(protocols, ($protocols) => $protocols.data ?? [])
  $: console.log($data.reduce((acc, protocol) => acc + protocol.tvl, 0))
  const table = createTable(data)

  const columns = table.createColumns([
    table.column({
      accessor: (protocol) => protocol,
      header: 'Name',
      cell: ({ value, row }) =>
        createRender(ProtocolName, {
          index: +row.id + 1,
          name: value.name,
          logo: value.logo,
          chains: value.chains,
        }),
    }),
    table.column({
      accessor: 'category',
      header: 'Category',
    }),
    table.column({
      accessor: 'tvl',
      header: 'TVL',
      cell: ({ value }) =>
        `$${Intl.NumberFormat('en-US', {
          notation: 'compact',
          maximumFractionDigits: 3,
          minimumFractionDigits: 3,
        }).format(value)}`,
    }),
    table.column({
      accessor: (protocol) => (protocol.tvl - protocol.tvlPrevDay) / protocol.tvlPrevDay,
      header: '1d Change',
      cell: ({ value }) => createRender(Percentage, { number: value }),
    }),
    table.column({
      accessor: (protocol) => (protocol.tvl - protocol.tvlPrevWeek) / protocol.tvlPrevWeek,
      header: '7d Change',
      cell: ({ value }) => createRender(Percentage, { number: value }),
    }),
    table.column({
      accessor: (protocol) => (protocol.tvl - protocol.tvlPrevMonth) / protocol.tvlPrevMonth,
      header: '1m Change',
      cell: ({ value }) => createRender(Percentage, { number: value }),
    }),
  ])

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = table.createViewModel(columns)
</script>

<Table.Root {...$tableAttrs} class="border-separate rounded-xl border">
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
