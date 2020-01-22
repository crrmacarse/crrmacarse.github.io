const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// @TODO Figure out how to do singular export
export const rules = [
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

export const plugins = [
    new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
],