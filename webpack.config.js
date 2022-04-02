const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const MiniCssExtracPlugin = require('mini-css-extract-plugin');

module.exports ={
    entry:'./src/index.js',
    
    //con esto se conoce donde saldra el archivo al ser creado
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath:'/'
    }, mode: 'development',
    resolve:{
        extensions:['.js','.jsx'],
        alias: {
            '@components': path.resolve(__dirname, 'src/components/'),
            '@containers': path.resolve(__dirname, 'src/containers/'),
            '@styles': path.resolve(__dirname, 'src/styles/'),
            '@icons': path.resolve(__dirname, 'src/asset/icons/'),
            '@logos': path.resolve(__dirname, 'src/asset/logos/'),
            '@hooks': path.resolve(__dirname, 'src/hooks/'),
            '@pages': path.resolve(__dirname,'src/pages/'),
            '@context': path.resolve(__dirname, 'src/context/'),
        }
    },
    module:{rules:[{ test: /\.(js|jsx)$/,  exclude: /node_modules/,
    use:{loader: 'babel-loader'}},{ test: /\.html$/, use:[{loader: 'html-loader'}]},
    
    {test: /\.(csss|scss)$/, use:["style-loader","css-loader","sass-loader"]}, {
      
        test: /\.(png|jpg|svg|jpeg|webp|gif)$/,
    /*aquí en test agregas la expresión regular para procesar los diferentes tipos de imagenes que tengas.*/
        type: 'asset/resource',
        generator: {
           filename: 'assets/pictures/[hash][ext]',
    /*aquí en filename pones la carpeta en donde quieres que se guarden tus imagenes (le agrego el [hash] para evitar problemas con el cache, además [ext] hace referencia a la extensión del archivo que se haya procesado).*/
        }
     },
    ]},
    plugins:[
        new HtmlWebpackPlugin({
            template: './public/index.html',
            filename: './index.html'
        }),
        new MiniCssExtracPlugin({
            filename:'[name].css'
        }),
    ],
    devServer:{
      historyApiFallback: true,
      allowedHosts:path.join(__dirname, 'dist',),
      compress: true,
      port:3005,
    }
};

