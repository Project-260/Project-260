import { useSafeAppsSDK } from '@gnosis.pm/safe-apps-react-sdk'

const ModuleBuilder = (props) => {
  const { sdk, safe } = useSafeAppsSDK()
  return (
    <div>
      ModuleBuilder <br />
      <>{safe.safeAddress}</>
    </div>
  )
}

export default ModuleBuilder
