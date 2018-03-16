import nodeExternals from 'webpack-node-externals';

//para que no ignore redux
export default () => [
	nodeExternals({
		whitelist: [/^redux\/(store|modules)/]
	})
];