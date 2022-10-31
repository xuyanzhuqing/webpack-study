const path = require('path')
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash'
    })
  ]
}