import ExtractTextPlugin from 'extract-text-webpack-plugin';

import webpack from 'webpack';

const production = 'production';
const isDevelopment = process.env.NODE_ENV !== production;

export default () => {
	const plugins = [
		new ExtractTextPlugin({
			filename: '../../public/css/style.css'
		}),
	];

	if (isDevelopment) {
		plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin()
		);
	}

	return plugins;
}