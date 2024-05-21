<script lang="ts">
  import ProtocolName from './ProtocolName.svelte'
  import * as Table from '$lib/components/ui/table'
  import { createProtocolsQuery } from '$lib/queries'
  import { derived } from 'svelte/store'
  import { createRender, createTable, Render, Subscribe } from 'svelte-headless-table'

  const protocols = createProtocolsQuery()
  const data = derived(protocols, ($protocols) => $protocols.data ?? [])
  const table = createTable(data)

  const columns = table.createColumns([
    table.column({
      accessor: (protocol) => protocol,
      header: 'Name',
      cell: ({ value }) => createRender(ProtocolName, { name: value.name, logo: value.logo }),
    }),
    table.column({
      accessor: 'category',
      header: 'Category',
    }),
    table.column({
      accessor: 'tvl',
      header: 'TVL',
    }),
  ])

  const { headerRows, pageRows, tableAttrs, tableBodyAttrs } = table.createViewModel(columns)
</script>

<div class="rounded-md border">
  <Table.Root {...$tableAttrs}>
    <Table.Header>
      {#each $headerRows as headerRow}
        <Subscribe rowAttrs={headerRow.attrs()}>
          <Table.Row>
            {#each headerRow.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} props={cell.props()} let:attrs>
                <Table.Head {...attrs}>
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
          <Table.Row {...rowAttrs}>
            {#each row.cells as cell (cell.id)}
              <Subscribe attrs={cell.attrs()} let:attrs>
                <Table.Cell {...attrs}>
                  <Render of={cell.render()} />
                </Table.Cell>
              </Subscribe>
            {/each}
          </Table.Row>
        </Subscribe>
      {/each}
    </Table.Body>
  </Table.Root>
</div>
