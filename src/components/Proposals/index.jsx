import { Button, GenericModal, Icon, ModalFooterConfirmation } from '@gnosis.pm/safe-react-components'
import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core'
import { useState } from 'react'
import ConditionBuilder from './conditionBuilder'
import RoleNameInputView from './RoleNameInputView'

const appPartners = [
  {
    id: '1',
    label: 'Sushi Swap',
    description: 'via Uniswap buter v2',
    iconUrl: 'https://docs.sushi.com/img/sushilogo.png',
    enabled: false,
  },
  {
    id: '2',
    label: 'Aave',
    description: 'Deposit your tokens',
    iconUrl: 'https://app.aave.com/aaveLogo.svg',
    enabled: true,
  },
]

const Proposals = () => {
  const [isModalOpen, setModalOpen] = useState(false)
  const [modalStep, setModalStep] = useState(0)
  const [appSelected, setAppSelected] = useState(null)

  const handleOpenModal = () => {
    setModalOpen(true)
  }

  const modalBody = () => {
    switch (modalStep) {
      case 0:
        return (
          <>
            <List sx={{ width: '100%' }}>
              {appPartners.map(({ id, description, enabled, iconUrl, label }) => {
                return (
                  <ListItem
                    button
                    key={id}
                    disabled={!enabled}
                    onClick={() => {
                      if (appSelected !== id) {
                        setAppSelected(id)
                      } else {
                        setAppSelected(null)
                      }
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar src={iconUrl} />
                    </ListItemAvatar>
                    <ListItemText primary={label} secondary={description} />
                    {!enabled && 'Coming soon'}
                    {appSelected === id && <Icon type="check" size="md" color="primary" />}
                  </ListItem>
                )
              })}
            </List>
          </>
        )
      case 1:
        return <ConditionBuilder />
      case 2:
        return <RoleNameInputView />
      default:
        return <>None</>
    }
  }

  const next = () => {
    if (modalStep <= 2) {
      setModalStep(modalStep + 1)
      // handle submit proposal and close modal
    } else {
    }
  }
  const prev = () => {
    if (modalStep <= 0) {
      setModalOpen(false)
      setModalStep(0)
    } else {
      setModalStep(modalStep - 1)
    }
  }

  return (
    <Box display="flex" justifyContent="flex-end">
      <Button size="md" onClick={handleOpenModal}>
        Create New Proposal
      </Button>
      {isModalOpen && (
        <GenericModal
          onClose={() => setModalOpen(false)}
          title="Apps"
          body={modalBody()}
          footer={
            <ModalFooterConfirmation
              okText="Continue"
              cancelText={modalStep <= 0 ? 'Cancel' : 'Prev'}
              okDisabled={!appSelected}
              handleCancel={prev}
              handleOk={next}
            />
          }
        />
      )}
    </Box>
  )
}

export default Proposals
