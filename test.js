'use strict'

var gmCaptcha = require('./index.js');

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
	console.log(buffer);
	return buffer
});
