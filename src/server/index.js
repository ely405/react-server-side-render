import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import webpackConfig from '../../webpack.config';

//utils
import { isMobile } from '../shared/utils/device';

// api
import api from './api';
import { API_ROUTE } from '../constants/api-routes';


//express app
const app = express();
const compiler = webpack(webpackConfig);
const port = process.env.NODE_PORT || 3005;

//PUBLIC STATIC
app.use(express.static(path.join(__dirname, '../../public')));

//API MIDDLEWARE
app.use(API_ROUTE, api);

//DEVICE DETECTION
app.use((req, res, next) => {
	req.isMobile = isMobile(req.headers['user-agent']);
	return next();
});

//HOT MODULE REPLACEMENT
app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

app.listen(port, err => {
	if (!err) {
		console.log(`Àpp is running on port ${port}`);
	}
});