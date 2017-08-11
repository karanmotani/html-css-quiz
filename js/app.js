function createTable() {

	var matA_row = document.getElementById("matA-row").value;
	var matA_col = document.getElementById("matA-col").value;
	var matB_row = document.getElementById("matB-row").value;
	var matB_col = document.getElementById("matB-col").value;



	for(var i = 0; i < matA_row; i++) {

		for(var j = 0; j < matA_col; j++) {
			
			var textfield = document.createElement('input');
			textfield.type = "number";
			textfield.id = 'matA' + i + j;
			var output = document.getElementById("matA");
			output.appendChild(textfield);

		}

		var br = document.createElement('br');
		var setBreak = document.getElementById("matA");
		setBreak.appendChild(br);
	}


	for(var i = 0; i < matB_row; i++) {

		for(var j = 0; j < matB_col; j++) {

			var textfield = document.createElement('input');
			textfield.type = "number";
			textfield.id = 'matB' + i + j;
			var output = document.getElementById("matB");
			output.appendChild(textfield);

		}

		var br = document.createElement('br');
		var setBreak = document.getElementById("matB");
		setBreak.appendChild(br);
	}
}


function createMatrix() {

	
	var matA_row = document.getElementById("matA-row").value;
	var matA_col = document.getElementById("matA-col").value;
	var matB_row = document.getElementById("matB-row").value;
	var matB_col = document.getElementById("matB-col").value;

	var matrixA = new Array(matA_row);
	var matrixB = new Array(matB_row);


	for(var i = 0; i < matA_row; i++) {

		matrixA[i] = new Array(matA_col);

		for(var j = 0; j < matA_col; j++) {
			
			matrixA[i][j] = Number(document.getElementById('matA' + i + j).value);
		}
	}


	for(var i = 0; i < matB_row; i++) {

		matrixB[i] = new Array(matB_col);

		for(var j = 0; j < matB_col; j++) {
			
			matrixB[i][j] = Number(document.getElementById('matB' + i + j).value);
		}
	}

	matrixMultiplication(matrixA, matrixB);


}


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
		document.getElementById("result").value = answer;

		for(var i = 0; i < answer.length; i++) {
			console.log(answer[i]);
		}
	}

	else {
		document.getElementById("result").value = 'Multiplication not successfull';
		console.log('Multiplication not successfull');
	}

}

//matrixA = [[1, 2, 3], [4, 5, 6]];
//matrixB = [[7, 8], [9, 10], [11, 12]];
//matrixMultiplication(matrixA, matrixB);
