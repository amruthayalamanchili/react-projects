import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import seedPalettes from './seedPalettes';
import Palette from './Palette';
import PaletteList from './PaletteList';
import { generatePalette } from './ColorHelpers';
class App extends Component {
	findPalette(id) {
		return seedPalettes.find((palette) => {
			return palette.id === id;
		});
	}
	render() {
		return (
			<div className="App">
				<Switch>
					<Route exact path="/" render={() => <PaletteList palettes={seedPalettes} />} />
					<Route
						exact
						path="/palette/:id"
						render={(routeProps) => (
							<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
						)}
					/>
				</Switch>
				{/* <Palette palette={generatePalette(seedPalettes[4])} /> */}
			</div>
		);
	}
}

export default App;
