import { join } from 'path';
import CompressionPlugin from 'compression-webpack-plugin'
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { entry, moduleResolver, rules, plugins } from './common'

export default {
    mode: "production",
    devtool: "source-map",
    entry: entry,
    output: {
        path: join(process.cwd(), '/dist'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        publicPath: '/'
      },
    resolve: moduleResolver,
    module: {
      rules: [
        ...rules,
        {
          test: /\.(scss|css)$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader'],
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