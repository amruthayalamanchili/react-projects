import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
// import { Link } from 'react-router-dom';
import MiniPalette from './MiniPalette';

const styles = {
	root: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'flex-start',
		backgroundColor: 'blue',
		height: '100vh'
	},
	container: {
		width: '50%',
		display: 'flex',
		justifyContent: 'flex-start',
		alignItems: 'center',
		flexDirection: 'column',
		flexWrap: 'wrap'
	},
	nav: {
		width: '100%',
		color: 'white',
		display: 'flex',
		justifyContent: 'space-between'
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3,30%)',
		gridGap: '5%'
	}
};
class PaletteList extends Component {
	goToPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}
	render() {
		const { palettes, classes } = this.props;
		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Colors</h1>
					</nav>
					<div className={classes.palettes}>
						{palettes.map((palette) => (
							<MiniPalette
								{...palette}
								handleClick={() => {
									this.goToPalette(palette.id);
								}}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}
export default withStyles(styles)(PaletteList);
