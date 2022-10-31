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
      join: ['lodash', 'join']
    }),
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: 'index.html'
   })
  ],
  module: {
    rules: [
      // {
      // test: require.resolve('./src/index.js'),
      // use: 'imports-loader?this=>window'
      // },
      // https://www.npmjs.com/package/exports-loader
      {
       test: require.resolve('./src/globals.js'),
       loader: "exports-loader",
       options: {
        type: "commonjs",
        exports: ["file", "multiple helpers"],
       }
      }
    ]
  }
}