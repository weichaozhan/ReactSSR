const path = require('path');

module.exports = {
  target: 'node',
  entry: path.resolve(__dirname, './client/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
};