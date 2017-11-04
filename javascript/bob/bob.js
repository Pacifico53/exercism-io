function Bob() {
	this.hey = function (str) {
		if (isNothing(str)) {
			return 'Fine. Be that way!';
		} else {
			if (isALLCAPS(str)) {
				return 'Whoa, chill out!';
			} else {
				if (isQuestion(str)) {
					return 'Sure.';
				} else {
					return 'Whatever.'
				}
			}
		}
	}
}

function isQuestion(str) {
	this.newStr = str.trim();		//tira os espaços no fim da string
	if (this.newStr.indexOf('?') === (this.newStr.length - 1)){ 		//verifica se o '?' esta no fim da str
		return true;
	} else {
		return false;
	}
}

function isALLCAPS(str) {
	this.newStr = str.trim();		//tira os espaços no fim da string
	let n = true;
	for (var i = 0; i < this.newStr.length && n; i++) {			//enquanto o n é true, isto nao para (enquanto as letras sao maiusculas), so para no fim da str
		if ((this.newStr[i] !== this.newStr[i].toUpperCase()) && (this.newStr[i] !== ' ')){			//verifica se a char é uppercase, e que nao é um espaço
			n = false;
		}
	}
	return n;
}

function isNothing(str) {
	let n = true;
	for (var i = 0; i < str.length && n; i++) { 		//enquanto a str é um dos caracteres que nao tem interesse, o loop continua
		if (str[i] !== ' ' && str[i] !== '\n' && str[i] !== '\t' && str[i] !== '\r') {
			n = false;
		}
	}
	return n;
}



module.exports = Bob, isQuestion, isALLCAPS, isNothing;