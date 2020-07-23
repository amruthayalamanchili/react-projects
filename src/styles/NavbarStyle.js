import sizes from './sizes';
export default {
	Navbar: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'flex-start',
		height: '10vh',
		[sizes.down('xs')]: {
			height: '7vh'
		}
	},
	logo: {
		background: '-webkit-linear-gradient(rgb(27, 26, 25), rgba(24, 22, 21, 0.5))',
		height: '100%',
		display: 'flex',
		alignItems: 'center',
		marginRight: '15px',
		padding: '0 25px',
		fontSize: '2rem',
		fontFamily: 'sans-serif',
		'& a': {
			textDecoration: 'none',
			color: 'rgba(250, 242, 242, 0.9)',
			fontStyle: 'initial'
			// textShadow: '-1px -1px 0 rgb(96, 209, 224), 2px -1px 0 rgb(199, 100, 70), -2px 1px 0 rgb(11, 245, 11)'
		},
		[sizes.down('md')]: {
			width: '30%',
			padding: '0 15px',
			marginRight: '0px',
			fontSize: '1.5rem',
			justifyContent: 'center'
		},
		[sizes.down('xs')]: {
			width: '20%',
			fontSize: '1rem',
			padding: 0
		}
	},
	slider: {
		width: '340px',
		margin: '2px 10px',
		display: 'inline-block',
		'& .rc-slider-track': {
			backgroundColor: 'transparent'
		},
		'& .rc-slider-rail': {
			height: '8px'
		},
		'& .rc-slider-handle,.rc-slider-handle:focus,.rc-slider-handle:active,.rc-slider-handle:hover ': {
			background: 'tomato',
			boxShadow: 'none',
			border: 'rgb(173, 15, 23) 2px solid',
			outline: 'none',
			width: '20px',
			height: '20px',
			marginTop: '-7px'
		},
		[sizes.down('sm')]: {
			width: '150px',
			margin: '2px 5px'
		}
	},
	sliderText: {
		fontSize: '1.2rem',
		fontFamily: 'cursive',
		color: 'rgba(80,57,57,0.7)',
		/* text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000; */
		[sizes.down('md')]: {
			fontSize: '1rem',
			marginLeft: '1rem'
		}
	},

	selectContainer: {
		marginLeft: 'auto',
		marginRight: '1rem',
		[sizes.down('md')]: {
			marginRight: '0.5rem',
			width: '20%'
		}
	}
};
