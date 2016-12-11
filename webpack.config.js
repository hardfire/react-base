const webpack = require('webpack')

const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV.toLowerCase() : 'development';

module.exports = {
  entry: ['whatwg-fetch','./app/client.js'],
  output: {
    path: './public/bundle',
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(NODE_ENV)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        //http://stackoverflow.com/questions/35266706/webpack-error-cannot-define-query-and-multiple-loaders-in-loaders-list
        loaders: ['babel?' + JSON.stringify({
          presets: ['es2015', 'react']
        })]
      }
    ]
  }
}

console.info('webpack', `${NODE_ENV.toUpperCase()} mode`);
