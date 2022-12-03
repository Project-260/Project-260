import { Title } from '@gnosis.pm/safe-react-components'
import React from 'react'
import { Container } from './components/common'
import RoleBuilder from './components/RoleBuilder'

const SafeApp = (): React.ReactElement => {
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

  return (
    <>
      <Container>
        <Title size="sm">Asset Management</Title>
        <RoleBuilder />
      </Container>
    </>
  )

  // return (
  //   <Container>
  //     <Title size="md">Safe: {safe.safeAddress}</Title>

  //     <Button size="lg" color="primary" onClick={submitTx}>
  //       Click to send a test transaction
  //     </Button>

  //     <Link href="https://github.com/gnosis/safe-apps-sdk" target="_blank" rel="noreferrer">
  //       Documentation
  //     </Link>
  //   </Container>
  // )
}

export default SafeApp
