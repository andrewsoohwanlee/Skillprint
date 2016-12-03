const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const paths = require('./paths')

module.exports = {
  output: {
    path: paths.dist,
    publicPath: '/',
    filename: 'scripts/bundle.js'
  },

  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      'src': paths.src,
      'components': paths.components,
      'styles': paths.styles,
      'pages': paths.pages
    }
  },

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(vue|js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/
      },

      {
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: paths.node
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: paths.node
      },
      {
        test: /\.toml$/,
        loader: 'toml-loader',
        exclude: paths.node
      }
    ]
  },

  plugins: [
    new webpack.LoaderOptionsPlugin({
      eslint: {
        formatter: require('eslint-friendly-formatter')
      }
    }),

    new CopyWebpackPlugin([
      // Copy static files
      {
        from: path.join(paths.src, './static'),
        to: 'static'
      }
    ])
  ]
}
