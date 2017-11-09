function Pangram(input) {
	this.string = input.toLowerCase();
	let abc = 'abcdefghijklmnopqrstuvwxyz';
	let r = true;
	this.isPangram = function(str) {
		for (var i = 0; i < abc.length && r; i++) {
			r = this.string.includes(abc[i]);
		}
	return r;
	}
}

module.exports = Pangram;