/**
 * @fileOverview Webpack basic configuration file.
 */

const path = require('path');

const SRC_FOLDER = path.join(__dirname);
const DIST_FOLDER = path.join(__dirname, 'public');

module.exports = {
  entry: {
    app: path.join(SRC_FOLDER, 'app.js'),
  },
  output: {
    publicPath: '/',
    path: DIST_FOLDER,
    filename: 'dist/[name].[chunkhash].js',
    chunkFilename: 'dist/[name].[chunkhash].js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: [/node_modules/, path.resolve(__dirname, 'api')],
        loaders: 'babel-loader',
        query: {
          presets: ['env'],
          plugins: ['transform-object-rest-spread'],
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
