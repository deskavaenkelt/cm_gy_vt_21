import Axios from 'axios'

const AxiosApi = Axios.create({
	baseURL: 'https://pokeapi.co/api/v2/pokemon/'
})

export default AxiosApi
