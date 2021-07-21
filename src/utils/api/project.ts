import axios from 'axios'

const API = axios.create({
  baseURL: 'https://inovact.in/api',
})

export const fetchProjects = async (): Promise<any> => {
  return await API.get('/projects')
}
