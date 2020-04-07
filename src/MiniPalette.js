import React from 'react';
import { withStyles } from '@material-ui/styles';
import styles from './styles/MiniPaletteStyles';
function MiniPalette(props) {
	const { classes, paletteName, emoji, colors } = props;
	const miniColorBoxes = colors.map((color) => (
		<div className={classes.miniColorBox} style={{ backgroundColor: color.color }} key={color.name} />
	));
	return (
		<div className={classes.root} onClick={props.handleClick}>
			<div className={classes.colors}>{miniColorBoxes}</div>
			<div className={classes.title}>
				{paletteName} <span className="emoji">{emoji}</span>
			</div>
		</div>
	);
}
export default withStyles(styles)(MiniPalette);
