import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
class Navbar extends Component {
	render() {
		const { level, changeLevel } = this.props;
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
			</header>
		);
	}
}
export default Navbar;
