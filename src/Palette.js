import React, { Component } from 'react';
import Navbar from './Navbar';
import ColorBoxes from './ColorBoxes';
import './Palette.css';

class Palette extends Component {
	constructor(props) {
		super(props);
		this.state = { level: 500, format: 'hex' };
		this.changeLevel = this.changeLevel.bind(this);
		this.changeFormat = this.changeFormat.bind(this);
	}
	changeLevel(level) {
		this.setState({ level });
	}
	changeFormat(val) {
		this.setState({ format: val });
	}
	render() {
		const { colors, paletteName, emoji, id } = this.props.palette;
		const { level, format } = this.state;
		const colorBox = colors[level].map((color) => (
			<ColorBoxes
				background={color[format]}
				name={color.name}
				key={color.id}
				moreUrl={`/palette/${id}/${color.id}`}
				showLink
			/>
		));
		return (
			<div className="Palette">
				<Navbar
					level={level}
					changeLevel={this.changeLevel}
					handleChange={this.changeFormat}
					showingAllColors
				/>
				<div className="Palette-boxes">{colorBox}</div>
				<div className="Palette-footer">
					{paletteName}
					<span className="emoji">{emoji}</span>
				</div>
			</div>
		);
	}
}

export default Palette;
