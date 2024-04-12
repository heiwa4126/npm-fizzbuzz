const test = require("tape");
const { parsePositiveInteger } = require("../src/parse");

test("parsePositiveInteger returns the correct value for valid positive integers", (t) => {
	t.equal(parsePositiveInteger("123"), 123, "Should return 123");
	t.equal(parsePositiveInteger("42"), 42, "Should return 42");
	t.equal(parsePositiveInteger("1000"), 1000, "Should return 1000");
	// Add more test cases for valid positive integers
	t.end();
});

test("parsePositiveInteger returns null for invalid inputs", (t) => {
	t.equal(
		parsePositiveInteger("abc"),
		null,
		"Should return null for non-numeric input",
	);
	t.equal(
		parsePositiveInteger("-10"),
		null,
		"Should return null for negative numbers",
	);
	t.equal(parsePositiveInteger("0"), null, "Should return null for zero");
	// Add more test cases for invalid inputs
	t.end();
});
