import axios from 'axios'

const SERVER_PORT = process.env.SERVER_PORT
const axiosInstance = axios.create({
    baseURL: `http://localhost:${SERVER_PORT}/api`,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosInstance