import React, { Component } from 'react';
import ColorBoxes from './ColorBoxes';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import { withStyles } from '@material-ui/styles';

const styles = {
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
		}
	}
};
class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.generateShades(this.props.palette, this.props.colorId);
		this.state = { format: 'hex' };
		this.changeFormat = this.changeFormat.bind(this);
	}
	generateShades(palette, colorToShade) {
		let shades = [];
		let allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter((color) => color.id === colorToShade));
		}
		return shades.slice(1);
	}
	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { format } = this.state;
		const { paletteName, emoji, id } = this.props.palette;
		const { classes } = this.props;
		const colorBoxes = this._shades.map((color) => (
			<ColorBoxes key={color.name} name={color.name} background={color[format]} showingFullPalette={false} />
		));
		return (
			<div className={classes.Palette}>
				<Navbar handleChange={this.changeFormat} showingAllColors={false} />
				<div className={classes.colors}>
					{colorBoxes}
					<div className={classes.goBack}>
						<Link to={`/palette/${id}`}>Go Back</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
export default withStyles(styles)(SingleColorPalette);
