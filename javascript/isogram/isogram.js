function Isogram(str) {
	this.value = str.toLowerCase();
	this.isIsogram = function () {
		let r = true;
		for (var i = 0; i < this.value.length && r; i++) {
			if(this.value.indexOf(this.value[i]) !== i && this.value[i].match(/[a-zà-ù]/)) {r = false;}
		}
		return r;
	}
}

module.exports = Isogram;