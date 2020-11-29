import React, { useEffect, useState } from 'react';
import './Play.scss';

const Play = props => {
	const [answer, setAnswer] = useState('');
	const [firstDigit, setFirstDigit] = useState(0);
	const [secondDigit, setSecondDigit] = useState(0);

	const [isSuccess, setIsSuccess] = useState(false);
	const [isFailure, setIsFailure] = useState(false);

	const handleSubmit = evt => {
		evt.preventDefault();
		console.log(`Submitting answer: ${firstDigit} * ${secondDigit} = ${answer}`);

		setIsSuccess(false);
		setIsFailure(false);

		if (firstDigit * secondDigit === parseInt(answer)) {
			console.log('%csuccess', 'background: forestgreen; color: white; padding: 0.5rem 1rem');
			setIsSuccess(true);
		} else {
			console.log('%ctry again', 'background: crimson; color: white; padding: 0.5rem 1rem');
			setIsFailure(true);
		}
	};

	const getRandomDigit = () => {
		return Math.floor(Math.random() * 10);
	};

	useEffect(() => {
		setFirstDigit(getRandomDigit());
		setSecondDigit(getRandomDigit());
	}, []);

	const inputChange = e => {
		setIsSuccess(false);
		setIsFailure(false);
		setAnswer(e.target.value);
	};

	return (
		<div className="Play">
			<div className="exercise">
				<div className="first-digit">{firstDigit}</div>
				<div className="sign">x</div>
				<div className="second-digit">{secondDigit}</div>
			</div>
			<div className="equals-sign"></div>
			<form className="submitForm" onSubmit={handleSubmit}>
				<input
					type="number"
					className={`answerInput ${isSuccess ? 'success' : ''} ${isFailure ? 'failure' : ''}`}
					maxLength="3"
					value={answer}
					onChange={inputChange}
				/>
				<input type="submit" className="answerButton" value="Провери" />
			</form>
		</div>
	);
};

Play.propTypes = {};

Play.defaultProps = {};

export default Play;
