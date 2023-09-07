var gameBoard = (function() {
    'use strict';
    const boardModule = (function() {
        const board = {
            boardArray: ['x','o','x','o','x','o','x','o','x']
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
        
        renderBoard();
    
        return {
            getArray: function() {
                return board.boardArray;
            }
        };
    })();

    return boardModule; 
})();

function createPlayer({name, symbol}){
    return {
        name
    };
  }

var gameFlow = (function(){
    'use strict';
    
})



