const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Caching',
    }),
  ],
  optimization: {
    moduleIds: 'deterministic',
    runtimeChunk: 'single',
    // https://webpack.docschina.org/plugins/split-chunks-plugin/
    splitChunks: {
      minSize: 20, // 超过多少byte开始分包, 默认 2000 byte
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
        // 可以拆分多个模块
        // lib: {
        //   test: /[\\/]lib\.js/,
        //   name: 'libs',
        //   chunks: 'all',
        // },
      },
    },
  }
}