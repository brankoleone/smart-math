import React from 'react';
import './Play.scss';

const Play = () => (
	<div className="Play">
		<div className="exercise">
			<div className="first-digit">{getRandomDigit()}</div>
			<div className="sign">x</div>
			<div className="second-digit">{getRandomDigit()}</div>
		</div>
		<div className="equals-sign"></div>
		<input type="number" className="answerInput" maxLength="3" />
		<button className="answerButton">Провери</button>
	</div>
);

function getRandomDigit() {
	return Math.floor(Math.random() * 10);
}

Play.propTypes = {};

Play.defaultProps = {};

export default Play;
