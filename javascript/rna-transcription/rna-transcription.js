//
//BASICAMENTE DONE, FALTA MUDAR O ERRO PARA O QUE ELES QUEREM I GUESS
//

function Error(errorMessage) {
	this.error = errorMessage;
	return this.error;
}

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