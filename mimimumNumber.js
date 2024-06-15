const minimumNumber = (askedList) =>
	Array.from(new Set(askedList)).reduce(
		(prev, curr, i, { length }) =>
			i === length - 1 ? prev + curr + length : prev + curr,
		0
	);

// console.log(minimumNumber([1, 4, 1]));

// console.log(Array.from(new Set([30, 30, 30])));
