function Acronyms() {
	this.parse = function (str) {
		let result = '';
		let strwords = str.split(' ');
		if (str.indexOf(':') !== -1) {return str.substr(0,str.indexOf(':'));}
		for (var i = 0; i < strwords.length; i++) {
			result += strwords[i][0].toUpperCase();
		}
		return result;
	}
}

module.exports = Acronyms;