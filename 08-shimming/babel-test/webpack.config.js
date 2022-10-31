const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    polyfills: './src/polyfills.js',
    index: {
      import: './src/index.js',
      dependOn: 'dynamic'
    },
    dynamic: './src/dynamic.js', // 动态加载 polyfills
  },
  output: {
    filename: '[name].bundle.js',
    path: path.join(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: '管理输出',
      template: 'index.html',
      excludeChunks: ['polyfills'] // https://www.cnblogs.com/plBlog/p/13901351.html
   })
  ]
}