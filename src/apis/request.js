import axios from 'axios'

// 可以根據不同 axios 需求建立多個配置
// VITE_API_URL = 'https://todoo.5xcamp.us'
const request = axios.create({
  // Request Config
  baseURL: import.meta.env.VITE_API_URL
})

export default request
