var path = require('path')
var webpack = require('webpack')


module.exports = {
  entry: ['./static/scripts/main.js'],
  output: {
    path: path.join(__dirname, 'static/dist/scripts/'),
    filename: 'bundle.js',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      {
        extensions: ['', '.js', '.jsx'],
        loaders: ['babel'],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  }
}