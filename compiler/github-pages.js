const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// import { rules, plugins } from './common'

// This will create a build for github pages
module.exports = {
    mode: "production",
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
        filename: '[name].[hash].bundle.js',
        path: path.join(process.cwd(), '/docs'),
        publicPath: './' // @TODO: This temprarily solves the problem with github pages not loading the bundle
      },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, '..', 'src'),
          ],
        extensions: [".ts", ".tsx", '.js'],
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader"
                    }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
              },
            {
                enforce: "pre",
                test: /\.js$/,
                loader: "source-map-loader"
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg|ico|pdf)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                    },
                  },
                ],
              },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '..', 'src/index.html'), 
        }),
        new CleanWebpackPlugin(),
    ],
};