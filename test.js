var assert = require('assert');
var toarr = require('./');

describe('toarr()', function () {
  it('arguments', function () {
    var args = (function () { return arguments; })('a','b','c');
    var arr = toarr(args);

    assert(arr.constructor === Array);
    assert(arr.push('d') === 4);
  });
  it('array-like', function () {
    var arrayLike = {
      '0': 'a',
      '1': 'b',
      '2': 'c',
      length: 3,
      splice: function () {}
    };
    var arr = toarr(arrayLike);

    assert(arr.constructor === Array);
    assert(arr.push('d') === 4);
  });
});
