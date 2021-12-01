import React from 'react'
import { DefaultButton, PrimaryButton } from '../components/CustomButtonComponent'

export const HomeView = () => {
	
	return (
		<>
			<h1>This is HomeView</h1>
			<PrimaryButton onClick={ () => console.log('You clicked the Primary button') }
						   children='Primary Component Button'/>
			<DefaultButton onClick={ () => console.log('You clicked the Secondary button') }
						   children='Secondary Component Button'/>
		</>
	)
}
