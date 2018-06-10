const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  devtool:
    process.env.NODE_ENV === 'production'
      ? 'source-map'
      : 'cheap-module-eval-source-map',
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
    'webpack/hot/only-dev-server',
    path.join(__dirname, 'client', 'index.jsx')
  ],
  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.join(__dirname, 'dist', process.env.CORDOVA ? 'cordova' : 'web'),
    publicPath: process.env.CORDOVA ? '' : '/'
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'client'),
      '~features': path.resolve(__dirname, 'client', 'features'),
      '~components': path.resolve(__dirname, 'client', 'components'),
      css: path.resolve(__dirname, 'client', 'assets', 'css')
    },
    extensions: ['.js', '.jsx', '.json', '.css', '.scss']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development'),
        CORDOVA: JSON.stringify(process.env.CORDOVA || false)
      }
    }),
    new HtmlWebpackPlugin({
      template: path.join(
        __dirname,
        'client',
        'templates',
        process.env.CORDOVA ? 'index.cordova.ejs' : 'index.ejs'
      ),
      filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: process.env.NODE_ENV === 'production'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: /client/,
        use: [
          'react-hot-loader/webpack',
          {
            loader: 'babel-loader',
            query: {
              presets: [
                ['env', { loose: true, modules: false }],
                'react',
                'stage-0'
              ],
              plugins: [
                'syntax-dynamic-import',
                'transform-decorators-legacy',
                'transform-class-properties'
              ]
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              importLoaders: true,
              modules: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                './node_modules'
                // './node_modules/inuitcss'
              ]
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        include: /client\/assets\/fonts/,
        loader: 'file-loader?name=client/assets/fonts/[name].[ext]'
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader'
      },

      {
        test: /\.(png|jp(e*)g)$/,
        loader: 'file-loader'
      }
    ]
  }
}
