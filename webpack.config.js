let webpack = require('webpack');
let path = require('path');

const SRC_DIR = path.resolve(__dirname,'src/js/');
const DEPLOY_DIR = path.resolve(__dirname,'public/js/');

let config = {
    entry: SRC_DIR + '/app.js',
    output: {
        path: DEPLOY_DIR,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: SRC_DIR,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            }
        ]
    }
};

module.exports = config;