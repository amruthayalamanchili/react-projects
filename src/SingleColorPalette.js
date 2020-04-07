import React, { Component } from 'react';
import ColorBoxes from './ColorBoxes';
import PaletteFooter from './PaletteFooter';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
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
		const colorBoxes = this._shades.map((color) => (
			<ColorBoxes key={color.name} name={color.name} background={color[format]} showingFullPalette={false} />
		));
		return (
			<div className="SingleColorBox Palette">
				<Navbar handleChange={this.changeFormat} showingAllColors={false} />
				<div className="Palette-boxes">
					{colorBoxes}
					<div className="go-back ColorBox">
						<Link to={`/palette/${id}`} className="back-btn">
							Go Back
						</Link>
					</div>
				</div>
				<PaletteFooter paletteName={paletteName} emoji={emoji} />
			</div>
		);
	}
}
export default SingleColorPalette;
