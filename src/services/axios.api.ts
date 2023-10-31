import axios, {AxiosInstance} from 'axios'

const url:AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
})

export default url