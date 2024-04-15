const test = require("tape");
const { fizzbuzz, fizzbuzzAt } = require("../src/index");

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

test("fizzbuzzAt function returns the correct greeting", (t) => {
	t.equal(fizzbuzzAt(1), 1, "Should return 1");
	t.equal(fizzbuzzAt(2), 2, "Should return 2");
	t.equal(fizzbuzzAt(3), "Fizz", "Should return 'Fizz'");
	t.equal(fizzbuzzAt(4), 4, "Should return 4");
	t.equal(fizzbuzzAt(5), "Buzz", "Should return 'Buzz'");
	t.equal(fizzbuzzAt(6), "Fizz", "Should return 'Fizz'");
	t.equal(fizzbuzzAt(7), 7, "Should return 7");
	t.equal(fizzbuzzAt(8), 8, "Should return 8");
	t.equal(fizzbuzzAt(9), "Fizz", "Should return 'Fizz'");
	t.equal(fizzbuzzAt(10), "Buzz", "Should return 'Buzz'");
	t.equal(fizzbuzzAt(11), 11, "Should return 11");
	t.equal(fizzbuzzAt(12), "Fizz", "Should return 'Fizz'");
	t.equal(fizzbuzzAt(13), 13, "Should return 13");
	t.equal(fizzbuzzAt(14), 14, "Should return 14");
	t.equal(fizzbuzzAt(15), "FizzBuzz", "Should return 'FizzBuzz'");
	// Add more test cases as needed
	t.end();
});
