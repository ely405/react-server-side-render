const getCurrentDevice = (device) => {
	return /mobile/i.test(device) ? 'mobile' : 'desktop';
}

//para la implentación de SSR únicamante cuando sea en un bot
const isBot = (device) => {
	return /curl|bot|googlebot|google|baidu|bing|msn|duckduckgo|teoma|slurp|crawler|spider|robot|crawling/i.test(device);
}

const isDesktop = (device) => {
	return !/mobile/i.test(device);
}

const isMobile = (device) => {
	return /mobile/i.test(device);
}

export {
	getCurrentDevice,
	isBot,
	isDesktop,
	isMobile,
}