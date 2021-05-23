import apiClient from './client'

const PREFIX = 'tweet'

const URL = {
  LOGIN: `${PREFIX}/store`
}

export default {
  async store (payload) {
    const response = await apiClient.post(URL.LOGIN, payload).then(response => response.data)
    return response
  }
}
