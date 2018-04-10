'use strict';

const enviroments = ['development', 'stage', 'qa', 'production'];

const getEnviroment = (env = false) => {
	const enviroment = env || process.env.NODE_ENV;
	return isEnviroment(enviroment) ? enviroment : 'production';
}

const isDevelopment = () => {
	return getEnviroment() === 'development';
}

const isEnviroment = (env) => {
	return enviroments.indexOf(env) !== -1;
}

const isProduction = () => {
	return getEnviroment() === 'production';
}

const isQA = () => {
	return getEnviroment() === 'qa';
}

const isStage = () => {
	return getEnviroment() === 'stage';
}

export {
	getEnviroment,
	isDevelopment,
	isEnviroment,
	isProduction,
	isQA,
	isStage,
}