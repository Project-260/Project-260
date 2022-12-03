import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk'

const ProposalRowView = ({ data }) => {
  const { safe, sdk } = useSafeAppsSDK()
  const { isReadOnly } = safe
  return <div>ProposalRowView</div>
}

export default ProposalRowView
