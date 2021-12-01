import React, { useEffect, useState } from 'react'

export const CounterView = () => {
	const [count, setCount] = useState(0)
	
	useEffect(() => {
		console.log('component is being rendered')
		return () => {
			console.log('component is being removed')
		}
	}, [count])
	
	return (
		<>
			<h1>This is CounterView</h1>
			<h1>{ count }</h1>
			<button onClick={ () => setCount(count + 1) }>increment with 1</button>
		</>
	)
}
