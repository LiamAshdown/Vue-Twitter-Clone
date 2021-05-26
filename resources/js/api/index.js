import authApi from './auth'
import userApi from './user'
import tweetApi from './tweet'

export const api = {
  auth: authApi,
  user: userApi,
  tweet: tweetApi
}

export default api
