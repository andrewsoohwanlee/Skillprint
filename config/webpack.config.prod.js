const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PrerenderSpaPlugin = require('prerender-spa-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const merge = require('webpack-merge')

const paths = require('./paths')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
  devtool: 'cheap-module-source-map',

  entry: {
    main: path.join(paths.src, './entry.js')
  },

  plugins: [
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),

    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        screw_ie8: true,
        warnings: false
      },
      mangle: {
        screw_ie8: true
      },
      output: {
        comments: false,
        screw_ie8: true
      }
    }),

    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),

    new ExtractTextPlugin({
      filename: path.join('styles', 'styles.css')
    }),

    new CopyWebpackPlugin([
      // Copy base index file (for prerendering; will be replaced with actual index)
      {
        from: 'src/index.html',
        to: '.'
      },
      {
        from: 'src/static/resume-0.1.pdf',
        to: '.'
      }
    ]),

    new OptimizeCssAssetsPlugin({
      canPrint: false
    }),

    new PrerenderSpaPlugin(
      paths.dist,
      ['/'],
      {
        // captureAfterDocumentEvent: 'page-transitioned'
      }
    ),

    new webpack.LoaderOptionsPlugin({
      vue: {
        loaders: {
          js: 'babel-loader',
          css: ExtractTextPlugin.extract({
            loader: 'css-loader!sass-loader',
            fallbackLoader: 'vue-style-loader'
          })
        },
        postcss: [
          require('autoprefixer')({ browsers: ['last 2 versions'] })
        ]
      }
    })
  ]
})
