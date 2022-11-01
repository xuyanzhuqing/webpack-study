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
    // https://webpack.docschina.org/guides/asset-modules/
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
        exclude: /\.min\.svg$/
        // type: 'asset/resource',
      },
      {
        test: /\.min\.svg$/,
        type: 'asset/inline',
        generator: {
          dataUrl: content => {
            return svgToMiniDataURI(content.toString()) // 自定义 svg 压缩算法
          }
        }
      },
      {
        test: /\.txt$/,
        type: 'asset', //根据条件在resource/inline中切换
        parser: {
          dataUrlCondition: {
            maxSize: 4 // byte default 8 * 1024 byte 超过多少字符就单独打包
          }
          // dataUrlCondition: (source, { filename, module }) => {
          //   const content = source.toString();
          //   console.info(content)
          //   return !content.includes('welcome');
          // },
        }
      },
      {
        test: /\.ya?ml$/,
        use: 'yaml-loader'
      },
      {
        test: /\.css$/,
        oneOf: [ // 只会采用
          {
            resourceQuery: /inline/, // foo.css?inline  内联加载
            use: ['style-loader', 'css-loader'],
          },
          {
            resourceQuery: /external/, // foo.css?external 外链加载
            use: [
              { loader: 'style-loader', options: { injectType: 'linkTag', attributes: { id: 'test' } } },
              { loader: 'file-loader', options: { name: '[path][name].[ext]?[contenthash]' } }
            ]
          },
        ],
      },
    ]
  }
}