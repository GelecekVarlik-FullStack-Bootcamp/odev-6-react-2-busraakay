import axios from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:80/',
})

export const getTodoList = () => service.get('todo')
export const getCategoryList = () => service.get('category')
export const getStatusList = () => service.get('status')