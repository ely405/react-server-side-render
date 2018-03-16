import 'babel-polyfill'; //para que nuestro proyecto sportye lo nuevo de ecma
import React, { Componet } from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader'; // para que actulize la pagina

import App from './App';

const root = document.getElementById('root');

const renderApp = ComponentApp => {
	render(
		<AppContainer>
			<ComponentApp/>
		</AppContainer>
	)
}

renderApp(App);

//RHL

if (module.hot) {
	module.hot.accept('./App', () => {
		renderApp(require('./App').default)
	});
}