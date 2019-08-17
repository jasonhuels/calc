$(document).ready(function(){
  var num1 = "";
  var num2 = "";
  var result = "";
  var operator = "";
  var readyToCalc = false;

/////////////// Number Buttons //////////////////
  $("#button-land button.num").click(function() {
    if(num1 === "") {
      $("#display").append(this.innerHTML);
    } else if(!readyToCalc) {
      $("#display").text(this.innerHTML);
      readyToCalc = true;
    } else {
      $("#display").append(this.innerHTML);
    }
  });
  /////////////// Operator Buttons /////////////////
  $("#button-land button.ops").click(function() {
    if(!readyToCalc) {
      num1 = parseFloat($("#display").text());
      $("#old").append(num1);
      if(this.id !== "equal") {
        $("#old").append(this.innerHTML);
      }
      operator = this.id;
    } else {
      num2 = parseFloat($("#display").text());
      $("#old").append(num2);
      if(this.id !== "equal") {
        $("#old").append(this.innerHTML);
      } else {
        if(readyToCalc) {
          $("#old").append(this.innerHTML);
          console.log($("#old").text());
          $("#history").append($("#old").text());
          $("#old").text("");
        }
      }
      switch(operator) {
        case "add":
          result = add(num1, num2);
          $("#display").text(result);
          break;
        case "sub":
          result = sub(num1, num2);
          $("#display").text(result);
          break;
        case "divide":
          result = divide(num1, num2);
          $("#display").text(result);
          break;
        case "mult":
          result = mult(num1, num2);
          $("#display").text(result);
          break;
        case "exp":
          result = Math.pow(num1, num2);
          $("#display").text(result);
          break;
        case "mod":
          result = mod(num1, num2);
          $("#display").text(result);
          break;
        }

        num1 = result;
        num2 = "";
        operator = this.id;
        readyToCalc = false;
        if(this.id === "equal") {
          $("#history").append(result + "<br>");
          //num1 = "";
        }

      }

  });
  /////////////// Clear Button //////////////////
    $("#button-land button.clear").click(function() {
      $("#display").text("");
      $("#old").text("");
      num1 = "";
      num2 = "";
      operator = "";
      readyToCalc = false;
      result = "";
    });

  /////////////// +/- Button //////////////////
    $("#button-land button#neg").click(function() {
      if(!$("#display").text().includes('-')){
        $("#display").prepend("-");
      } else {
        $("#display").text($("#display").text().slice(1,$("#display").text().length));
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
function mod(number1, number2) {
  return number1 % number2 ;
}
