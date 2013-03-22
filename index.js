
/**
 * Module dependencies.
 */

var min = require('min')
  , max = require('max');

/**
 * Bin `data` into `total` bins.
 *
 * @param {Array} data
 * @param {Number} total
 * @return {Array}
 * @api public
 */

module.exports = function(data, total){
  data = data.sort(numeric);
  var div = Math.ceil((max(data) - min(data)) / total);

  // initialize bins
  var bins = [];
  for (var i = 0; i < total; i++) bins[i] = 0;

  // distribute
  var i = 0;
  var n = 1;
  while (n < total + 1) {
    var m = n * div;
    while (i < data.length && data[i] <= m) {
      bins[n - 1]++;
      ++i;
    }
    ++n;
  }

  return bins;
};

/**
 * Numeric sort.
 */

function numeric(a, b) {
  return a - b;
}
