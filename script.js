var gameBoard = (function() {
    'use strict';
    const boardModule = (function() {
        const board = {
            boardArray: []
        };

       
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



