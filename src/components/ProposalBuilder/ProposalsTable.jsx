import { Table } from '@gnosis.pm/safe-react-components'
import { useState } from 'react'

const ProposalsTable = ({ rows, type }) => {
  const headerCells = [
    {
      id: 'status',
      label: 'Status',
      hideSortIcon: true,
    },
    {
      id: 'title',
      label: 'Title',
      hideSortIcon: true,
    },
  ]

  const [selectedRowIds, setSelectedRowIds] = useState(new Set())

  const onRowClick = (rowId) => {
    const cp = new Set(selectedRowIds)
    if (cp.has(rowId)) {
      cp.delete(rowId)
    } else {
      cp.add(rowId)
    }
    setSelectedRowIds(cp)
  }

  const filteredRows = rows.filter(({ status }) => status === type)

  if (filteredRows.length === 0) return 'No proposals found'

  return (
    <Table
      isCollapsible
      rows={filteredRows}
      headers={headerCells}
      selectedRowIds={selectedRowIds}
      onRowClick={onRowClick}
    />
  )
}

export default ProposalsTable
