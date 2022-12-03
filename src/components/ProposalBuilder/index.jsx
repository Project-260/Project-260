import { Tab } from '@gnosis.pm/safe-react-components'
import { Container, Grid } from '@material-ui/core'
import MarketplaceView from 'components/RiskManagerView/Marketplace'
import { useState } from 'react'
import RolesTable from './ProposalsTable'

const RoleBuilder = () => {
  const [selectedTab, setSelectedTab] = useState('1')
  const tabItems = [
    { id: '1', label: 'Proposals' },
    { id: '2', label: 'Approved' },
  ]

  return (
    <Container>
      <Tab onChange={setSelectedTab} selectedTab={selectedTab} variant="outlined" items={tabItems} />
      <Grid container spacing={4} style={{ paddingTop: 12 }}>
        {selectedTab === '1' && (
          <>
            <Grid item sm={12} spacing={8}>
              <RolesTable />
            </Grid>
          </>
        )}
        {selectedTab === '2' && (
          <Grid item sm={12}>
            <MarketplaceView />
          </Grid>
        )}
      </Grid>
    </Container>
  )
}

export default RoleBuilder
