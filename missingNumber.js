/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
	const n = nums.length;
	const arrSorted = nums.sort((a, b) => a - b);

	let missingNumber;
	for (let i = 0; i < nums.length + 1; i++) {
		if (i === arrSorted[i]) continue;

		if (i !== arrSorted[i]) {
			missingNumber = i;
			break;
		}
	}

	return missingNumber;
};

const nums = [0, 1];
console.log(missingNumber(nums));
