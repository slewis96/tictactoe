// Your code here
$(document).ready(function(e){
//GLOBAL VARIABLES
  var turn = "X";

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
    $this.addClass(turn);
    $this.html(turn);
    $this.unbind("click");
    checkWin(turn);
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
  function checkWin(xo){
    var zeroInner = $('#0').html();
    var oneInner = $('#1').html();
    var twoInner = $('#2').html();
    var threeInner = $('#3').html();
    var fourInner = $('#4').html();
    var fiveInner = $('#5').html();
    var sixInner = $('#6').html();
    var sevenInner = $('#7').html();
    var eightInner = $('#8').html();
    //horizontal win
    if(zeroInner==xo&&oneInner==xo&&twoInner==xo){
      setTimeout("alert('"+xo+" wins');", 1);
      location.reload();
    }
    if(threeInner==xo&&fourInner==xo&&fiveInner==xo){
      setTimeout("alert('"+xo+" wins');", 1);
      location.reload();
    }
    if(sixInner==xo&&sevenInner==xo&&eightInner==xo){
      setTimeout("alert('"+xo+" wins');", 1);
      location.reload();
    }
    //vertical win
    if(zeroInner==xo&&threeInner==xo&&sixInner==xo){
      setTimeout("alert('"+xo+" wins');", 1);
      location.reload();
    }
    if(oneInner==xo&&fourInner==xo&&sevenInner==xo){
      setTimeout("alert('"+xo+" wins');", 1);
      location.reload();
    }
    if(twoInner==xo&&fiveInner==xo&&eightInner==xo){
      setTimeout("alert('"+xo+" wins');", 1);
      location.reload();
    }
    //diagnol win
    if(zeroInner==xo&&fourInner==xo&&eightInner==xo){
      setTimeout("alert('"+xo+" wins');", 1);
      location.reload();
    }
    if(twoInner==xo&&fourInner==xo&&sixInner==xo){
      setTimeout("alert('"+xo+" wins');", 1);
      location.reload();
    }
  }
});
