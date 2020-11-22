import React from 'react';
import ReactDOM from 'react-dom';
import Play from './Play';

it('should mount', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Play />, div);
	ReactDOM.unmountComponentAtNode(div);
});
