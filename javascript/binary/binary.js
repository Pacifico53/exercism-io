function Binary (input) {
	this.str = input;
	this.toDecimal = function() {
		if (!/^[01]+$/.test(this.str)){return 0;}
		let strDecimal = 0;
		let n = this.str.length-1;
		for (var i = 0; i < this.str.length; i++) {
				strDecimal += Math.pow(2, n) * Number(this.str[i]);
				n--;
		}
		return strDecimal;
	}
}

module.exports = Binary;