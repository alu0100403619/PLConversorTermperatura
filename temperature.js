"use strict"; // Use ECMAScript 5 strict mode in browsers that support it

function calculate() {
  var result;
  var original = document.getElementById("original");
  var temp = original.value;
  var regexp = /([\+\-]?[0-9]+(?:\.[0-9])*)(?:\s*)?([CFcf])/;
  
  var m = temp.match(regexp);
  
  if (m) {
    var num = m[1];
    var type = m[2];
    num = parseFloat(num);
    if (type == 'c' || type == 'C') {
      result = (num * 9/5)+32;
		result = Math.round(result * 100) / 100;
		result = String(result) + " Grados Farenheit";
    }
    else {
      result = (num - 32)*5/9;
      result = Math.round(result * 100) / 100;
		result = String(result) + " Grados Celsius";
    }
    converted.innerHTML = result;
  }
  else {
    converted.innerHTML = "ERROR! Pruebe algo como '-4.2C' ";
  }
}