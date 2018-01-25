require("./db");
// Get the packages we need
import express from 'express';
import bodyParser from 'body-parser';
import config from './config';

// Create our Express application
var app = express();

app.use(bodyParser.json({limit: config.environment.limit_body_parser}));

// Add headers

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Accept', 'application/json');  
  next();
});

// Use environment defined port or 3100
var port = process.env.PORT || 3100;

// Register all our routes with /api
app.use('/api', require('./routers'));

// Start the server
module.exports = app.listen(port);