import axios from 'axios';



const pinApi = axios.create({
    baseURL: 'https://pin.amovil.mx/'
})

export default pinApi