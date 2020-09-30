const test = require("ava")
const size = require(".")

test("main", t => {
	t.is(size({ a: 1, b: 2, c: 3, [Symbol("d")]: 4 }), 4)
	t.is(size("unicorns"), 8)
	t.is(size(""), 0)
	t.is(size([1, 2, 3, 4, 5]), 5)
	t.is(size(/a/.exec("a")), 1)
	t.is(size((function () {
		return arguments // eslint-disable-line prefer-rest-params
	})(1, 2)), 2)
	t.is(size(12345.678), 9)
	t.is(size(100n), 3) // eslint-disable-line node/no-unsupported-features/es-syntax
	t.is(size(new Map([["a", 1], ["b", 2], ["c", 3]])), 3)
	t.is(size(new Set([1, 2, 3, 4, 5])), 5)
	t.is(size(new ArrayBuffer([2])), 2)
	t.is(size(null), 0) // eslint-disable-line unicorn/no-null
	t.is(size(), 0)
})
