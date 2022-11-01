const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports =  (env) => {
  const ASSET_PATH = env.ASSET_PATH || '/'
  return {
    entry: './src/index.js',
    output: {
      publicPath: ASSET_PATH,
      filename: 'bundle.js',
      path: path.join(__dirname, 'dist'),
      clean: true
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: '管理输出',
        template: 'index.html'
    })
    ]
  }
}