import React from 'react';
import './App.css';
import seedPalettes from './seedPalettes';
import Palette from './Palette';
function App() {
	return (
		<div className="App">
			<Palette {...seedPalettes[3]} />
		</div>
	);
}

export default App;
