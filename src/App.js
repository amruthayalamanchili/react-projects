import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import seedPalettes from './seedPalettes';
import Palette from './Palette';
import PaletteList from './PaletteList';
import SingleColorPalette from './SingleColorPalette';
import { generatePalette } from './ColorHelpers';
import NewPaletteForm from './NewPaletteForm';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import Page from './Page';

class App extends Component {
	constructor(props) {
		super(props);
		const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'));
		this.state = { palettesList: savedPalettes || seedPalettes };
		this.savePalette = this.savePalette.bind(this);
		this.findPalette = this.findPalette.bind(this);
		this.deletePalette = this.deletePalette.bind(this);
	}
	findPalette(id) {
		return this.state.palettesList.find((palette) => {
			return palette.id === id;
		});
	}
	savePalette(newPalette) {
		this.setState({ palettesList: [ ...this.state.palettesList, newPalette ] }, this.syncLocalStorage);
	}
	deletePalette(id) {
		this.setState(
			(st) => ({ palettesList: st.palettesList.filter((palette) => palette.id !== id) }),
			this.syncLocalStorage
		);
	}
	syncLocalStorage() {
		window.localStorage.setItem('palettes', JSON.stringify(this.state.palettesList));
	}
	render() {
		const { palettesList } = this.state;
		return (
			<Route
				render={({ location }) => (
					<TransitionGroup>
						<CSSTransition key={location.key} classNames="page" timeout={500}>
							<Switch location={location}>
								<Route
									exact
									path="/"
									render={(routeProps) => (
										<Page>
											<PaletteList
												palettes={palettesList}
												deletePalette={this.deletePalette}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/palette/new"
									render={(routeProps) => (
										<Page>
											<NewPaletteForm
												savePalette={this.savePalette}
												palettes={palettesList}
												{...routeProps}
											/>
										</Page>
									)}
								/>
								<Route
									exact
									path="/palette/:id"
									render={(routeProps) => (
										<Page>
											<Palette
												palette={generatePalette(this.findPalette(routeProps.match.params.id))}
											/>
										</Page>
									)}
								/>

								<Route
									exact
									path="/palette/:paletteId/:colorId"
									render={(routeProps) => (
										<Page>
											<SingleColorPalette
												colorId={routeProps.match.params.colorId}
												palette={generatePalette(
													this.findPalette(routeProps.match.params.paletteId)
												)}
											/>
										</Page>
									)}
								/>
							</Switch>
						</CSSTransition>
					</TransitionGroup>
				)}
			/>
		);
	}
}

export default App;
