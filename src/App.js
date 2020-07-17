import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import seedPalettes from './seedPalettes';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import { generatePalette } from './ColorHelpers';
import NewPaletteForm from './NewPaletteForm';

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = { palettesList: savedPalettes || seedPalettes };
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
	}
	findPalette(id) {
		return this.state.palettesList.find((palette) => {
			return palette.id === id;
		});
	}
	savePalette(newPalette) {
		this.setState({ palettesList: [ ...this.state.palettesList, newPalette ] }, this.syncLocalStorage);
	}
	syncLocalStorage() {
		window.localStorage.setItem('palettes', JSON.stringify(this.state.palettesList));
	}
	render() {
		const { palettesList } = this.state;
		return (
			<div className="App">
				<Switch>
					<Route
						exact
						path="/"
						render={(routeProps) => <PaletteList palettes={palettesList} {...routeProps} />}
					/>
					<Route
						exact
						path="/palette/new"
						render={(routeProps) => (
							<NewPaletteForm savePalette={this.savePalette} palettes={palettesList} {...routeProps} />
						)}
					/>
					<Route
						exact
						path="/palette/:id"
						render={(routeProps) => (
							<Palette palette={generatePalette(this.findPalette(routeProps.match.params.id))} />
						)}
					/>
					<Route
						exact
						path="/palette/:paletteId/:colorId"
						render={(routeProps) => (
							<SingleColorPalette
								colorId={routeProps.match.params.colorId}
								palette={generatePalette(this.findPalette(routeProps.match.params.paletteId))}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
