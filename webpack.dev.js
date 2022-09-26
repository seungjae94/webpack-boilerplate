const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        proxy: {
            '/' : {
                target: 'http://localhost:3000',
                changeOrigin: true,
            }
        },
    },
    performance: {
        hints: false
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: './app.html'
        // }),
    ]
});