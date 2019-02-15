const path = require('path');
const merge = require('webpack-merge');
const common = require('./wepack.common');

module.exports = merge(common, {
  mode: 'production',
});
