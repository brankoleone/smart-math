import React from 'react';
import './App.scss';
import Play from './components/Play/Play';

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<div className="App-title">Умният Математик</div>
			</header>
			<main className="App-main">
				<Play />
			</main>
			<footer className="App-footer">
				<div className="App-copyright">© 2022</div>
			</footer>
		</div>
	);
}

export default App;
