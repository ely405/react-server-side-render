import Home from '../app/Home/components/Home';
import About from '../app/About/components/About';

import { HOME, ABOUT } from '../constants/routes';

const routes = [
	{
		path: HOME,
		component: Home,
		exact: true
	},{
		path: ABOUT,
		component: About
	}
]

export default routes;