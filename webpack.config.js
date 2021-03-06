const path = require('path');

const webpackConfig = {
  entry: './src/index.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'main.js',
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
};

module.exports = webpackConfig;
