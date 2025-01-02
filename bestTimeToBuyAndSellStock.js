/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
	let profit = 0;

	for (let i = 0; i < prices.length; i++) {
		for (j = 0; j < prices.length; j++) {
			if (i >= j) continue;

			if (profit < prices[j] - prices[i]) {
				profit = prices[j] - prices[i];
			}
		}
	}

	return profit < 0 ? 0 : profit;
};

const maxProfit2 = function (prices) {
	let minPrice = Infinity;
	let maxProfit = 0;

	for (let i = 0; i < prices.length; i++) {
		// Update the minimum price encountered so far
		if (prices[i] < minPrice) {
			minPrice = prices[i];
		}

		// Calculate profit if sold at the current price
		const profit = prices[i] - minPrice;

		// Update the maximum profit
		if (profit > maxProfit) {
			maxProfit = profit;
		}
	}

	return maxProfit;
};

// Test case
console.log(maxProfit2([2, 1, 2, 1, 0, 1, 2])); // Output: 2
