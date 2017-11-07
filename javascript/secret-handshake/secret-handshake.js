function SecretHandshake(input) {
	this.binaryInput = input.toString(2);
	this.result = [];
	if(this.binaryInput.length < 5){
		for (var i = 0;this.binaryInput.length<5; i++) {
			this.binaryInput = '0'+this.binaryInput;
		}
	}
	if (isNaN(this.binaryInput)) {throw new Error('Handshake must be a number');}
	this.commands = function () {
			for (var i = this.binaryInput.length - 1; i > 0; i--) {
			switch (i) {
				case 4: if (this.binaryInput[i] === '1') {this.result.push('wink');}
						break;
				case 3: if (this.binaryInput[i] === '1') {this.result.push('double blink');}
						break;
				case 2: if (this.binaryInput[i] === '1') {this.result.push('close your eyes');}
						break;
				case 1: if (this.binaryInput[i] === '1') {this.result.push('jump');}
						break;
				default: this.result.push('ERRO');
			}
			}
	if (this.binaryInput[0]==='1') {this.result = this.result.reverse();}
	return this.result;
	}
}

module.exports = SecretHandshake;