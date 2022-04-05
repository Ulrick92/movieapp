import axios, {AxiosInstance} from 'axios'

// Instance of axios
const apiMovie:AxiosInstance = axios.create({
    baseURL: 'http://localhost:3500'
})

export default apiMovie;