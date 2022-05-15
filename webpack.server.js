const path = require('path');
const webpackNodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: path.resolve(__dirname, './server/index.js'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: [webpackNodeExternals()]
};