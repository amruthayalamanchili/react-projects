import chroma from 'chroma-js';
export default {
	ColorBox: {
		display: 'inline-block',
		position: 'relative',
		width: '20%',
		height: (props) => (props.showingFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		cursor: 'pointer',
		textTransform: 'uppercase',
		marginBottom: '-4px',
		'&:hover button': {
			opacity: 1
		}
	},
	copyText: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white')
	},
	colorName: {
		color: (props) => (chroma(props.background).luminance() <= 0.08 ? 'white' : 'black')
	},
	seeMore: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'),
		width: '60px',
		height: '30px',
		display: 'inline-block',
		position: 'absolute',
		bottom: '0px',
		right: '0px',
		lineHeight: '30px',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		textAlign: 'center',
		textTransform: 'uppercase',
		border: 'none',
		fontSize: '12px'
	},
	copyButtton: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'),
		width: '100px',
		height: '30px',
		display: 'inline-block',
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: '-15px',
		marginLeft: '-50px',
		border: 'none',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		fontSize: '1rem',
		lineHeight: '30px',
		textAlign: 'center',
		outline: 'none',
		textDecoration: 'none',
		opacity: 0
	},
	boxContent: {
		position: 'absolute',
		width: '100%',
		bottom: '0px',
		left: '0px',
		padding: '10px',
		letterSpacing: '1px',
		color: 'black',
		textTransform: 'uppercase',
		fontSize: '12px'
	},
	copyOverlay: {
		opacity: 0,
		zIndex: 0,
		width: '100%',
		height: '100%',
		transition: 'transform 0.6s ease-in-out',
		transform: 'scale(0.1)'
	},
	showOverlay: {
		opacity: 1,
		transform: 'scale(50)',
		zIndex: 10,
		position: 'absolute'
	},
	copyMsg: {
		position: 'fixed',
		top: 0,
		left: 0,
		bottom: 0,
		right: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: '4rem',
		transform: 'scale(0.1)',
		color: 'white',
		opacity: 0,
		'& h1': {
			fontWeight: 400,
			marginBottom: '0px',
			padding: '10px',
			textAlign: 'center',
			backgroundColor: 'rgba(255, 255, 255, 0.3)',
			width: '100%',
			textShadow: '0 10px 15px rgb(128, 107, 107)'
		},
		'& p': {
			opacity: 0.8,
			fontSize: '2rem',
			fontWeight: 100
		}
	},
	showMsg: {
		opacity: 1,
		transform: 'scale(1)',
		zIndex: 25,
		transition: 'all 0.4s ease-in-out',
		transitionDelay: '0.3s'
	}
};
