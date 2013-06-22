
/**
 * Module dependencies.
 */

var min = require('min');
var max = require('max');

/**
 * Bin `data` into `total` bins.
 *
 * @param {Array} data
 * @param {Number} total
 * @param {Object} options
 * @return {Array}
 * @api public
 */

module.exports = function(data, total, opts){
  opts = opts || {};
  var mi = null == opts.min ? min(data) : opts.min;
  var ma = null == opts.max ? max(data) : opts.max;
  var delta = ma - mi;

  // initialize bins
  var bins = [];
  for (var i = 0; i < total; i++) bins[i] = 0;

  // distribute
  for (var i = 0; i < data.length; i++) {
    var n = data[i];
    var p = (n - mi) / (ma - mi);
    var b = Math.max(0, (total * p | 0) - 1);
    bins[b]++;
  }

  return bins;
};
