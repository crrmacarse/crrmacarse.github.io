import { join, resolve } from 'path';
import CompressionPlugin from 'compression-webpack-plugin'
import { rules, plugins } from './common'

export default {
    mode: "production",
    devtool: "source-map",
    entry: join(process.cwd(), '/src/index.tsx'),
    output: {
        path: join(process.cwd(), '/dist'),
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        publicPath: '/'
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