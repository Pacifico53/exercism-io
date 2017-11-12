function Hamming() {
	this.compute = function (str1, str2) {
		let result = 0;
		if (str1.length !== str2.length) {throw new Error('DNA strands must be of equal length.');}
		for (var i = 0; i < str1.length; i++) {
			if (str1[i]!==str2[i]) {result++;}
		}
		return result;
	}
}

module.exports = Hamming;