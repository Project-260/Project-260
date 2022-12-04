import { Select, TextFieldInput } from '@gnosis.pm/safe-react-components'
import { Chip, Grid } from '@material-ui/core'
import { useState } from 'react'

const TOKENS = [
  {
    id: 'dai',
    name: 'Dai Stablecoin',
    label: 'DAI',
    symbol: 'DAI',
    address: '0x8f3Cf7ad23Cd3CaDbD9735AFf958023239c6A063',
    decimals: 18,
    logoUrl: 'https://polygonscan.com/token/images/mcdDai_32.png',
  },
  {
    id: 'matic',
    name: 'Matic Token',
    label: 'MATIC',
    symbol: 'MATIC',
    address: '0x0000000000000000000000000000000000001010',
    decimals: 18,
    logoUrl: 'https://polygonscan.com/token/images/matic_32.png',
  },
]

// currently hard-coded for Aave
const abiMethods = [
  {
    id: '1',
    label: 'supply',
    contractAddress: '',
  },
]

const abiStruct = {
  supply: [
    { internalType: 'address', name: 'asset', type: 'address', hidden: false },
    { internalType: 'uint256', name: 'amount', type: 'uint256', hidden: false },
    { internalType: 'address', name: 'onBehalfOf', type: 'address', hidden: true },
    { internalType: 'uint16', name: 'referralCode', type: 'uint16', hidden: true },
  ],
}

const ConditionBuilder = () => {
  const [fieldValues, setFieldValues] = useState({})
  const [selectedMethod, setSelectedMethod] = useState(null)

  const [selectedAssets, setSelectedAssets] = useState(new Set())

  const handleAssetCheckboxOnChange = (e) => {
    if (selectedAssets.has(e.target.name)) {
      selectedAssets.delete(e.target.name)
      setSelectedAssets(selectedAssets)
    } else {
      selectedAssets.add(e.target.name)
      setSelectedAssets(selectedAssets)
    }
    setFieldValues({ ...fieldValues, asset: selectedAssets })
  }

  const handleAssetSelect = (id) => {
    // set
  }

  const [selectedToken, setSelectedToken] = useState(null)
  const handleMethodSelect = (id) => {
    setSelectedToken(id)
    setSelectedMethod(id)
  }

  return (
    <>
      <Grid container spacing={2} style={{ width: 540 }}>
        <Grid item xs={12}>
          <Select
            label={'Select method'}
            placeholder="Select method"
            items={abiMethods}
            activeItemId={selectedMethod}
            onItemClick={handleMethodSelect}
          />
        </Grid>
        {!!selectedMethod &&
          abiStruct['supply'].map(({ internalType, name, type, hidden }) => {
            if (hidden) return null
            const key = `${internalType}_${name}_${type}`

            if (name === 'asset') {
              return (
                <Grid item xs={12}>
                  <Grid container alignContent="center" spacing={2}>
                    <Grid item>
                      <Chip label={'asset'} style={{ borderRadius: 2 }} />
                    </Grid>
                    <Grid item>
                      {/* {TOKENS.map(({ address, symbol }) => (
                        <Checkbox
                          name={address}
                          label={symbol}
                          key={address}
                          checked={selectedAssets.has(address)}
                          onChange={handleAssetCheckboxOnChange}
                        />
                      ))} */}

                      <Select
                        name="key"
                        label={'asset'}
                        placeholder="asset"
                        items={TOKENS}
                        activeItemId={selectedToken}
                        onItemClick={handleAssetSelect}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              )
            }
            return (
              <Grid item xs={12}>
                <Grid container alignContent="center" spacing={2}>
                  <Grid item>
                    <Chip label={name} style={{ borderRadius: 2 }} />
                  </Grid>
                  <Grid item>
                    <TextFieldInput
                      id={key}
                      key={key}
                      name={name}
                      placeholder={internalType}
                      value={fieldValues[key]}
                      fullWidth
                      onChange={(e) => setFieldValues({ ...fieldValues, [key]: e.target.value })}
                      helperText="Enter the maximum amount"
                    />
                  </Grid>
                </Grid>
              </Grid>
            )
          })}
      </Grid>
    </>
  )
}

export default ConditionBuilder
