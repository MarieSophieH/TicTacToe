function createPlayer({name, symbol}){
    return {
        name,
        symbol
    };
  }


var gameFlow = (function(){
    'use strict';
    const player1 = createPlayer({name: 'Anna', symbol: 'X'});
    const player2 = createPlayer({name: 'Isa', symbol: 'O'});

    return{
        player1,
        player2
    };
    
})();

var gameBoard = (function() {
    'use strict';
    let currentPlayer = gameFlow.player1;

    const boardModule = (function() {
        const board = {
            boardArray: [
                ["","",""],
                ["","",""],
                ["","",""]
            ]
        };

        function renderBoard(){
            const table = document.getElementById('boardTable');
            const rows = table.querySelectorAll('tr');
            
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    rows[i].children[j].textContent = board.boardArray[i][j];
                }
            }
        }

        function addCellEventListeners(){
            const table = document.getElementById('boardTable');
            const rows = table.querySelectorAll('tr');
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    rows[i].children[j].addEventListener('click', function(event){
                        if (board.boardArray[i][j] == '') {
                            board.boardArray[i][j] = currentPlayer.symbol;
                            if (currentPlayer == gameFlow.player1) {
                                currentPlayer = gameFlow.player2;
                            } else {
                                currentPlayer = gameFlow.player1;
                            }
                        }
                        renderBoard();
                        checkLogic();
                    })
                }
            }
        }

        function checkLogic(){
                for(let i = 0; i < 3; i++){
                    let j = 0;
                    if ((board.boardArray[i][j] == board.boardArray[i][j+1]) && (board.boardArray[i][j]== board.boardArray[i][j+2]) && board.boardArray[i][0] != ""){
                        console.log("Winner");
                        return true;
                    }
                }
                for(let j = 0; j < 3; j++){
                    let i = 0;
                    if ((board.boardArray[i][j] == board.boardArray[i+1][j]) && (board.boardArray[i][j] == board.boardArray[i+2][j]) && board.boardArray[0][j] != ""){
                        console.log("Winner");
                        return true;
                    }
                }
                if((board.boardArray[0][0] == board.boardArray[1][1]) && (board.boardArray[0][0] == board.boardArray[2][2]) && (board.boardArray[0][0] != "")){
                    console.log("Winner");
                    return true;
                }
                if((board.boardArray[2][0] == board.boardArray[1][1]) && (board.boardArray[2][0] == board.boardArray[0][2]) && (board.boardArray[2][0] != "")){
                    console.log("Winner");
                    return true;
                }

                return false;
        }

        renderBoard();
        addCellEventListeners();
    
        return {
            getArray: function() {
                return board.boardArray;
            }
        };
    })();

    return boardModule; 
})();
