// Your code here
$(document).ready(function(e){
//GLOBAL VARIABLES
  var turn = "X";
  var board = "---------"
//EVENTS
  $('td').click(function(){
    var $this = $(this);
    move($this);
  });
  $('#reset').click(function(){
    location.reload();
  });

//FUNCTIONS
  //Move
  function move($this){
    //set board
    $this.addClass(turn);
    $this.html(turn);
    $this.unbind("click");
    //set virtual board
    var tileNum = parseInt($this.attr('id'));
    board = board.substr(0,tileNum)+turn+board.substr(tileNum+1, board.length);
    console.log(board);

    var win = checkWin();
    var winningPlayer = turn;
    //win
    if(win==true){
      setTimeout(function(){
          alert(winningPlayer + " wins")
          location.reload();
      });
    }
    //draw
    if(win==undefined){
      setTimeout(function(){
          alert("Draw!")
          location.reload();
      });
    }
    switchPlayer();
  }
  function switchPlayer(){
    if(turn=="X"){
      $('.playerTurn').html("It is O's turn");
      turn="O";
    }
    else if(turn=="O"){
      $('.playerTurn').html("It is X's turn");
      turn="X";
    }
  }
  //Check
  function checkWin(){
    return checkWinAt(0,1,2)
       ||  checkWinAt(3,4,5)
       ||  checkWinAt(6,7,8)
       ||  checkWinAt(0,3,6)
       ||  checkWinAt(1,4,7)
       ||  checkWinAt(2,5,8)
       ||  checkWinAt(0,4,8)
       ||  checkWinAt(6,4,2)
       ||  checkDraw();
  }
  function checkWinAt(p1, p2, p3){
    var c1 = board.charAt(p1);
    if (c1 == '-') return false;
    var c2 = board.charAt(p2);
    if (c1 != c2) return false;
    var c3 = board.charAt(p3);
    if (c1 != c3) return false;
    return true;
  }
  function checkDraw(){
    for (var i=0; i<9; i++) {
      if (board.charAt(i) == '-'){return false;}
    }
    return undefined;
  }
});
