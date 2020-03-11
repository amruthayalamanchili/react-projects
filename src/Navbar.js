import React, { Component } from 'react';
import { Select, MenuItem } from '@material-ui/core';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex' };
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(evt) {
		this.setState({ format: evt.target.value });
		this.props.handleChange(evt.target.value);
	}
	render() {
		const { level, changeLevel } = this.props;
		const { format } = this.state;
		return (
			<header className="Navbar">
				<div className="logo">
					<a href="#">Color picker</a>
				</div>
				<div className="slider-text">
					<span>Level:{level}</span>
				</div>
				<Slider
					className="slider"
					defaultValue={level}
					min={100}
					max={900}
					step={100}
					onAfterChange={changeLevel}
				/>
				<div className="selectContainer">
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
					</Select>
				</div>
			</header>
		);
	}
}
export default Navbar;
