import API from './axios-client'
import axios from 'axios'

export const baseUrl = 'http://localhost:4000/api/v1'

export function callApi(endpoint, method = 'GET', body) {
  return axios({
    method,
    url: `${baseUrl}${endpoint}`,
    data: body
  })
}

// data = { email: string, password: string }
// export const loginMulationFn = async (data) => await API.post('/auth/login', data)
// data = { "email": string, "password": "string", "name": string }
// export const registerMulationFn = async (data) => await API.post('/auth/register', data)
export const registerMulationFn = async (data) => await callApi('/auth/register', 'POST', data)
export const loginMulationFn = async (data) => await callApi('/auth/login', 'POST', data)

