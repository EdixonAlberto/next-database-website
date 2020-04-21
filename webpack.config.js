const path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        chunkFilename: '[name].chunk.js',
        path: path.join(__dirname, './public/assets/javascript'),
        publicPath: '/assets/javascript/',
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    }
};