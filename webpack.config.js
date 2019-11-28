const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader"
            }
        }
       ]
    },
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      hot: true
    },
    plugins: [new HtmlWebpackPlugin({ template: './index.html',
          filename: './index.html'})]
}