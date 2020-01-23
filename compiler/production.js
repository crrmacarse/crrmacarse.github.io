import { join } from 'path';
import CompressionPlugin from 'compression-webpack-plugin'
import ExtractPlugin from 'mini-css-extract-plugin';
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
          use: [ExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    plugins: [
        ...plugins,
        new ExtractPlugin({
          // Options similar to the same options in webpackOptions.output
          // both options are optional
          filename: '[name].[hash].css',
          chunkFilename: '[name].[hash].css',
          ignoreOrder: false, // Enable to remove warnings about conflicting order
        }),
        new CompressionPlugin(),
    ],
};