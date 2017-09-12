const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: '#cheap-module-eval-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    './js/index.jsx',
    './styles/main.scss'
  ],
  output: {
    path: path.resolve(__dirname, 'dist')
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    modules: ['node_modules']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['react-hot-loader', 'babel-loader?presets[]=es2015,presets[]=react']
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ['style-loader', { loader: 'css-loader', options: { minimize: true } }, { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' } } }, 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[path][name]-[hash].[ext]',
          {
            loader: 'image-webpack-loader',
            query: {
              progressive: true,
              gifsicle: {
                interlaced: false,
                colors: 256,
                optimizationLevel: 3,
              },
              optipng: {
                interlaced: false,
                optimizationLevel: 7,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              }
            }
          }
        ]
      },
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {},
      chunks: []
    }),
    new FaviconsWebpackPlugin({
      logo: './img/favicon.png',
      prefix: 'icons/',
      icons: {
        android: true,
        appleIcon: true,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: true,
        opengraph: true,
        twitter: true,
        yandex: false,
        windows: true
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    host: '0.0.0.0',
    port: 8080,
    historyApiFallback: true
  }
};