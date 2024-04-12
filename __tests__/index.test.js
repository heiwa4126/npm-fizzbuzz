const test = require("tape");
const { fizzbuzz } = require("../src/index");

test("fizzbuzz function returns the correct greeting", (t) => {
	const result = fizzbuzz();
	t.equal(result.next().value, 1, "Should return 1");
	t.equal(result.next().value, 2, "Should return 2");
	t.equal(result.next().value, "Fizz", "Should return 'Fizz'");
	t.equal(result.next().value, 4, "Should return 4");
	t.equal(result.next().value, "Buzz", "Should return 'Buzz'");
	t.equal(result.next().value, "Fizz", "Should return 'Fizz'");
	t.equal(result.next().value, 7, "Should return 7");
	t.equal(result.next().value, 8, "Should return 8");
	t.equal(result.next().value, "Fizz", "Should return 'Fizz'");
	t.equal(result.next().value, "Buzz", "Should return 'Buzz'");
	t.equal(result.next().value, 11, "Should return 11");
	t.equal(result.next().value, "Fizz", "Should return 'Fizz'");
	t.equal(result.next().value, 13, "Should return 13");
	t.equal(result.next().value, 14, "Should return 14");
	t.equal(result.next().value, "FizzBuzz", "Should return 'FizzBuzz'");
	// Add more test cases as needed
	t.end();
});
