$(document).ready(function(){
  var num1;
  var num2;
  var operator;

  $("#button-land button.num").click(function() {
    $("#display").append(this.innerHTML);
  });
  $("#button-land button.ops").click(function() {
    num1 = $("#display").text();
    
  });

});

function add(number1, number2) {
  return number1 + number2 ;
}
function sub(number1, number2) {
  return number1 - number2 ;
}
function mult(number1, number2) {
  return number1 * number2 ;
}
function divide(number1, number2) {
  return number1 / number2 ;
}
