import React, { Component } from 'react';

// import Home from './Home/components/Home';

import { BrowserRouter, StaticRouter, Switch, Route } from 'react-router-dom';
import routes from '../shared/router';

const App = ({ server, location, context }) => {
	const allRoutes = routes.map((route, i) => <Route key={i} {...route}/>);

	let router = (
		<BrowserRouter>
			<Switch>
				{allRoutes}
			</Switch>
		</BrowserRouter>
	);

	if(server) {
		router = (
			<StaticRouter location={location} context={context}>
				<Switch>{allRoutes}</Switch>
			</StaticRouter>
		);
	}

	return(
		<div>
			{router}
		</div>
	);
}

export default App;

// class App extends Component {
// 	render() {
// 		return(
// 			<div>
// 				<Home/>
// 			</div>
// 		)
// 	}
// }

// export default App;