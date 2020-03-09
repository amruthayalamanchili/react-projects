import React, { Component } from 'react';
import ColorBoxes from './ColorBoxes';
import './Palette.css';
class Palette extends Component {
	render() {
		const colorBox = this.props.colors.map((color) => <ColorBoxes background={color.color} name={color.name} />);
		return (
			<div className="Palette">
				{/* navbar goes here */}
				<div className="Palette-boxes">{colorBox}</div>
				{/* footer goes here */}
			</div>
		);
	}
}

export default Palette;
