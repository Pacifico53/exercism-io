var primeFactors = function() {
	this.for = function (num) {
		let result = [];
		let number = num;
		let factor = 2;
		for (var i = 0; number !== 1; i++) {
			if(number%factor === 0){
				result.push(factor);
				number = number/factor;
			}
			else{
				factor++;
			}
		}
		return result;
	}
}

module.exports = primeFactors;