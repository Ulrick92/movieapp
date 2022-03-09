import axios, {AxiosInstance} from 'axios'

// Instance of axios
const apiMovie:AxiosInstance = axios.create({
    baseURL: 'http://localhost:3000'
})

export default apiMovie;