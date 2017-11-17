function Binary (input) {
	this.str = input;
	this.toDecimal = function() {
		if (!checkBinary(this.str)) {return 0}
		let strDecimal = 0;
		let n = this.str.length-1;
		for (var i = 0; i < this.str.length; i++) {
				strDecimal += Math.pow(2, n) * Number(this.str[i]);
				n--;
		}
		return strDecimal;
	}
}

function checkBinary(str) {
	let r = true;
	for (var i = 0; i < str.length && r; i++) {
		r = /[01]/.test(str[i]);
	}
	return r;
}

module.exports = Binary, checkBinary;