$(document).ready(function(){
  var num1 = "";
  var num2 = "";
  var result = "";
  var operator = "";

  $("#button-land button.num").click(function() {
    // if(result !== "") {
    //   result = "";
    //   $("#display").text("");
    // }
    $("#display").append(this.innerHTML);
    $("#old").append(this.innerHTML);
  });
  $("#button-land button.ops").click(function() {
    // console.log(num1);
    // console.log(num2);
    // console.log(result);
    if(num1 === "") {
      num1 = parseFloat($("#display").text());
      // $("#old").append(num1 + this.innerHTML);
      $("#old").append(this.innerHTML);
      $("#display").text("");
      operator = this.id;
    } else {
      num2 = parseFloat($("#display").text());
      $("#old").append(this.innerHTML);
      $("#display").text("");
      switch(operator) {
        case "add":
          result = add(num1, num2);
          $("#display").append(result);
          num1 = "";
          num2 = "";
          operator = "";
          break;
        case "sub":
          result = sub(num1, num2);
          $("#display").append(result);
          num1 = "";
          num2 = "";
          operator = "";
          break;
        case "divide":
          result = divide(num1, num2);
          $("#display").append(result);
          num1 = "";
          num2 = "";
          operator = "";
          break;
        case "mult":
          result = mult(num1, num2);
          $("#display").append(result);
          num1 = "";
          num2 = "";
          operator = "";
          break;
        // default:
        //   num1 = "";
        //   num2 = "";
        //   operator = "";
        //   break;

      }
    }
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
