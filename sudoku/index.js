

  $("#sudoku-board").on("keyup", "td", function (event) {
    var temp = $(event.target).text();
    if(temp.length > 0 && temp[0] > 0 && temp[0] < 10){
        $(event.target).text(temp[0]);
    }
    else $(event.target).text("");
  });


function sudoko_solver(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === 0) {
                for (let l = 1; l < 10; l++) {
                    if (isValid(board, i, j, l)) {
                        board[i][j] = l;
                        let solved = sudoko_solver(board);
                        if (solved !== false) return solved;
                        board[i][j] = 0;
                    }
                }
                return false; 
            }
        }
    }
    return true;
}

function isValid(board, i, j, l) {
    for (let p = 0; p < board.length; p++) {
        if (board[i][p].toString() === l.toString()) return false;
        if (board[p][j].toString() === l.toString()) return false;
        
        let gridVal = board[3 * Math.floor(i/3) + Math.floor(p/3)][3 * Math.floor(j/3) + p % 3];
        if (gridVal.toString() === l.toString()) return false;
    }
    
    return true;
};

function valid(board){
    for(let i = 0 ; i < 9 ; i++){
        for(let j = 0 ; j < 9 ; j++){
            if(board[i][j] != 0){
                let temp = board[i][j];
                board[i][j] = 0;
                let validCell = isValid(board,i,j,temp);
                board[i][j] = temp;
                if(validCell == false) return false;
            }
        }
    }
    return true;
};


    var solveButton = $('#solve-button');
    var clearButton = $('#clear-button');
    var board = $('#sudoku-board');

    solveButton.on('click', solveSudoku);
    clearButton.on('click', clearBoard);

    function clearBoard() {
        $("td").text('');
    }

    function solveSudoku() {
        var boardArray = readBoard();
        var isValidSudoko = valid(boardArray);
        if(isValidSudoko) isValidSudoko = sudoko_solver(boardArray);
        if(isValidSudoko === false){
            $(".head").text("Error");
            $(".wrapper").addClass("red");
            setTimeout(function(){
                $(".head").text("Sudoko Solver");
                $(".wrapper").removeClass("red");
                clearBoard();
            } , 1500);
        }
        else{
            writeBoard(boardArray);
        }
    }



    function readBoard() {
        var boardArray = [];
        for(let i = 0 ; i < 9 ; i++){
            boardArray[i] = [];
            for(let j = 0 ; j < 9 ; j++){
                var cellValue = $("#row-"+i+"-"+j).text();
                if(cellValue === '') cellValue = 0;
                boardArray[i][j] = cellValue;
                //console.log(boardArray[i][j]);
            }
        }
        return boardArray;
    }

    function writeBoard(boardArray) {
        for(let i = 0 ; i < 9 ; i++){
            for(let j = 0 ; j < 9 ; j++){
                $("#row-"+i+"-"+j).text(boardArray[i][j]);
            }
        }
    }


   
