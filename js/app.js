

MyApp = (function(){

	let app = {};

	// let utils = {};

	app.state = {
		matrix1 : {
			cols : 0,
			rows: 0
		},
		matrix2 : {
			cols : 0,
			rows: 0
		}
	};

	// Callback for user inputs

	function _onKeyUp( evt ){

		console.log(this.id);

		switch(this.id){

			case "matArow":
			app.state.matrix1.rows = this.value;
			break;

			case "matBrow":
			app.state.matrix2.rows = this.value;
			break;

			case "matAcol":
			app.state.matrix1.cols = this.value;
			break;

			case "matBcol":
			app.state.matrix2.cols = this.value;
			break;
		}

		console.log(app.state)

	}

	// Callback for answer button

	function _createTable( evt ) {

		let matrix1 = app.state.matrix1;
		let matrix2 = app.state.matrix2;

		var matA = mustacheMatrix('matA',matrix1.rows,matrix1.cols)
		var matB = mustacheMatrix('matB',matrix2.rows,matrix2.cols)

		$('#matA').append(matA);
		$('#matB').append(matB);

	}


	function _createMatrix() {

		let matrix1 = app.state.matrix1;
		let matrix2 = app.state.matrix2;

		var matrixA = new Array(matrix1.rows);
		var matrixB = new Array(matrix2.rows);


		for(var i = 0; i < matrix1.rows; i++) {

			matrixA[i] = new Array(matrix1.cols);

			for(var j = 0; j < matrix1.cols; j++) {
				
				matrixA[i][j] = Number(document.getElementById('matA' + i + j).value);
			}
		}


		for(var i = 0; i < matrix2.rows; i++) {

			matrixB[i] = new Array(matrix2.cols);

			for(var j = 0; j < matrix2.cols; j++) {
				
				matrixB[i][j] = Number(document.getElementById('matB' + i + j).value);
			}
		}

		let answer = matrixMultiplication(matrixA, matrixB);
		
		document.getElementById("result").value = answer;

	}


	/*
	 * @params: 
	 *	prefix - 'prefix name of id'
	 *  row - 'row number'
	 *  cols - 'col number'
	 */


	function mustacheMatrix(prefix,rows,cols){

		var idArr = [], output="";
		var tpl = $('#cellTpl').html();

		for(var i = 0; i < rows; i++) {
			for(var j = 0; j < cols; j++) {
				
				idArr.push({
					id: prefix + i + j,
					col: j,
					row: i,
					isFull : function(r){
						return (parseInt(this.col)%parseInt(cols)-1 === 0)?true:false
					}
				});
			}
		}
		return Mustache.render(tpl, { data: idArr });

	}

	
	 app.matrixMultiplication = function(matrixA, matrixB) {

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
				console.log(answer[i]);
			}
		}
		else {
			answer = 'Multiplication not successfull';
			console.log('Multiplication not successfull');
		}

		return answer;
	}

	
	app.init = function(){

		$('#generateButton').click(_createTable);
		$('#answerButton').click(_createMatrix);
		$("input.userInputs").keyup(_onKeyUp)

	}

	app.render = function(){
		// Render this application to screen
		let template = $('#mainTpl').html()
		$('body').html(template);
	};

	// $.apply({},app,utils);

	return app;

})();



//matrixA = [[1, 2, 3], [4, 5, 6]];
//matrixB = [[7, 8], [9, 10], [11, 12]];
//matrixMultiplication(matrixA, matrixB);
