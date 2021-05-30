import apiClient from './client'

const PREFIX = 'tweet'

const URL = {
  STORE: `${PREFIX}/store`,
  USER_TWEETS: `${PREFIX}/user-tweets`
}

export default {
  async store (payload) {
    const response = await apiClient.post(URL.STORE, payload).then(response => response.data)
    return response
  },
  async userTweets (id) {
    const response = await apiClient.get(`${URL.USER_TWEETS}/${id}`).then(response => response.data.data)
    return response
  }
}
