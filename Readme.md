# toarr [![NPM version][npm-image]][npm-url]

Convert array-likes into arrays.

```javascript
import toarr from 'toarr';

const args = (function () { return arguments; })('a', 'b', 'c');
console.log(args.constructor === Array); // => false;

const arr = toarr(args);
console.log(arr.constructor === Array); // => true;
```

## Installation

```
npm i toarr --save
```

## License

MIT

[npm-image]: https://badge.fury.io/js/toarr.svg
[npm-url]: https://npmjs.org/package/toarr
