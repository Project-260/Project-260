import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk'
import { Button } from '@gnosis.pm/safe-react-components'
import { Grid } from '@material-ui/core'
import ConditionView from 'components/Proposals/conditionView'

const ProposalRowView = ({ data }) => {
  const { safe, sdk } = useSafeAppsSDK()
  const { isReadOnly } = safe

  const handleApprove = () => {
    return 0
  }
  return (
    <Grid container justifyContent="space-between">
      <Grid item>{data && <ConditionView {...data.rules} />}</Grid>
      <Grid item>
        {!isReadOnly && (
          <Button size="md" onClick={handleApprove}>
            Approve
          </Button>
        )}
      </Grid>
    </Grid>
  )
}

export default ProposalRowView
