function pigLatin(){
	this.translate = function(str) {
  		let result = '';
  		let strwords = str.split(' ')
	  	for(var i = 0;i<strwords.length;i++){
	  		if(!/[aeiou]/i.test(strwords[i][0])){
    			result += strwords[i].substr(1,strwords[i].length);
   		 		result += strwords[i][0];
   		 	} else {
   		 		result += strwords[i];
   		 	}
    		result += 'ay';
    		if(i!==strwords.length - 1){result += ' ';}
  		}
  		return result;
  	}
}

module.exports = new pigLatin;