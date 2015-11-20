
/**
 * Sigmoid function.
 *
 * @param {Number} x
 * @return {Number}
 * @api public
 */

module.exports = function(x) {
	return 1 / (1 + Math.exp(-x));
};