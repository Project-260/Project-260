import { Table } from '@gnosis.pm/safe-react-components'
import { useState } from 'react'
import RoleRowView from './RoleRowView'

const RolesTable = () => {
  const headerCells = [
    {
      id: 'roleAddress',
      label: 'Role address',
      hideSortIcon: true,
    },
    {
      id: 'roleName',
      label: 'Role Name',
      hideSortIcon: true,
    },
  ]

  const rows = [
    {
      id: '1',
      collapsibleContent: <RoleRowView id={'1'} />,
      cells: [
        {
          content: '0x12312312414',
        },
        {
          content: 'Some basic rule',
        },
      ],
    },
    {
      id: '2',
      collapsibleContent: <RoleRowView id={'2'} />,
      cells: [
        {
          content: '0x12312312414',
        },
        {
          content: 'Some basic rule',
        },
      ],
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

  return (
    <Table isCollapsible rows={rows} headers={headerCells} selectedRowIds={selectedRowIds} onRowClick={onRowClick} />
  )
}

export default RolesTable
