import { join } from 'path'
import CompressionPlugin from 'compression-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { entry, moduleResolver, rules, plugins } from './common'

// This will create a build for github pages
export default {
    mode: "production",
    devtool: "source-map",
    entry,
    output: {
        path: join(process.cwd(), '/docs'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        publicPath: './' // @TODO: This temprarily solves the problem with github pages not loading the bundle
      },
    resolve: moduleResolver,
    module: {
      rules: [
        ...rules,
        {
          test: /\.(scss|css)$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', 'postcss-loader'],
        },
      ],
    },
    plugins: [
      ...plugins,
      new CompressionPlugin(),
      new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: '[name].[contentHash].css',
        chunkFilename: '[id].[contentHash].css',
      }),
  ],
};