import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../app/App';

import html from './html';

export default serverRender =>{
	return (req, res, next) => {
		const markup = renderToString(<App/>);
		res.send(html({
			markup
		}))
	}
}