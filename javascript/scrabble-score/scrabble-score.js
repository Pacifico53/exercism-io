function score(str) {
	let result = 0;
	if(str === null || str === undefined){return 0;}
	for (var i = 0; i < str.length; i++) {
		let char = str[i]
		switch (true) {
			case /[aeioulnrst]/i.test(char):
				result += 1;
				break;
			case /[dg]/i.test(char):
				result += 2;
				break;
			case /[bcmp]/i.test(char):
				result += 3;
				break;
			case /[fhvwy]/i.test(char):
				result += 4;
				break;
			case /[k]/i.test(char):
				result += 5;
				break;
			case /[jx]/i.test(char):
				result += 8;
				break;
			case /[qz]/i.test(char):
				result += 10;
				break;
			default: throw new Error('Only characters are permited');
		}
	}
	return result;
}

module.exports = score;

/*
Letter                           Value
A, E, I, O, U, L, N, R, S, T       1
D, G                               2
B, C, M, P                         3
F, H, V, W, Y                      4
K                                  5
J, X                               8
Q, Z                               10
*/