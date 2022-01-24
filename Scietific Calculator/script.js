let display = document.getElementById("screen");
let buttons = document.getElementsByClassName("btn");
let functionButtons = document.getElementById("funBtn");
// console.log(functionButtons)
// console.log(display);

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    if (
      button.textContent != "=" &&
      button.textContent != "C" &&
      button.textContent != "×" &&
      button.textContent != "÷" &&
      button.textContent != "√" &&
      button.textContent != "x ²" &&
      button.textContent != "mod" &&
      button.textContent != "⌫" &&
      button.textContent != "±" &&
      button.textContent != "sin" &&
      button.textContent != "cos" &&
      button.textContent != "tan" &&
      button.textContent != "atan" &&
      button.textContent != "acos" &&
      button.textContent != "asin" &&
      button.textContent != "log" &&
      button.textContent != "In" &&
      button.textContent != "exp" &&
      button.textContent != "n!" &&
      button.textContent != "π" &&
      button.textContent != "2nd" &&
      button.textContent != "e" &&
      button.textContent != "RAD" &&
      button.textContent != "DEG" &&
      button.textContent != "10x" &&
      button.textContent != "1/x" &&
      button.textContent != "xy" &&
      button.textContent != "|x|" &&
      button.textContent != "FE" && 
      button.textContent != "⌊x⌋" &&
      button.textContent != "⌈x⌉" &&
      button.textContent != "RAN" &&
      button.textContent != "∘" &&
      button.textContent != "MC" &&
      button.textContent != "MR" &&
      button.textContent != "M+" &&
      button.textContent != "M-" &&
      button.textContent != "MS"

    ) {
      display.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "C") {
      clear();
    } else if (button.textContent === "×") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "±") {
      plusMinus();
    } else if (button.textContent === "⌫") {
      backspace();
    } else if (button.textContent === "mod") {
      percent();
    } else if (button.textContent === "π") {
      pi();
    } else if (button.textContent === "x ²") {
      square();
    } else if (button.textContent === "√") {
      squareRoot();
    } else if (button.textContent === "sin") {
      sin();
    } else if (button.textContent === "cos") {
      cos();
    } else if (button.textContent === "tan") {
      tan();
    } else if (button.textContent === "asin") {
      asin();
    } else if (button.textContent === "acos") {
      acos();
    } else if (button.textContent === "atan") {
      atan();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "In") {
      ln();
    } else if (button.textContent === "exp") {
      exponent();
    } else if (button.textContent === "n!") {
      factorial();
    } else if (button.textContent === "e") {
      exp();
    } else if (button.textContent === "rad") {
      radians();
    } else if (button.textContent === "∘") {
      degrees();
    } else if (button.textContent === "10x") {
      tenpowexp();
    } else if (button.textContent === "1/x") {
      fraction();
    } else if (button.textContent === "xy") {
      power();
    } else if (button.textContent === "|x|") {
      absvalue();
    } else if (button.textContent === "FE") {
      fevalue();
    } else if (button.textContent === "DEG") {
      degToRad();
    }
    else if (button.textContent === "2nd") {
      twopowexp();
    }else if (button.textContent === "⌊x⌋") {
      floor();
    }else if(button.textContent === "⌈x⌉"){
      ceil();
    }else if(button.textContent === "RAN"){
      random();
    }else if(button.textContent === "MC"){
      memoryClear();
    }else if(button.textContent === "MR"){
      memoryRecall();
    }
    else if(button.textContent === "M+"){
      memoryAdd();
    }
    else if(button.textContent === "M-"){
      memorySubtract();
    }
    else if(button.textContent === "MS"){
      memoryStore();
    }
  });
});

//We create different functions for each button

//Here we handle edge cases

function syntaxError() {
  if (
    eval(display.value) == SyntaxError ||
    eval(display.value) == ReferenceError ||
    eval(display.value) == TypeError
  ) {
    display.value == "Syntax Error";
  }
}

function checkLength() {
  if (display.value.length > 15) {
    display.value = "Overflow";
  }
}

//For Equals button

function equals() {
  if (display.value.indexOf("^") > -1) {
    let base = display.value.slice(0, display.value.indexOf("^"));
    let exponent = display.value.slice(display.value.indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value);
    checkLength();
    syntaxError();
  }
}

//Simple clear button

function clear() {
  display.value = "";
}

//Backspace

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

//Here we perform basic math operations like addition, subtraction, multiplication, division

function multiply() {
  display.value += "*";
}

function divide() {
  display.value += "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

//Here we find factorial

function factorial() {
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    let number = 1;
    for (let i = display.value; i > 0; i--) {
      number *= i;
    }
    display.value = number;
  }
}

//For PI

function pi() {
  display.value = display.value * Math.PI;
}

//For Square

function square() {
  display.value = eval(display.value * display.value);
}
//For SquareRoot
function squareRoot() {
  display.value = Math.sqrt(display.value);
}
//For Percent
function percent() {
  display.value = display.value / 100;
}

function mode() {
  display.value = display.value % display.value;
}

//here we perform Trigonometry Operations

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function asin() {
  display.value = Math.asin(display.value);
}

function acos() {
  display.value = Math.acos(display.value);
}

function atan() {
  display.value = Math.atan(display.value);
}

//For Log10

function log() {
  display.value = Math.log10(display.value);
}

//For Log

function ln() {
  display.value = Math.log(display.value);
}
//For Exponent

function exponent() {
  display.value += "^";
}

function exp() {
  display.value = Math.exp(display.value);
}

function tenpowexp() {
  display.value = Math.pow(10, display.value);
}

function twopowexp() {
  display.value = Math.pow(2, display.value);
}

function power() {
  display.value += "^";
}

function fraction() {
  display.value = (1 / display.value).toFixed(2);
}

function absvalue() {
  display.value = Math.abs(display.value);
}

function fevalue() {
  let num = parseFloat(display.value);
  display.value = num.toExponential();
}

function floor() {
  display.value = Math.floor(display.value);
}

function ceil() {
  display.value = Math.ceil(display.value);
}

function random() {
  display.value = Math.random();
}

function absvalue() {
  display.value = Math.abs(display.value);
}

function degtorad() {
  if ($(".degrees").text() == "DEG") {
    display.value = display.value * (180 / Math.PI);
    $(".degrees").text("RAD");
  } else {
    display.value = display.value * (Math.PI / 180);
    $(".degrees").text("DEG");
  }
}

//Memory functions

let memory = 0;

function memoryAdd() {
  memory = memory + parseFloat(display.value);
}

function memorySubtract() {
  memory = memory - parseFloat(display.value);
}

function memoryRecall() {
  display.value = memory;
}

function memoryStore() {
  memory = parseFloat(display.value);
}
function memoryClear() {
  memory = 0;
}

//Scientific Functions in Javascript


