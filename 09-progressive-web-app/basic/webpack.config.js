const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Progressive Web Application',
      template: 'index.html'
   }),
   new WorkboxPlugin.GenerateSW({
    clientsClaim: true,
    skipWaiting: true
   })
  ]
}