const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack-numbers.js',
    globalObject: 'this', // https://webpack.docschina.org/configuration/output#outputglobalobject
    // library: "webpackNumbers", // only web
    library: { // can be used by web, node, cmd, umd
      name: 'webpackNumbers',
      type: 'umd'
    },
    clean: true
  },
  externals: { // 外部化依赖
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_',
    },
  },
};