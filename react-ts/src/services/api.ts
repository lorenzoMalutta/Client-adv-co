import axios from 'axios'

const api = axios.create({
    baseURL: 'https://sercer-adv-co.onrender.com/',
})

export default api
