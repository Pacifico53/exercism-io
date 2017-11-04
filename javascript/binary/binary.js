function Binary (input) {
	this.str = input;
	this.toDecimal = function() {
		let strDecimal = 0;
		let n = this.str.length-1;
		for (var i = 0; i < this.str.length && (this.str[i] === '0' || this.str[i] === '1'); i++) {
				strDecimal += Math.pow(2, n) * parseInt(this.str[i], 2);
				n--;
		}
		if (!checkBinary(this.str)) {strDecimal = 0;}
		return strDecimal;
	}
}

function checkBinary(str) {
	let r = true;
	for (var i = 0; i < str.length && r; i++) {
		if (str[i] !== '0' && str[i] !== '1') {r = false;}
	}
	return r;
}

module.exports = Binary, checkBinary;