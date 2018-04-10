//preguntamos si es el primer render de un componente
import { isDefined } from './is';

const isFirstRender = (items) => {
	return !isDefined(items) || items.length === 0 || Object.keys(items).length === 0;
}

export default isFirstRender;