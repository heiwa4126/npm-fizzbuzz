#!/usr/bin/env node

const { fizzbuzz } = require("./index");
const { parsePositiveInteger } = require("./parse");

const end = parsePositiveInteger(process.argv[2]);
if (end === null) {
	console.error("Usage: heiwa4126-fizzbuzz <positive number>");
	process.exit(1);
}

for (const i of fizzbuzz(end)) {
	console.log(i);
}
