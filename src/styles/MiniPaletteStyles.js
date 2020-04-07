export default {
	root: {
		backgroundColor: 'white',
		border: '2px solid black',
		borderRadius: '5px',
		padding: '0.5rem',
		position: 'relative',
		overflow: 'hidden',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	colors: {
		backgroundColor: '#dae1e4',
		height: '150px',
		width: '100%',
		borderRadius: '5px',
		overflow: 'hidden'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		paddingTop: '0.5rem',
		fontSize: '1rem',
		fontWeight: '500',
		position: 'relative',
		color: 'black'
	},
	emoji: {
		marginLeft: '0.5rem',
		fontSize: '1rem'
	},
	miniColorBox: {
		height: '25%',
		width: '20%',
		display: 'inline-block',
		position: 'relative',
		margin: '0 auto',
		marginBottom: '-4px'
	}
};
