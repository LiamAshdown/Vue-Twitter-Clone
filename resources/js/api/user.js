import apiClient from './client'

const PREFIX = 'user'

const URL = {
  SHOW: `${PREFIX}/show`,
  FOLLOW: `${PREFIX}/follow`,
  UNFOLLOW: `${PREFIX}/unfollow`
}

export default {
  async show (payload) {
    const response = await apiClient.get(`${URL.SHOW}/${payload.username}`).then(response => response.data.data)
    return response
  },
  async follow (payload) {
    await apiClient.post(URL.FOLLOW, payload)
  },
  async unfollow (payload) {
    await apiClient.post(URL.UNFOLLOW, payload)
  }
}
