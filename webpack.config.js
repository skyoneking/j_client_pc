const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const resolve = (...args) => path.resolve(__dirname, ...args);

module.exports = {
    mode: 'development',
    entry: resolve('./src/index.js'),
    output: {
        filename: '[name].[chunkhash].js',
        path: resolve('./dist'),
    },
    resolve: {
        extensions: ['.jsx', '.js', '.json'],
    },
    module: {
        rules: [{ test: /\.jsx?$/, use: 'babel-loader' }],
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({ template: resolve('./public/index.html') }),
        new webpack.HashedModuleIdsPlugin({context: __dirname}), // id替换为相关路径
    ],
    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },
    },
    devServer: {
        contentBase: resolve('./public'),
        compress: true,
        port: 3010,
    },
};
