const display = <HTMLInputElement>document.getElementById("screen");
const subDisplay = <HTMLInputElement>document.getElementById("sub_display");
const buttons = document.getElementsByClassName("btn");
let resultDisplayed = false;

Array.prototype.forEach.call(
  buttons,
  function (button: {
    addEventListener: (arg0: string, arg1: () => void) => void;
    textContent: string | number;
  }) {
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
        button.textContent != "F-E" &&
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
        button.textContent != "3x" &&
        button.textContent != "∛x" &&
        button.textContent != "/" &&
        button.textContent != "x3" &&
        button.textContent != "+" &&
        button.textContent != "-"
      ) {
        display.value += button.textContent;
      } else if (button.textContent === "=") {
        equals();
      } else if (button.textContent === "C") {
        clear();
      } else if (button.textContent === "×") {
        multiply();
      } else if (button.textContent === "+") {
        add();
      } else if (button.textContent === "-") {
        minus();
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
        expression();
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
      } else if (button.textContent === "F-E") {
        fevalue();
      } else if (button.textContent === "⌊x⌋") {
        floor();
      } else if (button.textContent === "⌈x⌉") {
        ceil();
      } else if (button.textContent === "RAN") {
        random();
      } else if (button.textContent === "ex") {
        epowerx();
      } else if (button.textContent === "2x") {
        twopowerx();
      } else if (button.textContent === "3x") {
        threepowerx();
      } else if (button.textContent === "∛x") {
        cubeRoot();
      } else if (button.textContent === "x3") {
        cube();
      } else if (button.textContent === "MC") {
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
  }
);

function equals():void {
  if (display.value.indexOf("^") > -1) {
    let base = display.value.slice(0, display.value.indexOf("^"));
    let exponent = display.value.slice(display.value.indexOf("^") + 1);
  } else if (display.value === "" || display.value === undefined) {
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
    clear();
  } else {
    try {
      let x = eval(display.value);
      display.value = eval(x);
      subDisplay.value = display.value;
    } catch {
      display.value = "Syntax error!";
    }
  }
}

function clear():void {
  display.value = "";
  subDisplay.value = display.value;
}

function backspace():void {
  if (display.value.length > 0) {
    display.value = display.value.slice(0, display.value.length - 1);
    subDisplay.value = display.value;
  }
}

const check = (val: string, eve: string) => {
  let isvalid: boolean;
  let cur_Value = display.value;
  let last_char: string = cur_Value[cur_Value.length - 1];
  if (display.value !== "0" && display.value !== "") {
    if (
      last_char === "+" ||
      last_char === "-" ||
      last_char === "/" ||
      last_char === "*" ||
      last_char === "%" ||
      last_char === "!" ||
      last_char === "^" ||
      last_char === "e" ||
      last_char === "e"
    ) {
      let assign = cur_Value.substring(0, cur_Value.length - 1) + eve;
      display.value = assign;
      isvalid = false;
    } else {
      isvalid = true;
    }
    return isvalid;
  }
};

function multiply():void {
  if (check(display.value, "*")) {
    display.value += "*";
  }
}

function divide():void {
  if (check(display.value, "/")) {
    display.value += "/";
  }
}

function add():void {
  if (check(display.value, "+")) {
    display.value += "+";
  }
}
function minus():void {
  if (check(display.value, "-") === true) {
    display.value += "-";
  }
}

function plusMinus():void {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}
function factorial():void {
  let fact = 1;
  const value = Number(display.value);
  for (let i = 1; i <= value; i++) {
    fact = fact * i;
    display.value = String(fact);
  }
}
function pi():void {
  display.value = String(Number(display.value) * Math.PI);
}
function square():void {
  display.value = String(Math.pow(Number(display.value), 2));
}
function squareRoot():void {
  display.value = String(Math.sqrt(Number(display.value)));
}
function percent():void {
  display.value = String(Number(display.value) / 100);
}
function sin():void {
  display.value = String(Math.sin(Number(display.value)));
}
function cos():void {
  display.value = String(Math.cos(Number(display.value)));
}
function tan():void {
  display.value = String(Math.tan(Number(display.value)));
}
function asin() :void{
  display.value = String(Math.asin(Number(display.value)));
}
function acos():void {
  display.value = String(Math.acos(Number(display.value)));
}
function atan():void {
  display.value = String(Math.atan(Number(display.value)));
}
function log():void {
  display.value = String(Math.LOG10E);
}
function ln():void {
  display.value = String(Math.log(Number(display.value)));
}
function exponent():void {
  display.value = String(Math.pow(Number(display.value), 2));
  display.value += "^";
}
function exp():void {
  display.value = String(Math.exp(Number(display.value)));
}
function tenpowexp():void {
  display.value = String(Math.pow(10, Number(display.value)));
}
function power():void {
  display.value += "^";
}
function fraction():void {
  display.value = (1 / Number(display.value)).toFixed(2);
}
function absvalue():void {
  display.value = String(Math.abs(Number(display.value)));
}
function fevalue() :void{
  let num = Number(display.value);
  display.value = num.toExponential();
}
function floor():void {
  display.value = String(Math.floor(Number(display.value)));
}
function ceil():void {
  display.value = String(Math.ceil(Number(display.value)));
}
function random() :void{
  display.value = String(Math.random());
}
function epowerx() :void{
  display.value = String(Math.exp(Number(display.value)));
}
function twopowerx() :void{
  display.value = String(Math.pow(2, Number(display.value)));
}

function threepowerx():void {
  display.value = String(Math.pow(3, Number(display.value)));
}

function cube():void {
  display.value = String(Math.pow(Number(display.value), 3));
}

function cubeRoot() :void{
  display.value = String(Math.pow(Number(display.value), 1 / 3));
}

function expression():void {
  display.value = String(eval(display.value));
}

function degtorad():void {
  if ($(".degrees").text() == "DEG") {
    display.value = String((Math.PI * Number(display.value)) / 180);
    $(".degrees").text("RAD");
  } else {
    display.value = String((180 * Number(display.value)) / Math.PI);
    $(".degrees").text("DEG");
  }
}

//Memory functions

let memory = [];

let data: Number = 0;

function memoryAdd():void {
  memory.push(display.value);
  subDisplay.value = `M+(${display.value})`;
}

function memorySubtract():void {
  memory.push(eval("-" + data));
  display.value = String(data);
  subDisplay.value = `M-(${display.value})`;
}

function memoryRecall():void {
  let num = 0;
  memory.forEach((data) => {
    num += data;
  });
  display.value = String(num);
  subDisplay.value = `MR(${display.value})`;
}

function memoryStore():void {
  memory.push(data);
  display.value = String(memory);
  subDisplay.value = `MS(${display.value})`;
}

function memoryClear():void {
  memory = [];
  display.value = String(memory);
  subDisplay.value = `MC`;
}
