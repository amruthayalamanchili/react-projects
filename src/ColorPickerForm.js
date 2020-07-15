import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { ChromePicker } from 'react-color';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import styles from './styles/ColorPickerFormStyles';

class ColorPickerForm extends Component {
	constructor(props) {
		super(props);
		this.state = { currentColor: 'yellow', newColorName: '' };
		this.updateColor = this.updateColor.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount() {
		ValidatorForm.addValidationRule('isColorNameUnique', (value) =>
			this.props.colors.every(({ name }) => name.toLowerCase() !== value.toLowerCase())
		);
		ValidatorForm.addValidationRule('isColorUnique', (value) =>
			this.props.colors.every(({ color }) => color !== this.state.currentColor)
		);
	}
	updateColor(newColor) {
		this.setState({ currentColor: newColor.hex });
	}
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}
	handleSubmit() {
		const newColor = {
			color: this.state.currentColor,
			name: this.state.newColorName
		};
		this.props.addNewColor(newColor);
		this.setState({ newColorName: '' });
	}
	render() {
		const { classes, paletteIsFull } = this.props;
		const { newColorName, currentColor } = this.state;
		return (
			<div>
				<ChromePicker
					color={currentColor}
					onChangeComplete={this.updateColor}
					className={classes.colorPicker}
				/>
				<ValidatorForm onSubmit={this.handleSubmit} ref="form">
					<TextValidator
						name="newColorName"
						onChange={this.handleChange}
						value={newColorName}
						variant="filled"
						margin="normal"
						className={classes.colorName}
						placeholder="Color Name"
						validators={[ 'required', 'isColorNameUnique', 'isColorUnique' ]}
						errorMessages={[ 'Enter a color Name', 'Name should be unique', 'color should be unique' ]}
					/>
					<Button
						variant="contained"
						type="submit"
						color="primary"
						className={classes.button}
						disabled={paletteIsFull}
						style={{ backgroundColor: paletteIsFull ? 'grey' : currentColor }}
					>
						{paletteIsFull ? 'PaletteFull' : 'Add Color'}
					</Button>
				</ValidatorForm>
			</div>
		);
	}
}
export default withStyles(styles)(ColorPickerForm);
