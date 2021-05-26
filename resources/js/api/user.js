import apiClient from './client'

const PREFIX = 'user'

const URL = {
  SHOW: `${PREFIX}/show`
}

export default {
  async show (payload) {
    const response = await apiClient.get(`${URL.SHOW}/${payload.username}`).then(response => response.data.data)
    return response
  }
}
