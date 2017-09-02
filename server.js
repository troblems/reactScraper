// Dependencies
var path = require('path');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var mongoose = require('mongoose');

// Database config
mongoose.connect('mongodb://localhost/nytreact');
var db = mongoose.connection;

// Error handling
db.on('error', function(err)
{

});

// webpack stuff
if (process.env.NODE_ENV === 'production')
{
  var compression = require('compression');
  app.use(compression());
} else
{
  var config = require('./webpack.config.dev');
  var webpack = require('webpack');
  var compiler = webpack(config);
  var webpackDevMiddleware = require('webpack-dev-middleware');
  var webpackHotMiddleware = require('webpack-hot-middleware');
  app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
  app.use(webpackHotMiddleware(compiler));
}

// Express
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(express.static('public'));

// Main route
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, './public', 'index.html'))
});

// Saved articles
app.get('/api/saved', require('./routes/getSaved'));

// Save button
app.post('/api/saved', require('./routes/postSaved'));

// Delete button
app.delete('/api/saved/:id', require('./routes/deleteSaved'));

// Port 3000 or other avaiable as needed
var PORT = process.env.PORT || 3000;

//Port or error
app.listen(PORT, function(error) {
  if (error) throw error;
  console.log('App running on port ' + PORT);
});
