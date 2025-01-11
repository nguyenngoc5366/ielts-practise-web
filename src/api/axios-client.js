import axios from 'axios'

const options = {
  baseUrl: 'http://localhost:4000/api/v1/',
  withCredentials: true,
  timeout: 10000
}

const API = axios.create(options)

API.interceptors.response.use(
  (reponse) => {
    return reponse
  },
  (error) => {
    const { data, status } = error.reponse
    if(data === 'Unauthorized' && status === 401 ) return
    return Promise.reject({
      ...data
    })
  }
)

export default API