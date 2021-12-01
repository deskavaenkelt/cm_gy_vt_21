import React from 'react'

interface Props {
	children?: React.ReactNode;
	onClick: () => void;
}

const PrimaryButton: React.FC<Props> = ({children, onClick}) => {
	return (
		<button onClick={ onClick }>
			{ children }
		</button>
	)
}

const DefaultButton: React.FC<Props> = ({children, onClick}) => {
	return (
		<button onClick={ onClick }>
			{ children }
		</button>
	)
}

export {
	PrimaryButton,
	DefaultButton
}
