import React, { useEffect, useState } from 'react'
import PokemonService from '../shared/api/service/PokemonService'

export const AxiosView = () => {
	const [data, setData] = useState<Data>()
	const [search, setSearch] = useState<string>('ditto')
	
	const fetchDataFromExternalAPI = () => {
		// Axios.get(`https://pokeapi.co/api/v2/pokemon/${ search.toLowerCase() }`)
		// 	.then((response) => {
		// 		setData(response.data)
		// 	})
		// 	.catch((error) => console.log(error))
		PokemonService.searchForPokemon(search.toLowerCase())
			.then((response) => {
				setData(response.data)
			})
			.catch((error) => console.log(error))
	}
	
	useEffect(() => {
		// fetchDataFromExternalAPI()
	})
	
	interface Data {
		name: string
		id: number
		weight: number
	}
	
	const displayData = () => {
		if (data) {
			return (
				<div>
					<h3>name: { data.name }</h3>
					<h3>id: { data.id }</h3>
					<h3>weight: { data.weight }</h3>
				</div>
			)
		}
	}
	
	return (
		<>
			<h1>This is AxiosView</h1>
			<input type='text' onChange={ event => setSearch(event.target.value) } value={ search }/>
			<button onClick={ fetchDataFromExternalAPI }>Make API call</button>
			{ displayData() }
			<button onClick={ () => console.log(data) }>Show state</button>
		</>
	)
}

