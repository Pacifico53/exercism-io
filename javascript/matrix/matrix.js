function Matrix(input) {
	let newmatrix = input.split('\n');
	this.rows = giveRows(newmatrix);
	this.columns = giveColumns(newmatrix);
}

function giveRows(mat) {
	let result = [[]];
	for (var i = 0; i < mat.length; i++) {
		if (!result[i]) {result[i] = [];}
		for (var j = 0; j < mat[i].split(' ').length; j++) {
			result[i][j] = Number(mat[i].split(' ')[j]); 
		}
	}
	return result;
}

function giveColumns(mat) {
	let result = [[]];
	for (var i = 0; i < mat[0].split(' ').length; i++) {
		if (!result[i]) {result[i] = [];}
		for (var j = 0; j < mat.length; j++) {
			result[i][j] = Number(mat[j].split(' ')[i]); 
		}
	}
	return result;
}

module.exports = Matrix, giveColumns, giveRows;