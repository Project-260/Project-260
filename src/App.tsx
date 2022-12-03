import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk'
import { Grid } from '@material-ui/core'
import NewProposals from 'components/NewProposals'
import React from 'react'
import RoleBuilder from './components/ProposalBuilder'

const SafeApp = (): React.ReactElement => {
  const { safe } = useSafeAppsSDK()
  // const submitTx = useCallback(async () => {
  //   try {
  //     const { safeTxHash } = await sdk.txs.send({
  //       txs: [
  //         {
  //           to: safe.safeAddress,
  //           value: '0',
  //           data: '0x',
  //         },
  //       ],
  //     })
  //     console.log({ safeTxHash })
  //     const safeTx = await sdk.txs.getBySafeTxHash(safeTxHash)
  //     console.log({ safeTx })
  //   } catch (e) {
  //     console.error(e)
  //   }
  // }, [safe, sdk])
  const { isReadOnly } = safe

  return (
    <Grid container spacing={4}>
      {isReadOnly && (
        <Grid item xs={12}>
          <NewProposals />
        </Grid>
      )}
      <Grid item xs={12}>
        <RoleBuilder />
      </Grid>
    </Grid>
  )
}

export default SafeApp
