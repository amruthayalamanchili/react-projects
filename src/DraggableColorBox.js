import React from 'react';
import { withStyles } from '@material-ui/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import { SortableElement } from 'react-sortable-hoc';

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
const DraggableColorBox = SortableElement((props) => {
	const { classes, color, name, handleClick } = props;
	return (
		<div className={classes.root} style={{ background: color }}>
			<div className={classes.boxContent}>
				<span>{name}</span>
				<DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
			</div>
		</div>
	);
});
export default withStyles(styles)(DraggableColorBox);
