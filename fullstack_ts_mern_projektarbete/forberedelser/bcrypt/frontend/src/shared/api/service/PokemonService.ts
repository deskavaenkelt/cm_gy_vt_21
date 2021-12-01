import http from '../AxiosApi'

const searchForPokemon = (userSearch: string) => {
	return http.get(`/${ userSearch }`)
}

export default {
	searchForPokemon
}
