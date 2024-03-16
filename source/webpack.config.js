const path = require('path');

module.exports = {
  entry: './frontend/src/index.js',
  output: {
    filename: 'index-bundle.js',
    path: path.resolve(__dirname, './static'),
  },
};