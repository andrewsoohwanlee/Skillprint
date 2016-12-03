const path = require('path')

const paths = {
  src: path.resolve(__dirname, '../src'),
  dist: path.resolve(__dirname, '../dist'),
  node: path.resolve(__dirname, '../node_modules'),
  components: path.resolve(__dirname, '../src/components'),
  styles: path.resolve(__dirname, '../src/styles'),
  pages: path.resolve(__dirname, '../src/pages')
}

module.exports = paths
