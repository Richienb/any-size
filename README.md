# Any Size [![Travis CI Build Status](https://img.shields.io/travis/com/Richienb/any-size/master.svg?style=for-the-badge)](https://travis-ci.com/Richienb/any-size)

Get the size of a value. Supports objects, array-like objects, strings (with ansi stripping and unicode character recognition), numbers, maps, sets and array buffers.

[![NPM Badge](https://nodei.co/npm/any-size.png)](https://npmjs.com/package/any-size)

## Install

```sh
npm install any-size
```

## Usage

```js
const size = require("any-size")

size("unicorns")
//=> 8
 
size([1, 2, 3, 4, 5])
//=> 5

size({a: 1, b: 2, c: 3})
//=> 3
```

## API

### anySize(input)

#### input

Type: `any`

The value to get the size of.
