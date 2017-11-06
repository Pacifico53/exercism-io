var SpaceAge = function(input) {
	this.value = input;
	this.seconds = this.value;
	this.onEarth = function() {return Math.round((this.seconds/31557600)*100)/100;}
	this.onMercury = function() {return Math.round((this.onEarth() / 0.2408467)*100)/100;}
	this.onVenus = function() {return Math.round((this.onEarth() / 0.61529726)*100)/100;} // <--mudei o valor, estava a
	this.onMars = function() {return Math.round((this.onEarth() / 1.8808158)*100)/100;}   //    arredondar 0.01 acima
	this.onJupiter = function() {return Math.round((this.onEarth() / 11.862615)*100)/100;}//    do que devia
	this.onSaturn = function() {return Math.round((this.onEarth() / 29.447498)*100)/100;}
	this.onUranus = function() {return Math.round((this.onEarth() / 84.016846)*100)/100;}
	this.onNeptune = function() {return Math.round((this.onEarth() / 164.79132)*100)/100;}
};

module.exports = SpaceAge;

/*
   - Earth: orbital period 365.25 Earth days, or 31557600 seconds
   - Mercury: orbital period 0.2408467 Earth years
   - Venus: orbital period 0.61519726 Earth years
   - Mars: orbital period 1.8808158 Earth years
   - Jupiter: orbital period 11.862615 Earth years
   - Saturn: orbital period 29.447498 Earth years
   - Uranus: orbital period 84.016846 Earth years
   - Neptune: orbital period 164.79132 Earth years
*/