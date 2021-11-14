import axios from 'axios'

const createAxios = axios.create()

console.log(import.meta.env.VITE_BASE_URL)

createAxios.defaults.baseURL = import.meta.env.VITE_BASE_URL
createAxios.defaults.timeout = 2500
createAxios.defaults.headers['Content-Type'] = 'application/json'
createAxios.defaults.headers['Access-Control-Allow-Origin'] = '*'
createAxios.defaults.headers['Access-Control-Allow-Methods'] = 'GET,POST,OPTIONS,DELETE,PUT'

export default createAxios
