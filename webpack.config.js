var webpack = require('webpack');

module.exports =
{

  // Mappage for errors
  devtool: 'inline-source-map',

  // Compiled location
  entry:
  [
    'webpack-hot-middleware/client',
    "./app/App.js"
  ],

  // Output location
  output:
  {
    path: require('path').resolve('./public'),
    filename: "bundle.js",
    publicPath: '/'
  },

  // Plugins for HMRE
  plugins:
  [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  module:
  {
    loaders:
    [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query:
        { 
          presets: ['react', 'es2015', 'react-hmre']
        }
      }
    ]
  }

}
