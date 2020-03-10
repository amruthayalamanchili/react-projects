import React, { Component } from 'react';
import './App.css';
import seedPalettes from './seedPalettes';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';
class App extends Component {
	render() {
		console.log(generatePalette(seedPalettes[4]));
		return (
			<div className="App">
				<Palette {...seedPalettes[3]} />
			</div>
		);
	}
}

export default App;
