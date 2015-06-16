# Newport [![Build Status][build-img]][build-url] [![Coverage Status][coverage-img]][coverage-url] [![Version][version-img]][version-url] [![License][license-img]][license-url]

Find a new port that's available to be used in your program.

## Install

```sh
$ npm install newport
```

## Usage

```js
var newport = require('newport')

// Get a new port that's available
newport(function(err, port){
  if (err) throw err
  console.log(port)
})

// Check if a port is available
newport(8080, function(err, port){
  if (err) throw err
  console.log(port)
})
```

## License

The MIT License

Copyright (c) 2015 Montana Flynn <montana@montanaflynn.me>

[build-img]: https://travis-ci.org/montanaflynn/newport.svg?branch=master
[build-url]: https://travis-ci.org/montanaflynn/newport

[coverage-img]: https://coveralls.io/repos/montanaflynn/newport/badge.svg
[coverage-url]: https://coveralls.io/r/montanaflynn/newport

[license-img]: https://img.shields.io/npm/l/newport.svg
[license-url]: https://github.com/montanaflynn/newport/blob/master/LICENSE

[version-img]: https://img.shields.io/npm/v/newport.svg
[version-url]: https://www.npmjs.com/package/newport