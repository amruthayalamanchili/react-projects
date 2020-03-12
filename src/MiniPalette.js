import React from 'react';
import { withStyles } from '@material-ui/styles';
const styles = {
	root: {
		backgroundColor: 'white',
		border: '2px solid black',
		borderRadius: '5px',
		padding: '0.5rem',
		overflow: 'hidden',
		position: 'relative',
		'&:hover': {
			cursor: 'pointer'
		}
	},
	colors: {
		backgroundColor: 'grey'
	},
	title: {
		display: 'flex',
		justifyContent: 'space-between',
		alignItems: 'center',
		margin: '0',
		paddingTop: '0.5rem',
		fontSize: '1rem',
		position: 'relative',
		color: 'black'
	},
	emoji: {
		marginLeft: '0.5rem',
		fontSize: '1rem'
	}
};
function MiniPalette(props) {
	const { classes, paletteName, emoji } = props;
	return (
		<div className={classes.root}>
			<div className={classes.colors} />
			<div className={classes.title}>
				{paletteName} <span className="emoji">{emoji}</span>
			</div>
		</div>
	);
}
export default withStyles(styles)(MiniPalette);
