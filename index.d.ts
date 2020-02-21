/**
 * Get the size of any type of value.
 * @param input The value to get the size of.
 * @example
 * ```
 * const size = require("any-size");
 *
 * size("unicorns");
 * //=> 8
 *
 * size([1, 2, 3, 4, 5]);
 * //=> 5
 *
 * size({a: 1, b: 2, c: 3});
 * //=> 3
 * ```
*/
declare function anySize(input: unknown): number

export = anySize
