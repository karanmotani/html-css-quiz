function matrixMultiplication(matrixA, matrixB) {

	Arow = matrixA.length;
	Acol = matrixA[0].length;
	Brow = matrixB.length;
	Bcol = matrixB[0].length;

	var answer = new Array(Arow);
	console.log('Matrix A: ' + Arow + ' * ' + Acol);
	console.log('Matrix B: ' + Brow + ' * ' + Bcol);

	if(Acol === Brow) {

		for(var row = 0; row < answer.length; row++) {

			answer[row] = new Array(matrixB[row].length);

			for(var col = 0; col < Arow; col++) {

				answer[row][col] = 0;

				for(var x = 0; x < Brow; x++) {

					answer[row][col] += matrixA[row][x] * matrixB[x][col];
				}
			}
		}

		console.log('Multiplication successfull');

		for(var i = 0; i < answer.length; i++) {
			// for(var j = 0; j < answer.length; j++) {
			// 	console.log(answer[i][j] + ' ');
			// }
			console.log(answer[i]);
			//console.log("\n");
		}
	}

	else {
		console.log('Multiplication not successfull');
	}

}

matrixA = [[1, 2, 3], [4, 5, 6]];
matrixB = [[7, 8], [9, 10], [11, 12]];
matrixMultiplication(matrixA, matrixB);
