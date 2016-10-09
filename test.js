'use strict'

var http = require('http');
var port = 9999;
var gmCaptcha = require('./index.js');

http.createServer(function(req,res){
	var options = {
		width: 100,
		height: 50,
		text: '1024'
	}
	// Other configurations using default parameters
	var captcha  = new gmCaptcha(options);
	var gmObj = captcha.generator(); // return a gm object
	captcha.gmBuffer(gmObj, 'PNG', function (buffer) {
		// do something with buffer
		res.end(buffer);
	});

}).listen(port);
console.log('listen in port' + port,'http://localhost:' + port);
