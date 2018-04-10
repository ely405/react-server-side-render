//si una variable esta definida o no
//o tiene una valor diferente a nulo

const isDefined = (variable) => {
	return typeof variable !== 'undefined' && variable !== null;
}

export default isDefined;