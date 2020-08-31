const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Плагин для автоматического добавления ссылки на сгенерированный бандл
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //Плагин автоматической отчистки старых бандлов

module.exports = {
    context: path.resolve(__dirname, 'dist'),
    mode: 'development', //TODO:: продумать как переключаться на бой
    entry: path.resolve(__dirname, 'public/javascripts/main.js'),
    output: {
        filename: '[name].[contenthash].js',
        //filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.template.html'),
            inject: 'body'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //Порядок важен (идет справа на лево)
            },
            {
                test: /\.(png|jpg|gif)$/i,
                use: ['file-loader']
            },
            {
                test: /\.(ttf|woff|woff2|eot)$/i,
                use: ['file-loader']
            },
            {
                test: /\.xml$/i,
                use: ['xml-loader']
            },
            {
                test: /\.csv$/i,
                use: ['csv-loader']
            }
        ]
    }
}