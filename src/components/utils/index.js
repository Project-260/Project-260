import { utils } from 'ethers'

function minifyAddress(address) {
  if (!address) return ''

  return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`
}

const isValidAddress = (address) => {
  if (address) {
    return utils.isAddress(address)
  }

  return false
}
export { isValidAddress, minifyAddress }
