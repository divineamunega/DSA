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

/**
 * This question was easy.... I was just overthinking
 * The first time I tried to use nested loops to solve it (It works but it wasn't effecient at all 💀💀 )
 *
 * Ok good then I tried another method... Which I've deleted cause it did'nt work for a lot of edge cases.
 * This last method was given to me by CHATgpt (That's right I'm a 1x dev 😭😭) but I understand it.. Amazingly
 *
 * It's simple and I think I should have thought of it.
 * We initialize minPRice as infinity (Cause that's the biggest a number can get 🌚🌚) then update it as we move through the array
 * At the end of the loop our minPrice will be the smallest number.. (Makes sense right)
 * Then during the loops we will simulteanously calculate the profits... We calculate the  profits by subtracting the current price from the minimum price
 * Then we update maxProfit if we get a bigger profit than it.
 *
 * Time complexity 0n
 * space complexity 01
 *
 * where n is the number of elements in the array
 *
 */

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
