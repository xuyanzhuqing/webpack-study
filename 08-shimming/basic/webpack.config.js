const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new webpack.ProvidePlugin({
      _: 'lodash'
    }),
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: 'index.html'
   })
  ]
}