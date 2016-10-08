
module.exports = function (length) {
	length = length || 4;
	var output = "";
	while (length-- > 0) {

		output += getRandomDigit();
	}
	return output;
}
function getRandomDigit() {
	return Math.floor((Math.random() * 9) + 1);
}