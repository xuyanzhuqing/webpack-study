const path = require('path')

module.exports  = {
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // https://juejin.cn/post/7024320441342754846
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}