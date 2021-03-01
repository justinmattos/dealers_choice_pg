const webpackConfig = {
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: './bundle.js',
  },
  context: __dirname,
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
