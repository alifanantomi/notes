import axios from "axios"

const httpClient = axios.create({
    baseURL: process.env.baseURL,
    timeout: 5000,
})

const getAuthToken = () => localStorage.getItem('access_token')

const authInterceptor = (config) => {
    config.headers['Authorization'] = `Bearer ${getAuthToken()}`
    return config
}

httpClient.interceptors.request.use(authInterceptor)

export default httpClient