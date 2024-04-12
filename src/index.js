/**
 * Generates a sequence of numbers and strings based on the FizzBuzz game rules.
 * @generator
 * @param {number} [end=Infinity] - The number at which the sequence should end.
 * @yields {(number|string)} The next number or string in the FizzBuzz sequence.
 */
function* fizzbuzz(end = Number.POSITIVE_INFINITY) {
	for (let i = 1; i <= end; i++) {
		yield i % 3 === 0
			? i % 5 === 0
				? "FizzBuzz"
				: "Fizz"
			: i % 5 === 0
				? "Buzz"
				: i;
	}
}

module.exports = { fizzbuzz };
