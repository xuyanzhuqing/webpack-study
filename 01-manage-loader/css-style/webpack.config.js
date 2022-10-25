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
        test: /\.css$/i,
        exclude: /\.(lazy|link)\.css$/i,
        use: [
          // https://juejin.cn/post/7024320441342754846
          // { loader: 'style-loader', options: { injectType: 'styleTag' } }, // 单个内联加载
          { loader: 'style-loader', options: { injectType: 'singletonStyleTag' } }, // 合并一处内联加载
          'css-loader'
        ]
      },
      // {
      //   test: /\.css$/i,
      //   exclude: /\.(lazy|link)\.css$/i,
      //   use: [
      //     {
      //       loader: "style-loader",
      //     },
      //     {
      //       loader: "css-loader",
      //       options: {
      //         sourceMap: true, // 浏览器源码显示
      //         modules: {
      //           namedExport: true,
      //         },
      //       },
      //     },
      //   ]
      // },
      {
        test: /\.link\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'linkTag', attributes: { id: 'test' } } },
          { loader: 'file-loader', options: { name: '[path][name].[ext]?[contenthash]' } }
        ]
      },
      {
        test: /\.lazy\.css$/i,
        use: [
          { loader: 'style-loader', options: { injectType: 'lazyStyleTag' } },
          'css-loader'
        ]
      }
    ]
  }
}