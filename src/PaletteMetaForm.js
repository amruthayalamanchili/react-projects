import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteMetaForm extends Component {
	constructor(props) {
		super(props);
		this.state = { open: true, newPaletteName: '' };
		this.handleChange = this.handleChange.bind(this);
	}
	componentDidMount() {
		ValidatorForm.addValidationRule('isPaletteNameUnique', (value) =>
			this.props.palettes.every(({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase())
		);
	}
	handleChange(evt) {
		this.setState({ [evt.target.name]: evt.target.value });
	}

	// handleClickOpen = () => {
	// 	this.setState({ open: true });
	// };

	handleClose = () => {
		this.setState({ open: false });
	};
	render() {
		const { open, newPaletteName } = this.state;
		const { handleSubmit } = this.props;
		return (
			<div>
				<Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Enter Palette Name</DialogTitle>
					<ValidatorForm onSubmit={() => handleSubmit(newPaletteName)}>
						<DialogContent>
							<DialogContentText>
								Add new palette name for your beautiful palette.Make sure its unique!
							</DialogContentText>

							<TextValidator
								label="Palette name"
								name="newPaletteName"
								value={newPaletteName}
								fullWidth
								margin="normal"
								onChange={this.handleChange}
								validators={[ 'required', 'isPaletteNameUnique' ]}
								errorMessages={[ 'Enter Palette Name', 'Name already used' ]}
							/>
						</DialogContent>
						<DialogActions>
							<Button onClick={this.handleClose} color="primary">
								Cancel
							</Button>
							<Button variant="contained" type="submit" color="primary">
								Save Palette
							</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}
export default PaletteMetaForm;
