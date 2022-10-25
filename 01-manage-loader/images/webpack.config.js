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
          { loader: 'style-loader', options: { injectType: 'singletonStyleTag' } },
          'css-loader'
        ]
      },
      {
        test: /\.(png|jif|jpeg|jpg||svg|)$/i,
        type: 'asset/resource'
      }
    ]
  }
}