import Home from '../app/Home/components/Home';
import About from '../app/About/components/About';

const routes = [
	{
		path: '/',
		component: Home,
		exact: true
	},{
		path: '/about',
		component: About
	}
]

export default routes;