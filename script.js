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
    let currentPlayer = player1;

    return{
        currentPlayer
    };
    
})();

var gameBoard = (function() {
    'use strict';
    const boardModule = (function() {
        const board = {
            boardArray: ['','','','','','','','','']
        };

        function renderBoard(){
            const table = document.getElementById('boardTable');
            const rows = table.querySelectorAll('tr');
            
            let index = 0;
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    rows[i].children[j].textContent = board.boardArray[index];
                    index++;
                }
            }
        }

        function addCellEventListeners(){
            const table = document.getElementById('boardTable');
            const rows = table.querySelectorAll('tr');
            for (let i = 0; i < 3; i++) {
                for (let j = 0; j < 3; j++) {
                    rows[i].children[j].addEventListener('click', function(event){
                        const index = parseInt(event.target.getAttribute('data-index'), 10);
                        board.boardArray[index] = gameFlow.currentPlayer.symbol;
                        renderBoard();
                    })
                }
            }
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
