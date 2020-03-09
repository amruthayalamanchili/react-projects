import React, { Component } from 'react';
import './ColorBox.css';
class ColorBoxes extends Component {
	render() {
		const { name, background } = this.props;
		return (
			<div style={{ background }} className="ColorBox">
				<div className="copy-container">
					<div className="box-content">
						<span>{name}</span>
					</div>
					<button className="Copy-btn">Copy</button>
				</div>
				<span className="see-more">More</span>
			</div>
		);
	}
}
export default ColorBoxes;
