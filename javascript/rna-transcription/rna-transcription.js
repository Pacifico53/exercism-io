function DnaTranscriber() {
	this.toRna = function(input) {
		this.value = input;
		let result = [];
		for (var i = 0; i!==this.value.length; i++) {
			switch (this.value[i]) {
				case 'C':
					result = result + 'G';
					break;
				case 'G':
					result = result + 'C';
					break;
				case 'T':
					result = result + 'A';
					break;
				case 'A':
					result = result + 'U';
					break;
				default:
					throw new Error('Invalid input');
			}
		}
		return result;
	}
};

module.exports = DnaTranscriber;

// ATCA 