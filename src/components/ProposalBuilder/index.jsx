import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk'
import { Tab } from '@gnosis.pm/safe-react-components'
import { Container, Grid } from '@material-ui/core'
import { getProposals } from 'integrations/project260Backend'
import { useEffect, useState } from 'react'
import ProposalRowView from './ProposalRowView'
import ProposalsTable from './ProposalsTable'

const RoleBuilder = () => {
  const [selectedTab, setSelectedTab] = useState('1')
  const tabItems = [
    { id: '1', label: 'Proposals' },
    { id: '2', label: 'Approved' },
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
            ],
            status,
          })
          return acc
        }, [])
      }

      setRows(result)
    }

    fetchInitData()
  }, [safe.safeAddress])

  return (
    <Container>
      <Tab onChange={setSelectedTab} selectedTab={selectedTab} variant="outlined" items={tabItems} />
      <Grid container spacing={4} style={{ paddingTop: 12 }}>
        {selectedTab === '1' && (
          <Grid item sm={12} spacing={8}>
            <ProposalsTable rows={rows} type={'CREATED'} />
          </Grid>
        )}
        {selectedTab === '2' && (
          <Grid item sm={12} spacing={8}>
            <ProposalsTable rows={rows} type={'APPROVED'} />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default RoleBuilder
