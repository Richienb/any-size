"use strict"

const is = require("@sindresorhus/is")
const stringLength = require("string-length")

module.exports = input => {
	if (is.plainObject(input)) {
		return Object.getOwnPropertyNames(input).length + Object.getOwnPropertySymbols(input).length
	}

	if (is.arrayLike(input)) {
		return input.length
	}

	if (is.string(input)) {
		return stringLength(input)
	}

	if (is.number(input)) {
		return input.toString().length
	}

	if (is.map(input) || is.set(input)) { // eslint-disable-line unicorn/no-fn-reference-in-iterator
		return input.size
	}

	if (is.arrayBuffer(input)) {
		return input.byteLength
	}

	return 0
}
