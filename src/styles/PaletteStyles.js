import sizes from './sizes';
export default {
	Palette: {
		height: '100vh',
		display: 'flex',
		flexFlow: 'column',
		overflow: 'hidden'
	},
	colors: {
		height: '90%'
	},
	goBack: {
		display: 'inline-block',
		position: 'relative',
		width: '20%',
		height: '50%',
		margin: '0 auto',
		cursor: 'pointer',
		textTransform: 'uppercase',
		marginBottom: '-4px',
		opacity: 1,
		background: 'black',
		'& a': {
			width: '100px',
			height: '30px',
			display: 'inline-block',
			position: 'absolute',
			top: '50%',
			left: '50%',
			marginTop: '-15px',
			marginLeft: '-50px',
			border: 'none',
			background: 'rgba(255, 255, 255, 0.3)',
			color: 'white',
			fontSize: '1rem',
			lineHeight: '30px',
			textAlign: 'center',
			outline: 'none',
			textDecoration: 'none'
		},
		[sizes.down('lg')]: {
			width: '50%',
			height: '33.33%'
		},
		[sizes.down('md')]: {
			width: '50%',
			height: '20%'
		},
		[sizes.down('xs')]: {
			width: '100%',
			height: '10%'
		}
	}
};
