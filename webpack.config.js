const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); //Плагин для автоматического добавления ссылки на сгенерированный бандл
const {CleanWebpackPlugin} = require('clean-webpack-plugin'); //Плагин автоматической отчистки старых бандлов
const CopyWebpackPlugin = require('copy-webpack-plugin'); //Копирование файлов
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetPlugin = require('optimize-css-assets-webpack-plugin'); //плагин для минимизации css
const TerserWebpackPlugin = require('terser-webpack-plugin'); //Плагин для минимизации js
const VueLoaderPlugin = require('vue-loader/lib/plugin');

//const isDev = process.env.NODE_ENV === 'development';
const isDev = true;
const isProd = !isDev;

const optimization = () => {
    const config = {
        splitChunks: {
            chunks: "all"
        }
    };

    if (isProd) {
        config.minimizer = [
            new OptimizeCssAssetPlugin(),
            new TerserWebpackPlugin()
        ]
    }

    return config;
};

const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`;

const jsLoaders = () => {
    const loaders = [{
        loader: 'babel-loader',
        options: {
            presets: [
                '@babel/preset-env'
            ]
        }
    }];

  /*  if (isDev) {
        loaders.push('eslint-loader');
    }*/

    return loaders;
};

module.exports = {
    context: path.resolve(__dirname, 'dist'),
    mode: isDev ? 'development' : 'production',
    entry: path.resolve(__dirname, 'public/javascripts/main.js'),
    output: {
        filename: filename('js'),
        //filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    resolve: {
        extensions: ['.js', '.json', '.png'], //Расширения которые должен обрабатывать webpack (позволяет не дописывать расширения при импорте модулей и файлов)
        alias: { //Прописываем алиасы до путей импортируемых библиотек
            "@components": path.resolve(__dirname, 'public/javascripts/components'),
            "@Vue": path.resolve(__dirname, 'node_modules/vue/dist/vue.js')
        }
    },
    //Если используем одну и ту же библиотеку разных точках входа, указываем что бы она была вынесена в отдельный файл, т.к. иначе копия библиотеки будет в каждом скрипте
    optimization: optimization(),
    devtool: isDev ? 'source-map' : '', //включаем карты источников (возможность посмотреть не сжатые исходники)
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public/index.template.html'),
            inject: 'body',
            minify: {
                collapseWhitespace: isDev
            }
        }),
        new CleanWebpackPlugin(),
        new CopyWebpackPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, 'public/favicon.ico'),
                    to: path.resolve(__dirname, 'dist')
                }
            ]
        }),
        new MiniCssExtractPlugin({
            filename: filename('css')
        }),
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'] //Порядок важен (идет справа на лево)
                /*use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDev, //hot module replacement - позволяет обновлять стили при разработке без перезагрузки
                            reloadAll: true
                        }
                    },
                    'css-loader',
                    'less-loader'
                ]*/
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
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: jsLoaders()
            }
        ]
    }
};