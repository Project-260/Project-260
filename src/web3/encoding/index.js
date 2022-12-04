import Web3 from 'web3'
import roleAbi from '../../resources/abis/zodiac/roles.json'

// const encodeAaveSupply = async ({ asset, limit }) => {
//
// }

// const encodeAave = async ({ functionSignature, rules }) => {
//   switch (functionSignature) {
//     case 'supply':
//       return encodeAaveSupply(rules);
//     default:
//       throw new Error('Invalid function signature');
//   }
// }

// const encodeScopeFunction = (functionConfig) => {
//   switch (functionConfig.protocol) {
//     case 'AAVE_V3':
//       return encodeAave(functionConfig);
//     default:
//       throw new Error('Invalid protocol');
//   }
// }

const getRoleScopeFunctionTransactionConfig = ({ roleAddress, safeAddress, asset, limit }) => {
  const web3 = new Web3()
  const contract = new web3.eth.Contract(roleAbi, roleAddress)

  const data = contract.methods
    .scopeFunction(
      0,
      '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
      '0x737570',
      [true, true, true, false],
      [0, 0, 0, 0],
      [0, 2, 0, 0],
      [asset, limit, safeAddress, 0],
      3,
    )
    .encodeABI()

  const transactionConfig = {
    to: roleAddress,
    value: 0,
    data,
  }

  return transactionConfig
}

export { getRoleScopeFunctionTransactionConfig }
