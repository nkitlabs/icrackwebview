const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
   entry: './main.js',
   output: {
      path: path.join(__dirname, '/bundle'),
      filename: 'index_bundle.js'
   },
   devServer: {
      inline: true,
      port: 8001
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
               presets: [
                  "@babel/preset-env", 
                  "@babel/preset-react"
               ]
            }
         },
         {
            test: /\.css$/,
            loaders: [
              'style-loader',
              'css-loader'
            ]
         },
         {
            test: /\.less$/,
            // exclude: /node_modules/,
            use: [
               {
                  loader: 'style-loader',
               },
               {
                  loader: 'css-loader',
               }, 
               {
                  loader: 'less-loader',
                  options: {
                     javascriptEnabled: true
                  }
               }
            ],
         }
      ]
   },
   plugins:[
      new HtmlWebpackPlugin({
         template: './index.html'
      })
   ]
}