import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import PaletteIcon from '@material-ui/icons/Palette';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import PaletteMetaForm from './PaletteMetaForm';
import styles from './styles/PaletteFormNavStyles';

class PaletteFormNav extends Component {
	constructor(props) {
		super(props);
		this.state = { newPaletteName: '', formShowing: false };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	showForm = () => {
		this.setState({ formShowing: true });
	};
	hideForm = () => {
		this.setState({ formShowing: false });
	};

	render() {
		const { classes, open, handleDrawerOpen, handleSubmit, palettes } = this.props;

		return (
			<div className={classes.root}>
				<CssBaseline />
				<AppBar
					position="fixed"
					color="default"
					className={classNames(classes.appBar, {
						[classes.appBarShift]: open
					})}
				>
					<Toolbar>
						<IconButton
							color="inherit"
							aria-label="open drawer"
							onClick={handleDrawerOpen}
							edge="start"
							className={classNames(classes.paletteButton, {
								[classes.hide]: open
							})}
						>
							<PaletteIcon />
						</IconButton>
						<Typography variant="h6" noWrap>
							Create Palette
						</Typography>
					</Toolbar>
					<div className={classes.navBtns}>
						<Link to="/">
							<Button variant="contained" type="submit" color="secondary" className={classes.button}>
								Go Back
							</Button>
						</Link>
						<Button variant="contained" color="primary" onClick={this.showForm} className={classes.button}>
							save
						</Button>
					</div>
				</AppBar>
				{this.state.formShowing && (
					<PaletteMetaForm palettes={palettes} handleSubmit={handleSubmit} hideForm={this.hideForm} />
				)}
			</div>
		);
	}
}
export default withStyles(styles, { withTheme: true })(PaletteFormNav);
