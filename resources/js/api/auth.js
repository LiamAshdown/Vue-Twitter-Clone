import apiClient from './client'

const PREFIX = 'auth'

const URL = {
  LOGIN: `${PREFIX}/login`,
  LOGOUT: `${PREFIX}/logout`,
  REGISTER: `${PREFIX}/register`
}

export default {
  async login (payload) {
    const response = await apiClient.post(URL.LOGIN, payload).then(response => response.data)
    return response
  },
  async logout () {
    await apiClient.get(URL.LOGOUT)
  },
  async register (payload) {
    const response = await apiClient.post(URL.REGISTER, payload).then(response => response.data)
    return response
  }
}
