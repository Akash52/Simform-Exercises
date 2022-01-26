let display = document.getElementById("screen");
let subDisplay = document.getElementById("sub_display");
let buttons = document.getElementsByClassName("btn");
const btnMC = document.querySelector("#mc");
const btnMR = document.querySelector("#mr");
let lightTheme = "/style.css";
let darkTheme = "/dark.css";

function changeTheme() {
  let darkMode = document.getElementById("dark-mode");
  let theme = document.getElementById("theme");
  if (theme.getAttribute("href") == lightTheme) {
    theme.href = darkTheme;
    darkMode.innerHTML = "☀️";
  } else {
    theme.href = lightTheme;
    darkMode.innerHTML = "🌙";
  }
}

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
      button.textContent != "MC" &&
      button.textContent != "MR" &&
      button.textContent != "M+" &&
      button.textContent != "M-" &&
      button.textContent != "MS" &&
      button.textContent != "ex" &&
      button.textContent != "2x" &&
      button.textContent != "y√x" &&
      button.textContent != "∛x" &&
      button.textContent != "x3" 

    ) {
      display.value = display.value + button.textContent;
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
    }else if (button.textContent === "⌊x⌋") {
      floor();
    } else if (button.textContent === "⌈x⌉") {
      ceil();
    } else if (button.textContent === "RAN") {
      random();
    } else if(button.textContent === "ex"){
      epowerx();
    }
    else if(button.textContent === "2x"){
      twopowerx();
    }
    else if(button.textContent === "y√x"){
      yrootx();
    }
    else if(button.textContent === "∛x"){
      cubeRoot();
    }else if(button.textContent === "x3"){
      cube();
    }
     else if (button.textContent === "MC") {
      memoryClear();
    } else if (button.textContent === "MR") {
      memoryRecall();
    } else if (button.textContent === "M+") {
      memoryAdd();
    } else if (button.textContent === "M-") {
      memorySubtract();
    } else if (button.textContent === "MS") {
      memoryStore();
    } 
  });
});

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

function equals() {
  if (display.value.indexOf("^") > -1) {
    let base = display.value.slice(0, display.value.indexOf("^"));
    let exponent = display.value.slice(display.value.indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value);
    subDisplay.value = display.value;
    checkLength();
    syntaxError();
  }
}

function clear() {
  display.value = "";
  subDisplay.value = display.value;
}

function backspace() {
  if(display.value.length > 0){
    display.value = display.value.slice(0, display.value.length - 1);
    subDisplay.value = display.value;
  }else{
    display.value = "";
    subDisplay.value = display.value;
  }
}

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

function factorial() {
  let fact = 1;
  value = display.value;
  for (let i = 1; i <= value; i++) {
    fact = fact * i;
    display.value = fact;
  }
}

function pi() {
  display.value = display.value * Math.PI;
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function percent() {
  display.value = display.value % display.value;
}

function sin() {
  display.value = Math.sin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
  subDisplay += display.value;
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

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value += "^";
}

function exp() {
  display.value = Math.exp(display.value);
}

function tenpowexp() {
  display.value = Math.pow(10, display.value);
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

function epowerx(){
  display.value = Math.pow(Math.E,display.value);
}

function twopowerx(){
  display.value = Math.pow(2,display.value);
}

function cubeRoot(){
  display.value = Math.cbrt(display.value);
}

function yrootx() { 
  let dvalue,a,b;
  dvalue = display.value;
  a = dvalue.slice(0,dvalue.indexOf("y")); 
  b = dvalue.slice(dvalue.indexOf("t") + 1);
  return Math.pow(a,1/b);
}

function cube(){
  display.value = Math.pow(display.value,3);
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

let memory = [];

function memoryAdd() {
  memory.push(display.value);
  subDisplay.value = `M+(${display.value})`;
  btnMR.style.color = "black";
  btnMC.style.color = "black";
  btnMR.style.backgroundColor = "white";
  btnMC.style.backgroundColor = "white";
}

function memorySubtract() {
  memory.push(eval(-display.value));
  subDisplay.value = `M-(${display.value})`;
  btnMR.style.color = "black";
  btnMC.style.color = "black";
  btnMR.style.backgroundColor = "white";
  btnMC.style.backgroundColor = "white";
}

function memoryRecall() {
  let result = memory.reduce(function (acc, cur) {
    return acc + cur;
  }, 0);
  display.value = result;
  subDisplay = display.value;
}

function memoryStore() {
  if (memory.length === 0) alert("Empyt Memory");
  else {
    display.value = memory[i];
    i++;
    if (i === memory.length) {
      i = 0;
    }
  }
}
function memoryClear() {
  memory = [];
  display.value = "";
  subDisplay.value = "";
  btnMR.style.color = "grey";
  btnMC.style.color = "grey";
}

window.onload = () => {
  'use strict';
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js');
  }
}



