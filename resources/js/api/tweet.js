import apiClient from './client'

const PREFIX = 'tweet'

const URL = {
  STORE: `${PREFIX}/store`
}

export default {
  async store (payload) {
    const response = await apiClient.post(URL.STORE, payload).then(response => response.data)
    return response
  }
}
