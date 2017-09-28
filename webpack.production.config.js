const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleExtHtmlWebpackPlugin = require('style-ext-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');
const webpack = require('webpack');
const path = require('path');
const config = require('./env.config.js');

module.exports = {
  // devtool: '#inline-source-map',
  context: path.resolve(__dirname, 'src'),
  entry: [
    './js/index.jsx',
    './styles/main.scss'
  ],
  output: {
    // filename: '[name].js',
    filename: 'bundle.js',
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
        use: 'babel-loader?presets[]=es2015,presets[]=react'
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [{ loader: 'css-loader', options: { minimize: true } }, { loader: 'postcss-loader', options: { config: { path: './postcss.config.js' } } }, 'sass-loader']
        })
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
        'NODE_ENV': JSON.stringify('production'),
        'TWITCH_CLIENT_ID': JSON.stringify(config.TWITCH_CLIENT_ID || 'NO ID')
      }
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
      minify: {},
      chunks: []
    }),
    new ExtractTextPlugin('styles.css'),
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
    }),
    new FaviconsWebpackPlugin({
      logo: './img/favicon.png',
      prefix: '/',
      icons: {
        android: false,
        appleIcon: false,
        appleStartup: false,
        coast: false,
        favicons: true,
        firefox: false,
        opengraph: false,
        twitter: false,
        yandex: false,
        windows: false
      }
    }),
    new StyleExtHtmlWebpackPlugin(),
    // new StaticSiteGeneratorPlugin({
    //   paths: ['/'],
    //   globals: {
    //     window: {}
    //   }
    // }),
    new webpack.optimize.UglifyJsPlugin({ output: { ascii_only: true } })
  ]
};