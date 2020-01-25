import CompressionPlugin from 'compression-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import {
  entry, output, moduleResolver, rules, plugins,
} from './common';

export default {
  mode: 'production',
  devtool: 'source-map',
  entry,
  output,
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
