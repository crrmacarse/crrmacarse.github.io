var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PORT = process.env.PORT || 3333

const devServer = () => ({
    contentBase: path.join(__dirname, './dist'),
    writeToDisk: true,
    compress: true,
    port: PORT,
})

module.exports = {
    mode: "development",
    devtool: "source-map",
    entry: "./src/index.tsx",
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
      },
    resolve: {
        modules: [
            'node_modules',
            path.resolve(__dirname, 'src'),
          ],
        extensions: [".ts", ".tsx", '.js'],
    },
    // @TODO: Should add babel-lodaer for js support
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
        ]
    },
    // When importing a module whose path matches one of the following, just
    // assume a corresponding global variable exists and use that instead.
    // This is important because it allows us to avoid bundling all of our
    // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
    // Webpack dev server config
    devServer: devServer(),
    // This will create a html template File
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ],
};