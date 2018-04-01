import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../app/App';

import html from './html';

export default serverRender =>{
	return (req, res, next) => {
		const context = {};

		const markup = renderToString(<App server location={req.url} context={context}/>);

		if(context.url){
			res.redirect(301, context.url);
		} else {
			res.send(html({markup}));
		}

		// res.send(html({
		// 	markup
		// }));
	}
}