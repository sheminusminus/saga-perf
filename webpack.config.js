/**
 * @fileOverview Webpack configuration file for development.
 */

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const config = require('./webpack.config.base');

const DIST_FOLDER = path.join(__dirname, 'public');
const SRC_FOLDER = path.join(__dirname);

const devServerPort = 1337;
const mixpanelApiHost = `http://localhost:${devServerPort}/api/a`;
const mixpanelToken = '6a5d7d0f966062c475deda5e68f572b5';
const mixpanelEnabled = true;
const mixpanelPersistence = 'cookie';

config.entry = [
  'webpack-dev-server/client?http://localhost:1337',
  // bundle the client for webpack-dev-server
  // and connect to the provided endpoint

  'webpack/hot/only-dev-server',
  // bundle the client for hot reloading
  // only- means to only hot reload for successful updates

  path.join(SRC_FOLDER, 'app.js'),
];

config.output.filename = 'dist/[name].[hash].js';
config.output.chunkFilename = 'dist/[name].[hash].js';

config.devServer = {
  proxy: {
    '/api': 'http://localhost:3000',
  },
  contentBase: DIST_FOLDER,
  compress: true,
  port: devServerPort,
  hot: true,
  publicPath: '/',
  historyApiFallback: true,
};

config.plugins = [
  new webpack.HotModuleReplacementPlugin(), // enable HMR globally
  new webpack.NamedModulesPlugin(),
  new HtmlWebpackPlugin({  // also generate an index.html
    filename: 'index.html',
    template: 'index.html',
    heapEnabled: false,
    heapEnvId: '1570588630',
    rollbarEnv: 'development',
    rollbarEnabled: false,
    gaTrackingCode: 'UA-98495775-4',
    gaEnabled: false,
    mixpanelEnabled,
    mixpanelToken,
    mixpanelApiHost,
    mixpanelPersistence,
  }),
];

config.devtool = 'source-map';

module.exports = config;

