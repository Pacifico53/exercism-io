function pigLatin(){
	this.translate = function(str) {
		let result = '';
		let strwords = str.split(' ')
		for(var i = 0;i<strwords.length;i++){
			if(/^a|^e|^i|^o|^u/i.test(strwords[i][0])){
				result += strwords[i];
			} else {
				if(/^ch|^qu|^th/i.test(strwords[i]) && !/^thr/i.test(strwords[i])){
					result += strwords[i].substr(2,strwords[i].length);
					result += strwords[i][0]+strwords[i][1];
				} else {
					if(/^thr|^sch|^squ/i.test(strwords[i])){
						result += strwords[i].substr(3,strwords[i].length);
						result += strwords[i][0]+strwords[i][1]+strwords[i][2];
					} else{
						result += strwords[i].substr(1,strwords[i].length);
						result += strwords[i][0];
					}
				}
			}
			result += 'ay';
			if(i!==strwords.length - 1){result += ' ';}
		}
		return result;
	}
}

module.exports = new pigLatin;