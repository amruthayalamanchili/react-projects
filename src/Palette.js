import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBoxes from './ColorBoxes';
import './Palette.css';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500 };
		this.changeLevel = this.changeLevel.bind(this);
	}
	changeLevel(level) {
		this.setState({ level });
	}
	render() {
		const { colors } = this.props.palette;
		const { level } = this.state;
		const colorBox = colors[level].map((color) => <ColorBoxes background={color.hex} name={color.name} />);
		return (
			<div className="Palette">
				<Navbar level={level} changeLevel={this.changeLevel} />
				{/* navbar goes here */}
				<div className="Palette-boxes">{colorBox}</div>
				{/* footer goes here */}
			</div>
		);
	}
}

export default Palette;
