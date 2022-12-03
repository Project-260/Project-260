import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk'
import { Table } from '@gnosis.pm/safe-react-components'
import { getProposals } from 'integrations/project260Backend'
import { useEffect, useState } from 'react'
import ProposalRowView from './ProposalRowView'

const ProposalsTable = () => {
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

  const [rows, setRows] = useState([])

  const { safe } = useSafeAppsSDK()
  useEffect(() => {
    async function fetchInitData() {
      const data = await getProposals({ safeAddress: safe.safeAddress })

      let result = []
      if (data) {
        result = data.reduce((acc, curr, idx) => {
          const { status, title } = curr
          acc.push({
            id: idx,
            collapsibleContent: <ProposalRowView data={curr} />,
            cells: [
              {
                content: status,
              },
              {
                content: title,
              },
              {
                content: 'something',
              },
            ],
          })
          return acc
        }, [])
      }

      setRows(result)
    }

    fetchInitData()
  }, [safe.safeAddress])

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

export default ProposalsTable
