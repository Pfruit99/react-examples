const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins

module.exports ={
    entry:'./src/index.js',
    
    //con esto se conoce donde saldra el archivo al ser creado
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    }, mode: 'development',
    resolve:{
        extensions:['.js','.jsx'],
    },
    module:{rules:[{ test: /\.(js|jsx)$/,  exclude: /node_modules/,
    use:{loader: 'babel-loader'}},{ test: /\.html$/, use:[{loader: 'html-loader'}]}
    ]},
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
    ],
};

