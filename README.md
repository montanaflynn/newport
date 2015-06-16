# Newport [![NPM version][npm-image]][npm-url]

Finds a new open port to use! 

## Install

```sh
$ npm install --save newport
```

## Usage

```js
var newport = require('newport');

newport(function(err, port){
  if (err) throw err
  console.log(port)
});
```

## License

MIT © [Montana Flynn](http://anonfunction.com)

[npm-image]: https://badge.fury.io/js/newport.svg
[npm-url]: https://npmjs.org/package/newport
