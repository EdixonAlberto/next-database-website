const path = require('path');

module.exports = {
    entry: './app/index.js',
    output: {
        path: path.join(__dirname, './public/assets/javascript'),
        filename: 'main.min.js'
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