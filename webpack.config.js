const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',

    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                exclude: "/node_modules/",
                test: /\.css$/,
                use: [{
                    loader: 'style-loader'},
                    {
                        loader: 'css-loader'
                    }],
            },
            {
                exclude: "/node_modules/",
                test: /\.png$/,
                use: ['file-loader'],
            },
        ]
    }

}