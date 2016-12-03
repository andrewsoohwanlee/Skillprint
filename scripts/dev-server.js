const path = require('path')
const webpack = require('webpack')
const express = require('express')
const webpackConfig = require('../config/webpack.config.dev')

const port = process.env.PORT || 3000

const app = express()
const compiler = webpack(webpackConfig)

const devMiddleware = require('webpack-dev-middleware')(compiler, {
  historyApiFallback: true,
  hot: true,
  stats: {
    colors: true,
    chunks: false,
    chunkModules: false,
    timings: false
  },
  watchOptions: {
    ignored: /node_modules/
  },
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
})

var hotMiddleware = require('webpack-hot-middleware')(compiler)

// Force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// handle fallback for HTML5 history API
app.use(require('connect-history-api-fallback')())

app.use(devMiddleware)

app.use(hotMiddleware)

app.use(express.static(path.join(__dirname, '/dist')))

module.exports = app.listen(port, '0.0.0.0', function (err) {
  if (err) {
    console.log(err)
    return
  }
  var uri = 'http://localhost:' + port
  console.log('Listening at ' + uri + '\n')
})
