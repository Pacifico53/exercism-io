function Pangram(input) {
	this.string = input.toLowerCase();
	let abc = 'abcdefghijklmnopqrstuvwxyz';
	let r = true;
	this.isPangram = function(str) {
		for (var i = 0; i < abc.length && r; i++) {
			if (!this.string.includes(abc[i])) {r = false;}
		}
	return r;
	}
}

module.exports = Pangram;