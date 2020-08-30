const path = require('path');
//const HtmlWebpackPlugin = require('html-webpack-plugin'); //Плагин для автоматического добавления ссылки на сгенерированный бандл
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //Плагин автоматической отчистки старых бандлов

module.exports = {
    context: path.resolve(__dirname, 'public'),
    mode: 'development', //TODO:: продумать как переключаться на бой
    entry: './public/javascripts/main.js',
    output: {
        //filename: '[name].[contenthash].js',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/javascripts')
    },
    plugins: [
      /*  new HtmlWebpackPlugin({
            template: '!!ejs-compiled-loader!./views/index.ejs',
            inject: 'body'
        }),*/
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
}