const twoSum = function (nums, target) {
	for (let i = 0; i < nums.length; i++) {
		for (let j = 0; j < nums.length; j++) {
			if (i === j) continue;
			if (nums[i] + nums[j] === target) return [i, j];
		}
	}
};

// Time complexity = 0n
// Space complexity = 0(1)

// THere is an hashmap solution to this but I don't know it... Will do it once I know it though
