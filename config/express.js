var express = require('express');
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = require('./env/' + process.env.NODE_ENV + '.js');

module.exports = function(){
	var app = express();

	//enabling cors
	app.use(function(req, res, next) {
	  res.header("Access-Control-Allow-Origin", "*");
	  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	  next();
	});
	
	require('../routes/routes.js')(app);
	
	return app;
}
