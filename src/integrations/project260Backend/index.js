import axios from 'axios'

const baseUrl = 'https://api.project260.xyz/api/v1'

const getProposals = async ({ safeAddress }) => {
  const url = `${baseUrl}/proposals?safeAddress=${safeAddress}`
  const response = await axios.get(url, {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
  })

  if (response.status !== 200) {
    throw new Error('Failed to get proposals')
  }

  return response.data
}

const createProposal = async (data) => {
  const response = await axios.post(`${baseUrl}/proposals`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
    body: {
      ...data,
    },
  })

  if (response.status !== 201) {
    throw new Error('Failed to create proposal')
  }

  return response.data
}

const approveProposal = async (data) => {
  const response = await axios.post(`${baseUrl}/proposals/approve`, data, {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: 10000,
    body: {
      ...data,
    },
  })

  if (response.status !== 200) {
    throw new Error('Failed to approve proposal')
  }

  return response.data
}

export { getProposals, createProposal, approveProposal }
