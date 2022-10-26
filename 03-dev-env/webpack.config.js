const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  // devtool: 'inline-source-map',
  entry: {
    index: './src/index.js',
    print: './src/print.js'
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
       title: 'development',
       template: 'index.html'
    })
  ]
}