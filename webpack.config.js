const path = require('path');

module.exports = {
    entry: {
        index: './src/index.js'
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|es6)$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                ],
            },
            {
                test: /\.(s[a|c]ss)$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' },
                    { loader: 'sass-loader' },
                ],
            },
            {
                test: /\.(png|gif|jpg|jpeg)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'static/[name][ext]',
                },
            },
        ]
    },
    output: {
        path: path.resolve(__dirname)+'/public/assets',
        publicPath: 'assets/',
        filename: "[name].bundle.js",
    }
};
