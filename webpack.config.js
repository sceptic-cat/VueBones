const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Плагин для автоматического добавления ссылки на сгенерированный бандл
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //Плагин автоматической отчистки старых бандлов

module.exports = {
    mode: 'development', //TODO:: продумать как переключаться на бой
    entry: './public/javascripts/main.js',
    output: {
        filename: '[name].[contenthash].js',
        path: path.resolve(__dirname, 'public/javascripts')
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './views/index.ejs'
        }),
        new CleanWebpackPlugin()
    ]
}