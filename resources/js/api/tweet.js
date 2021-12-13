import apiClient from './client'

const PREFIX = 'tweet'

const URL = {
  INDEX: `${PREFIX}/index`,
  STORE: `${PREFIX}/store`,
  LIKE_TWEET: `${PREFIX}/like`,
  UNLIKE_TWEET: `${PREFIX}/unlike`,
  USER_TWEETS: `${PREFIX}/user-tweets`
}

export default {
  async index () {
    const response = await apiClient.get(URL.INDEX).then(response => response.data.data)
    return response
  },
  async store (payload) {
    const response = await apiClient.post(URL.STORE, payload).then(response => response.data.data)
    return response
  },
  async like (id) {
    return await apiClient.post(`${URL.LIKE_TWEET}/${id}`)
  },
  async unlike (id) {
    return await apiClient.post(`${URL.UNLIKE_TWEET}/${id}`)
  },
  async userTweets (id) {
    const response = await apiClient.get(`${URL.USER_TWEETS}/${id}`).then(response => response.data.data)
    return response
  }
}
