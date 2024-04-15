/**
 * Returns the FizzBuzz value at the given index.
 *
 * @param {number} i - The index to calculate the FizzBuzz value for.
 * @returns {string|number} - The FizzBuzz value at the given index.
 */
function fizzbuzzAt(i) {
	return i % 3 === 0
		? i % 5 === 0
			? "FizzBuzz"
			: "Fizz"
		: i % 5 === 0
			? "Buzz"
			: i;
}

/**
 * Generates a sequence of numbers and strings based on the FizzBuzz game rules.
 * @generator
 * @param {number} [end=Infinity] - The number at which the sequence should end.
 * @yields {(number|string)} The next number or string in the FizzBuzz sequence.
 */
function* fizzbuzz(end = Number.POSITIVE_INFINITY) {
	for (let i = 1; i <= end; i++) {
		yield fizzbuzzAt(i);
	}
}

module.exports = { fizzbuzz, fizzbuzzAt };
