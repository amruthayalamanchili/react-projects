import React, { Component } from 'react';
import ColorBoxes from './ColorBoxes';
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
		const colorBoxes = this._shades.map((color) => (
			<ColorBoxes key={color.id} name={color.name} background={color[format]} showLink={false} />
		));
		return (
			<div className="Palette">
				<Navbar handleChange={this.changeFormat} showingAllColors={false} />
				<div className="Palette-boxes">{colorBoxes}</div>
			</div>
		);
	}
}
export default SingleColorPalette;
