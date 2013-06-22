
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
 * @return {Array}
 * @api public
 */

module.exports = function(data, total){
  var mi = min(data);
  var ma = max(data);

  // initialize bins
  var bins = [];
  for (var i = 0; i < total; i++) bins[i] = 0;

  // distribute
  for (var i = 0; i < data.length; i++) {
    var n = data[i];
    var d = n - mi;
    var p = d / ma;
    var b = total * p | 0;
    bins[b]++;
  }

  return bins;
};
