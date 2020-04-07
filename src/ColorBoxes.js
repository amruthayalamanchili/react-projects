import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css';
import chroma from 'chroma-js';
class ColorBoxes extends Component {
	constructor(props) {
		super(props);
		this.state = { copied: false };
		this.changeCopyState = this.changeCopyState.bind(this);
	}
	changeCopyState() {
		this.setState({ copied: true }, () => {
			setTimeout(() => this.setState({ copied: false }), 1500);
		});
	}
	render() {
		const { name, background, moreUrl, showLink } = this.props;
		const { copied } = this.state;
		const isDarker = chroma(background).luminance() <= 0.08;
		const isLighter = chroma(background).luminance() >= 0.7;

		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div style={{ background }} className="ColorBox">
					<div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
					<div className={`copyMsg ${copied && 'show'}`}>
						<h1>Copied!!!</h1>
						<p className={isLighter && 'dark-text'}>{this.props.background}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span className={isDarker ? 'light-text' : undefined}>{name}</span>
						</div>
						<button className={`Copy-btn ${isLighter && 'dark-text'}`}>Copy</button>
					</div>
					{showLink && (
						<Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
							<span className={`see-more ${isLighter && 'dark-text'}`}>More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}
export default ColorBoxes;
