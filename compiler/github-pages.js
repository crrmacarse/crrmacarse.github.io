import { join, resolve } from 'path'
import CompressionPlugin from 'compression-webpack-plugin'
import { rules, plugins } from './common'

// This will create a build for github pages
export default {
    mode: "production",
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
        path: join(process.cwd(), '/docs'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        publicPath: './' // @TODO: This temprarily solves the problem with github pages not loading the bundle
      },
    resolve: {
        modules: [
            'node_modules',
            resolve(__dirname, '..', 'src'),
          ],
        extensions: [".ts", ".tsx", '.js'],
    },
    module: {
        rules,
    },
    plugins: [
      ...plugins,
      new CompressionPlugin(),
  ],
};