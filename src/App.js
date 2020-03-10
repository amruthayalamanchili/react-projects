import React, { Component } from 'react';
import './App.css';
import seedPalettes from './seedPalettes';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Palette palette={generatePalette(seedPalettes[4])} />
			</div>
		);
	}
}

export default App;
