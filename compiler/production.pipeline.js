const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

module.exports = {
  mode: 'production',
  devtool: 'source-map',
  entry: path.join(process.cwd(), '/src/index.tsx'),
  output: {
    path: path.join(process.cwd(), '/dist'),
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    publicPath: '/',
  },
  resolve: {
    modules: [
      'node_modules',
      path.resolve(__dirname, '..', 'src'),
    ],
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      assets: path.resolve(__dirname, '..', 'src/assets/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: 'eslint-loader',
      },
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        loader: 'source-map-loader',
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico|pdf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: '[contentHash].[hash].[ext]',
              outputPath: 'assets',
              publicPath: 'assets',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.90],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 80,
                enabled: true,
              },
            },
          },
        ],
      },
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(scss|css)$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin.CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.join(process.cwd(), '/src/index.html'),
      inject: 'body',
      favicon: path.join(process.cwd(), './src/assets/ico/favicon.ico'),
    }),
    new CompressionPlugin(),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: '[contentHash].[hash].css',
      chunkFilename: '[contentHash].[hash].css',
    }),
  ],
  optimization: {
    minimizer: [new TerserPlugin({
      terserOptions: {
        safari10: true,
      },
    })],
  },
};
