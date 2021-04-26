export const limitStringSize = (str, size) => {
	if (size >= str.length) {
		return str;
	}

	const limitedString = str.split('').splice(0, size).join('').replace(/,/g, '').concat('...');

	return limitedString;
};

export const toCurrencyFormat = (value) => {
	const formatter = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
	const currency = formatter.format(value);

	return currency;
};

export const getQueryFromSearch = (search) => {
	let query = search.replace('?', '');
	let queryObject = {};

	query = query.split('&');
	query = query.map((index) => {
		const splitedValue = index.split('=');
		const key = splitedValue[0];
		const value = splitedValue[1];

		return { key, value };
	});

	query.forEach((q) => (queryObject[q.key] = q.value));

	return queryObject;
};
