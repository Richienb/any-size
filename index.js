"use strict"

const { default: is } = require("@sindresorhus/is")
const stringLength = require("string-length")

module.exports = (input) => {
	if (is.plainObject(input)) return Object.keys(input).length
	if (is.arrayLike(input)) return input.length
	if (is.string(input)) return stringLength(input)
	if (is.number(input)) return input.toString().length
	if (is.map(input) || is.set(input)) return input.size
	return 0
}
