import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import seedPalettes from './seedPalettes';
import Palette from './Palette';
import { generatePalette } from './ColorHelpers';
class App extends Component {
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" render={() => <h1>Different palettes goes here</h1>} />
					<Route exact path="/palette/:id" render={() => <h1>Individual palettes goes here</h1>} />
				</Switch>
				<Palette palette={generatePalette(seedPalettes[4])} />
			</div>
		);
	}
}

export default App;
