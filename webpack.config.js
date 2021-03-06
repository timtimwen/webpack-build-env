const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        // hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loder',
                    'css-loaer'
                ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'webpack environment demo'
        }),
        new webpack.HotModuleReplacementPlugin(),
        // new UglifyJSPlugin()
    ],
    output: {
        filename: '[name]-[hash:8].js',
        path: path.resolve(__dirname, 'dist')
    },
};