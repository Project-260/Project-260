import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk'
import { Button } from '@gnosis.pm/safe-react-components'
import { Grid } from '@material-ui/core'
import ConditionView from 'components/Proposals/conditionView'
import { getRoleScopeFunctionTransactionConfig } from 'web3/encoding'

const ProposalRowView = ({ data }) => {
  const { safe, sdk } = useSafeAppsSDK()
  const { isReadOnly } = safe
  const {
    rules: { asset, limit },
  } = data

  const handleApprove = async () => {
    const config = getRoleScopeFunctionTransactionConfig({
      roleAddress: '0x8ff02a3D2fF1A77a3cE4488aE49Dc9e9d3aFE318',
      safeAddress: safe.safeAddress,
      asset,
      limit,
    })
    // const { to, value, data } = config;
    const response = await sdk.txs.send({ txs: [config] })
    // const respnse = await sdk.eth.call({ ...config, from: safe.safeAddress })
    console.log({ response })
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
