const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const svgToMiniDataURI = require('mini-svg-data-uri')

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: 'index.html'
   })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpg)$/,
        type: 'asset/resource', // 单独文件打包
        generator: {
          filename: 'static/images/[hash][ext][query]'
        }
      },
      {
        test: /\.svg$/,
        type: 'asset/inline', // 打包在 bundle 中
        // type: 'asset/resource',
      }
    ]
  }
}