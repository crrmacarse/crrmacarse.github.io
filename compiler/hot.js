import { join, resolve } from 'path'
import { rules, plugins } from './common'

const PORT = process.env.PORT || 3333

const devServer = () => ({
    hot: true,
    contentBase: join(process.cwd(), '/dist'),
    writeToDisk: true,
    historyApiFallback: true,
    compress: true,
    port: PORT,
    overlay: {
        errors: true,
        warnings: true,
    },
})

export default {
    mode: "development",
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
    plugins,
    devServer: devServer(),
};