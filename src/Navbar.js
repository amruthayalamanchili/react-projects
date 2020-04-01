import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Select, MenuItem } from '@material-ui/core';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import './Navbar.css';
class Navbar extends Component {
	constructor(props) {
		super(props);
		this.state = { format: 'hex', open: false };
		this.handleChange = this.handleChange.bind(this);
		this.closeSnackbar = this.closeSnackbar.bind(this);
	}
	handleChange(evt) {
		this.setState({ format: evt.target.value, open: true });
		this.props.handleChange(evt.target.value);
	}
	closeSnackbar() {
		this.setState({ open: false });
	}
	render() {
		const { level, changeLevel } = this.props;
		const { format } = this.state;
		return (
			<header className="Navbar">
				<div className="logo">
					<Link to="/">Color picker</Link>
				</div>
				{this.props.showingAllColors && (
					<div className="slider-text">
						<span>Level:{level}</span>

						<Slider
							className="slider"
							defaultValue={level}
							min={100}
							max={900}
							step={100}
							onAfterChange={changeLevel}
						/>
					</div>
				)}
				<div className="selectContainer">
					<Select value={format} onChange={this.handleChange}>
						<MenuItem value="hex">HEX - #ffffff</MenuItem>
						<MenuItem value="rgb">RGB - rgb(255,255,255)</MenuItem>
						<MenuItem value="rgba">RGBA - rgba(255,255,255,1.0)</MenuItem>
					</Select>
				</div>
				<Snackbar
					anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
					open={this.state.open}
					autoHideDuration={3000}
					message={<span id="message-id">Format Changed</span>}
					ContentProps={{
						'aria-describedby': 'message-id'
					}}
					action={
						<IconButton onClick={this.closeSnackbar} color="inherit">
							<CloseIcon />
						</IconButton>
					}
				/>
			</header>
		);
	}
}
export default Navbar;
