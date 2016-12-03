const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')

const paths = require('./paths')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  cache: true,
  devtool: 'source-map',

  entry: [
    './scripts/dev-client',
    path.join(paths.src, './entry.js')
  ],

  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('development') }),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),

    new HtmlWebpackPlugin({
      template: path.join(paths.src, 'index.html'),
      inject: false,
      filename: 'index.html'
    }),

    new webpack.LoaderOptionsPlugin({
      vue: {
        loaders: {
          js: 'babel-loader',
          css: 'vue-style-loader!css-loader!sass-loader'
        },
        postcss: [
          require('autoprefixer')({ browsers: ['last 2 versions'] })
        ]
      }
    })
  ]
})
