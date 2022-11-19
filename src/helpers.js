const choice = (arr) => arr[Math.floor(Math.random() * arr.length)];

const remove = (items, item) => {
	for (let i of items) {
		if (i === item) {
			items.slice(items[item]);
		}
	}
	return item;
};

export { choice, remove };
