import { Tab } from '@gnosis.pm/safe-react-components'
import { Container, Grid } from '@material-ui/core'
import MarketplaceView from 'components/RiskManagerView/Marketplace'
import { useState } from 'react'
import CreateRoleSection from './CreateRoleSection'
import RolesTable from './RolesTable'

const RoleBuilder = () => {
  const [selectedTab, setSelectedTab] = useState('1')
  const tabItems = [
    { id: '1', label: 'Owner', icon: 'assets' },
    { id: '2', label: 'Manager', icon: 'transactionsInactive' },
  ]

  return (
    <Container>
      <Tab onChange={setSelectedTab} selectedTab={selectedTab} variant="outlined" items={tabItems} />
      <Grid container spacing={4}>
        {selectedTab === '1' && (
          <Grid item sm={12} spacing={8}>
            <CreateRoleSection />
            <RolesTable />
          </Grid>
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
