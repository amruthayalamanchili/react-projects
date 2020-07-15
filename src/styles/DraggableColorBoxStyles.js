const styles = {
	root: {
		display: 'inline-block',
		position: 'relative',
		width: '20%',
		height: '25%',
		margin: '0 auto',
		cursor: 'pointer',
		textTransform: 'uppercase',
		marginBottom: '-4px',
		'&:hover svg': {
			color: 'white',
			transform: 'scale(1.5)'
		}
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		bottom: '0px',
		left: '0px',
		padding: '10px',
		letterSpacing: '1px',
		color: 'rgba(0,0,0,0.5)',
		textTransform: 'uppercase',
		fontSize: '12px',
		display: 'flex',
		justifyContent: 'space-between'
	},
	deleteIcon: {
		transition: 'all 0.5s ease-in-out'
	}
};
export default styles;
