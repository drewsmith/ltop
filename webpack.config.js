var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: './js/game.js',
    output: { path: __dirname, filename: 'bundle.js' },
    module: {
        loaders: [{
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015']
            }
        }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
        }]
    },
};