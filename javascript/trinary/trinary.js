function Trinary (input) {
	this.str = input;
	this.toDecimal = function() {
		if (!checkTrinary(this.str)) {return 0;}
		let strDecimal = 0;
		let n = this.str.length-1;
		for (var i = 0; i < this.str.length; i++) {
				strDecimal += Math.pow(3, n) * Number(this.str[i])
				n--;
		}
		return strDecimal;
	}
}

function checkTrinary(str) {
	let r = true;
	for (var i = 0; i < str.length && r; i++) {
		r = /[012]/.test(str[i])
	}
	return r;
}

module.exports = Trinary, checkTrinary;