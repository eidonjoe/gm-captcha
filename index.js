
/**
 * Module dependencies.
 */

var gm = require('gm');
var generateCode = require('./lib/generateCode.js');
var getColor = require('./lib/getColors.js');
var randomBetween = require('./lib/randomBetween.js');
var path = require('path');
var rootPath = path.join(__dirname,'./font/DroidSansFallback.ttf');

/**
 * Constructor.
 */

function Gm(options) {
	// defaults
	this.options = options || {};
	this.options.colorCount = this.options.colorCount || 20
	this.options.textLength = this.options.textLength || 4

	if (!this.options.symbol) this.options.symbol = '';
	if (!this.options.width) this.options.width = 100;
	if (!this.options.height) this.options.height = 50;
	if (!this.options.background) this.options.background = '#fff';
	if (!this.options.colors) this.options.colors = getColor(this.options.colorCount);
	if (!this.options.text) this.options.text = generateCode(this.options.textLength);
	if (!this.options.maxTextWidth) this.options.maxTextWidth = 3;
	if (!this.options.textColorCount) this.options.textColorCount = 20;
	if (!this.options.textColor) this.options.textColor = null;
	if (!this.options.textIndent) this.options.textIndent = 0;
	if (!this.options.wordSpacing) this.options.wordSpacing = 25;
	if (!this.options.maxSwirl && this.options.maxSwirl != 0) this.options.maxSwirl = 20;
	if (!this.options.maxShear && this.options.maxShear != 0) this.options.maxShear = 30;
	if (!this.options.lineCount) this.options.lineCount = 20;
	if (!this.options.lineWidth) this.options.lineWidth = 1;
	if (!this.options.pointCount) this.options.pointCount = 500;
	if (!this.options.font) this.options.font = rootPath; // 不识别绝对路径
	if (!this.options.fontSize) this.options.fontSize = 50;
}
Gm.prototype.init = function () {
	this.gm = gm(this.options.width, this.options.height, this.options.background)
			.in({width: this.options.width,height: this.options.height});

}
Gm.prototype.drawText = function () {
	for (var i = 0; i < this.options.text.length; i++) {
		this.options.symbol = randomBetween(0,10) > 5 ? '' : '-';
		this.gm
		.stroke(this.options.textColor || this.options.colors[randomBetween(0,this.options.textColorCount)].css, randomBetween(1,this.options.maxTextWidth))
		.drawText(
			parseInt(i * this.options.wordSpacing), 
			this.options.fontSize, this.options.text[i]
		)
		.font(this.options.font)
		.fontSize(this.options.fontSize)
		.swirl(this.options.symbol + randomBetween(0,this.options.maxSwirl))
		.shear(
			this.options.symbol + randomBetween(0,this.options.maxShear),
			this.options.symbol + randomBetween(0,this.options.maxShear)
		)
	}
	return this
}
Gm.prototype.drawLine = function () {
	for (var i = 0; i < this.options.lineCount; i++) {
		this.gm
		.stroke(this.options.colors[randomBetween(0,this.options.colors.length)].css, this.options.lineWidth)
		.drawLine(
			randomBetween(0, 2 * this.options.width),
			randomBetween(0, 2 * this.options.width),
			randomBetween(0, 2 * this.options.width),
			randomBetween(0, 2 * this.options.width))
	}
	return this
}
Gm.prototype.drawPoint = function () {
	for (var i = 0; i < this.options.pointCount; i++) {
		this.gm
		.stroke(this.options.colors[randomBetween(0,this.options.colors.length)].css, 1)
		.drawPoint(
			randomBetween(0, 2 * this.options.width),
			randomBetween(0, 2 * this.options.width))
	}
	return this
}
Gm.prototype.gmBuffer = function (gm, bufferType, cb) {
	gm.toBuffer(bufferType,function (err, buffer) {
		return cb(buffer);
	})
}
Gm.prototype.gmFile = function (gm, path, filename, fileType) {
	gm.write(path + filename + '.' + fileType, function (err) {
		console.log(err);
		if (err) return err;
	})
}
Gm.prototype.generator = function (arr) {
	this.init();
	var executeArr = arr;
	if (Object.prototype.toString.call(executeArr) != "[object Array]") {
		executeArr = ['line','text','line','point'];
	}
	for (var i = 0; i < executeArr.length; i++) {
		switch (executeArr[i]) {
			case 'text':
				this.drawText();
				break;
			case 'line':
				this.drawLine();
				break;
			case 'point':
				this.drawPoint();
				break;
			default:
				this.drawPoint();
				break;
		}
	};
	this.gm.resize(this.options.width, this.options.height, "!"); // necessary!
	return this.gm;
}
module.exports = Gm;
