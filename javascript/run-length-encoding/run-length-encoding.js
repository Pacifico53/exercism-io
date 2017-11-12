//TODO: DA ERRO NUMA STR COM VARIOS ESPAÇOS

function RLE() {
	this.encode = function (str) {
		let result = '';
		let count = 0;
		for (var i = 0; i < str.length; i++) {
			for (var j = i; str[j]===str[i]; j++) {
				count++;
			}
			if (count===1) {result += str[i];}else{result += count.toString() + str[i];}
			count = 0;
			i = j-1;
		}
		return result;
	}
	this.decode = function (str) {
		let result = '';
		let count = 0;
		for (var i = 0; i < str.length; i++) {
			if (!isNaN(str[i]) && str[i]!==' ') {
				if(!isNaN(str[i+1]) && str[i+1]!==' '){count = Number(str[i]+str[i+1]);i++;}else{count = Number(str[i]);}
				for (var j = 0; j < count; j++) {
					result+=str[i+1];
				}
				i++;
				count = 0;
			}else{result+=str[i];}
		}
		return result;
	}
}

module.exports = new RLE;