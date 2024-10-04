import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:2334/api/v1',
    params:{
        key: 'aldypanteq'
    },
    headers: {
        Authorization: 'Bearer aldypanteq'
    }
})

export default axiosInstance