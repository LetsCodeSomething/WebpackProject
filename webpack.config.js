const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'WebpackProject',
            template: path.resolve(__dirname, './src/template.html'),
            filename: 'index.html'
        }),
    ],

    mode: 'production' //Кидаем всё в продакшен, потому что да
}