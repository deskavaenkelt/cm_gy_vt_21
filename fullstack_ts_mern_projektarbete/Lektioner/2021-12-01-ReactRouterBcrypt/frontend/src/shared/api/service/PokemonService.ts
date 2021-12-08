import http from '../PokeApi'

const searchForPokemon = (userSearch: string) => {
	return http.get(`/${ userSearch }`)
}

export default {
	searchForPokemon,
}
