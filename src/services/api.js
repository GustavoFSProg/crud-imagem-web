import axios from 'axios'

const api = axios.create({
  baseURL: 'https://curd-imagem-api.herokuapp.com/',
})

export default api
