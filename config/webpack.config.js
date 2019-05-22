// Webpack uses this to work with directories
const path = require('path');
const BASE_DIR = path.join(__dirname, '../');
const SRC_DIR = path.join(BASE_DIR, 'src');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {

    // Path to your entry point. From this file Webpack will begin his work
    entry: {
        main : path.join(SRC_DIR, './js/index.js')
    },

    // Path and filename of your result bundle.
    // Webpack will bundle all JavaScript into this file
    output: {
        path: path.resolve(BASE_DIR, 'dist'),
        filename: '[name].[hash].js'
    },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack 4 Starter',
            template: path.join(SRC_DIR, './index.html'),
            inject: false,
            hash: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        })
    ],

    module: {
        rules: [
            {
                test : /\.(js|jsx)$/,
                loader : 'babel-loader',
                exclude: /node_modules/,
            },
        ]
    },

    devServer: {
        contentBase: SRC_DIR,
        historyApiFallback: true,
        hot: true,
        port: 8080,
        noInfo: false
    },

    // Default mode for Webpack is production.
    // Depending on mode Webpack will apply different things
    // on final bundle. For now we don't need production's JavaScript
    // minifying and other thing so let's set mode to development
    mode: 'development'
};
