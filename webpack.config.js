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
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
};