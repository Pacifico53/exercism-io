function Gigasecond(input) {
	let date1 = input.getTime();
	let dateSecs = date1 + 1000000000000; // 10^9 = gigasecond, 10^9 * 1000 = gigasecond(in milisecond, because:
	let date2 = new Date(dateSecs);       // new Date(miliseconds))
	this.date = function () {
		return date2;
	}
}

module.exports = Gigasecond;
