import axios from 'axios'
import store from '../store/index'
import { camelizeKeys, decamelizeKeys, decamelize } from 'humps'

const apiClient = axios.create({
  baseURL: '/api/v1'
})

apiClient.interceptors.request.use(async config => {
  const jwtToken = store.getters.accessToken
  const headers = jwtToken ? { Authorization: `Bearer ${jwtToken}` } : {}

  if (config.headers['Content-Type'] === 'application/x-www-form-urlencoded') {
    const formData = new FormData()

    for (const key in config.data) {
      // Turn null into empty string
      if (config.data[key] === null) {
        config.data[key] = ''
      }

      formData.append(decamelize(key), config.data[key])
    }

    config.data = formData
  } else {
    config.data = decamelizeKeys(config.data)
  }

  return {
    ...config,
    headers: {
      ...config.headers,
      ...headers
    }
  }
})

apiClient.interceptors.response.use((response) => {
  if (response.data) {
    response.data = camelizeKeys(response.data)
  }

  return response
}, (error) => {
  if (!error.response) {
    // TODO; Toast Message
  } else if (
    error.response.data &&
    (error.response.statusText === 'Unauthorized' ||
      error.response.data === ' Unauthorized.')
  ) {
    // TODO; Toast Message
    store.dispatch('logout')
  } else if (error.response.status === 500) {
    // TODO; Toast Message
  }

  return Promise.reject(error)
})

export default apiClient
