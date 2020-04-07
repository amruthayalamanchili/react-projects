import React, { Component } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Link } from 'react-router-dom';
import './ColorBox.css';
import chroma from 'chroma-js';
import { withStyles } from '@material-ui/styles';

const styles = {
	ColorBox: {
		display: 'inline-block',
		position: 'relative',
		width: '20%',
		height: (props) => (props.showingFullPalette ? '25%' : '50%'),
		margin: '0 auto',
		cursor: 'pointer',
		textTransform: 'uppercase',
		marginBottom: '-4px',
		'&:hover button': {
			opacity: 1
		}
	},
	copyText: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white')
	},
	colorName: {
		color: (props) => (chroma(props.background).luminance() <= 0.08 ? 'white' : 'black')
	},
	seeMore: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'),
		width: '60px',
		height: '30px',
		display: 'inline-block',
		position: 'absolute',
		bottom: '0px',
		right: '0px',
		lineHeight: '30px',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		textAlign: 'center',
		textTransform: 'uppercase',
		border: 'none',
		fontSize: '12px'
	},
	copyButtton: {
		color: (props) => (chroma(props.background).luminance() >= 0.7 ? 'black' : 'white'),
		width: '100px',
		height: '30px',
		display: 'inline-block',
		position: 'absolute',
		top: '50%',
		left: '50%',
		marginTop: '-15px',
		marginLeft: '-50px',
		border: 'none',
		backgroundColor: 'rgba(255, 255, 255, 0.3)',
		fontSize: '1rem',
		lineHeight: '30px',
		textAlign: 'center',
		outline: 'none',
		textDecoration: 'none',
		opacity: 0
	}
};
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
		const { name, background, moreUrl, showingFullPalette, classes } = this.props;
		const { copied } = this.state;

		return (
			<CopyToClipboard text={background} onCopy={this.changeCopyState}>
				<div style={{ background }} className={classes.ColorBox}>
					<div style={{ background }} className={`copy-overlay ${copied && 'show'}`} />
					<div className={`copyMsg ${copied && 'show'}`}>
						<h1>Copied!!!</h1>
						<p className={classes.copyText}>{this.props.background}</p>
					</div>
					<div className="copy-container">
						<div className="box-content">
							<span className={classes.colorName}>{name}</span>
						</div>
						<button className={classes.copyButtton}>Copy</button>
					</div>
					{showingFullPalette && (
						<Link to={moreUrl} onClick={(e) => e.stopPropagation()}>
							<span className={classes.seeMore}>More</span>
						</Link>
					)}
				</div>
			</CopyToClipboard>
		);
	}
}
export default withStyles(styles)(ColorBoxes);
