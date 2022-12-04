import Web3 from 'web3'
import poolAbi from '../../resources/abis/aave/v3/pool.json'
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
  const aaveContract = new web3.eth.Contract(poolAbi, '0x794a61358D6845594F94dc1DB02A252b5b4814aD')
  const roleContract = new web3.eth.Contract(roleAbi, roleAddress)

  const aaveSupplyData = aaveContract.methods.supply(asset.address, 10000, safeAddress, 0).encodeABI()

  const aaveData = {
    to: '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
    value: 0,
    data: aaveSupplyData,
  }

  const roleData = roleContract.methods
    .execTransactionFromModule(aaveData.to, aaveData.value, aaveData.data, 0)
    .encodeABI()

  const transactionConfig = {
    to: roleAddress,
    value: 0,
    data: roleData,
  }

  return transactionConfig

  // const contract = new web3.eth.Contract(roleAbi, roleAddress)
  // const e1 = ethers.utils.defaultAbiCoder.encode(['address'], [asset.address])
  // const e2 = ethers.utils.defaultAbiCoder.encode(['uint256'], [limit])
  // const e3 = ethers.utils.defaultAbiCoder.encode(['address'], [safeAddress])
  // const e4 = ethers.utils.defaultAbiCoder.encode(['uint16'], [0])
  // const data = contract.methods
  //   .scopeFunction(
  //     0,
  //     '0x794a61358D6845594F94dc1DB02A252b5b4814aD',
  //     '0x737570',
  //     [true, true, true, false],
  //     [0, 0, 0, 0],
  //     [0, 2, 0, 0],
  //     [e1, e2, e3, e4],
  //     3,
  //   )
  //   .encodeABI()

  // const transactionConfig = {
  //   to: roleAddress,
  //   value: 0,
  //   data,
  // }

  // return transactionConfig
}

export { getRoleScopeFunctionTransactionConfig }
