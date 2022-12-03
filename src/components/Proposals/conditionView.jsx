import { Grid } from '@material-ui/core'

const ConditionView = ({ asset, limit }) => {
  return (
    <Grid container spacing={2}>
      <Grid item>
        {asset && <>Assets: {asset.map(({ symbol }) => symbol).join(',')}</>}
        <br />
        {limit && <>Limit: {limit}</>}
      </Grid>
    </Grid>
  )
}

export default ConditionView
