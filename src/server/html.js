const html = options => {
	const {
		app = 'main',
		title = 'ejercicio',
		stylesheet = '/css/style.css',
		markup
	} = options;

	return `
	<!DOCTYPE html>
	<html lang="en">
	<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<meta http-equiv="X-UA-Compatible" content="ie=edge">
			<title>${title}</title>
			<link rel="stylesheet" href=${stylesheet}>
	</head>
	<body>
			<div id="root">${markup}</div>
			<script src="/app/${app}.bundle.js"></script>
	</body>
	</html>
	`
}

export default html;