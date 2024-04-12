/**
 * Parses a positive integer from the given argument.
 *
 * @param {string} arg - The argument to parse.
 * @returns {number|null} - The parsed positive integer, or null if the argument is not a positive integer.
 */
function parsePositiveInteger(arg) {
	const num = Number.parseInt(arg);
	if (Number.isInteger(num) && num > 0) {
		return num;
	}
	return null;
}

module.exports = { parsePositiveInteger };
