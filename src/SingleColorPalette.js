import React, { Component } from 'react';
import ColorBoxes from './ColorBoxes';
class SingleColorPalette extends Component {
	constructor(props) {
		super(props);
		this._shades = this.generateShades(this.props.palette, this.props.colorId);
		console.log(this._shades);
	}
	generateShades(palette, colorToShade) {
		let shades = [];
		let allColors = palette.colors;
		for (let key in allColors) {
			shades = shades.concat(allColors[key].filter((color) => color.id === colorToShade));
		}
		return shades.slice(1);
	}
	render() {
		const colorBoxes = this._shades.map((color) => (
			<ColorBoxes key={color.id} name={color.name} background={color.hex} showLink={false} />
		));
		return (
			<div className="Palette">
				<h1>Single Color Palette</h1>
				<div className="Palette-boxes">{colorBoxes}</div>
			</div>
		);
	}
}
export default SingleColorPalette;
