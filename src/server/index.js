import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

import webpackConfig from '../../webpack.config';

const app = express();
const compiler = webpack(webpackConfig);
const port = process.env.NODE_PORT || 3005;

app.use(express.static(path.join(__dirname, '../../public')));

app.use(webpackDevMiddleware(compiler));
app.use(webpackHotMiddleware(compiler.compilers.find(compiler => compiler.name === 'client')));
app.use(webpackHotServerMiddleware(compiler));

app.listen(port, err => {
	if (!err) {
		console.log(`Àpp is running on port ${port}`);
	}
});