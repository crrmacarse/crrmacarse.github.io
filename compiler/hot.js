const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
// const { rules, plugins } = require('./common')

const PORT = process.env.PORT || 3333

const devServer = () => ({
    contentBase: path.join(__dirname, '..', './dist'),
    writeToDisk: true,
    historyApiFallback: true,
    compress: true,
    port: PORT,
    overlay: {
        errors: true,
        warnings: true,
    },
})

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, '..', '/dist'),
        filename: '[name].[hash].bundle.js',
        publicPath: '/'
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
    devServer: devServer(),
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),
        new CleanWebpackPlugin(),
    ],
};