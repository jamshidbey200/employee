const listToObject = (list, keySlug = 'slug', valueSlug = 'title') => {
	const obj = {};

	list.forEach((el) => {
		if (el.type === 'Raw JSON input') {
			obj[el[keySlug]] = JSON.parse(el.title);
		} else {
			obj[el[keySlug]] = el[valueSlug];
		}
	});

	return obj;
};

export default listToObject;
