var display = document.getElementById("screen");
var subDisplay = document.getElementById("sub_display");
var buttons = document.getElementsByClassName("btn");
var resultDisplayed = false;
Array.prototype.forEach.call(buttons, function (button) {
    button.addEventListener("click", function () {
        if (button.textContent != "=" &&
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
            button.textContent != "/" &&
            button.textContent != "x3") {
            display.value += button.textContent;
        }
        else if (button.textContent === "=") {
            equals();
        }
        else if (button.textContent === "C") {
            clear();
        }
        else if (button.textContent === "×") {
            multiply();
        }
        else if (button.textContent === "÷") {
            divide();
        }
        else if (button.textContent === "±") {
            plusMinus();
        }
        else if (button.textContent === "⌫") {
            backspace();
        }
        else if (button.textContent === "mod") {
            percent();
        }
        else if (button.textContent === "π") {
            pi();
        }
        else if (button.textContent === "x ²") {
            square();
        }
        else if (button.textContent === '√') {
            squareRoot();
        }
        else if (button.textContent === "sin") {
            sin();
        }
        else if (button.textContent === "cos") {
            cos();
        }
        else if (button.textContent === "tan") {
            tan();
        }
        else if (button.textContent === "asin") {
            asin();
        }
        else if (button.textContent === "acos") {
            acos();
        }
        else if (button.textContent === "atan") {
            atan();
        }
        else if (button.textContent === "log") {
            log();
        }
        else if (button.textContent === "In") {
            ln();
        }
        else if (button.textContent === "exp") {
            exponent();
        }
        else if (button.textContent === "n!") {
            factorial();
        }
        else if (button.textContent === "e") {
            exp();
        }
        else if (button.textContent === "10x") {
            tenpowexp();
        }
        else if (button.textContent === "1/x") {
            fraction();
        }
        else if (button.textContent === "xy") {
            power();
        }
        else if (button.textContent === "|x|") {
            absvalue();
        }
        else if (button.textContent === "FE") {
            fevalue();
        }
        else if (button.textContent === "⌊x⌋") {
            floor();
        }
        else if (button.textContent === "⌈x⌉") {
            ceil();
        }
        else if (button.textContent === "RAN") {
            random();
        }
        else if (button.textContent === "ex") {
            epowerx();
        }
        else if (button.textContent === "2x") {
            twopowerx();
        }
        else if (button.textContent === "y√x") {
            yrootx();
        }
        // else if (button.textContent === '∛x') {
        //   cubeRoot()
        // }
        else if (button.textContent === "x3") {
            cube();
        }
        else if (button.textContent === "MC") {
            memoryClear();
        }
        else if (button.textContent === "MR") {
            memoryRecall();
        }
        else if (button.textContent === "M+") {
            memoryAdd();
        }
        else if (button.textContent === "M-") {
            memorySubtract();
        }
        else if (button.textContent === "MS") {
            memoryStore();
        }
    });
});
function syntaxError() {
    if (eval(display.value) == SyntaxError ||
        eval(display.value) == ReferenceError ||
        eval(display.value) == TypeError) {
        display.value == "Syntax Error";
    }
}
var check = function (val) {
    var isvalid;
    var char_list = ["+", "-", "/", "*", "%", "!", "^", "π", "e", "|x|"];
    var last_char = val.charAt(val.length - 1);
    if (display.value !== "0" && display.value !== "") {
        if (char_list.includes(last_char)) {
            isvalid = false;
        }
        else {
            isvalid = true;
        }
        return isvalid;
    }
};
function checkLength() {
    if (display.value.length > 15) {
        display.value = "Overflow";
    }
}
function equals() {
    if (display.value.indexOf("^") > -1) {
        var base = display.value.slice(0, display.value.indexOf("^"));
        var exponent_1 = display.value.slice(display.value.indexOf("^") + 1);
        display.value = eval("Math.pow(" + base + "," + exponent_1 + ")");
    }
    else {
        display.value = eval(display.value);
        subDisplay.value = display.value;
        syntaxError();
    }
}
function clear() {
    display.value = "";
    subDisplay.value = display.value;
}
function backspace() {
    if (display.value.length > 0) {
        display.value = display.value.slice(0, display.value.length - 1);
    }
}
function multiply() {
    if (display.value !== "0" && display.value !== "") {
        display.value += "*";
    }
}
function divide() {
    if (check(display.value)) {
        display.value += "/";
    }
}
function plusMinus() {
    if (display.value.charAt(0) === "-") {
        display.value = display.value.slice(1);
    }
    else {
        display.value = "-" + display.value;
    }
}
function factorial() {
    var fact = 1;
    var value = Number(display.value);
    for (var i = 1; i <= value; i++) {
        fact = fact * i;
        display.value = String(fact);
    }
}
function pi() {
    display.value = String(Number(display.value) * Math.PI);
}
function square() {
    display.value = String(Math.pow(Number(display.value), 2));
}
function squareRoot() {
    display.value = String(Math.sqrt(Number(display.value)));
}
function percent() {
    display.value = String(Number(display.value) / 100);
}
function sin() {
    display.value = String(Math.sin(Number(display.value)));
}
function cos() {
    display.value = String(Math.cos(Number(display.value)));
}
function tan() {
    display.value = String(Math.tan(Number(display.value)));
}
function asin() {
    display.value = String(Math.asin(Number(display.value)));
}
function acos() {
    display.value = String(Math.acos(Number(display.value)));
}
function atan() {
    display.value = String(Math.atan(Number(display.value)));
}
function log() {
    display.value = String(Math.pow(10, Number(display.value)));
}
function ln() {
    display.value = String(Math.log(Number(display.value)));
}
function exponent() {
    display.value = String(Math.pow(Number(display.value), 2));
    display.value += "^";
}
function exp() {
    display.value = String(Math.exp(Number(display.value)));
}
function tenpowexp() {
    display.value = String(Math.pow(10, Number(display.value)));
}
function power() {
    display.value += "^";
}
function fraction() {
    display.value = (1 / Number(display.value)).toFixed(2);
}
function absvalue() {
    display.value = String(Math.abs(Number(display.value)));
}
function fevalue() {
    var num = Number(display.value);
    display.value = num.toExponential();
}
function floor() {
    display.value = String(Math.floor(Number(display.value)));
}
function ceil() {
    display.value = String(Math.ceil(Number(display.value)));
}
function random() {
    display.value = String(Math.random());
}
function epowerx() {
    display.value = String(Math.exp(Number(display.value)));
}
function twopowerx() {
    display.value = String(Math.pow(2, Number(display.value)));
}
// function cubeRoot() {
//   display.value = String(Math.cbrt(Number(display.value)));
// }
function yrootx() {
    var dvalue, a, b;
    dvalue = display.value;
    a = Number(dvalue.slice(0, dvalue.indexOf("y")));
    b = Number(dvalue.slice(dvalue.indexOf("t") + 1));
    return Math.pow(a, 1 / b);
}
function cube() {
    display.value = String(Math.pow(Number(display.value), 3));
}
function degtorad() {
    if ($(".degrees").text() == "DEG") {
        display.value = String((Math.PI * Number(display.value)) / 180);
        $(".degrees").text("RAD");
    }
    else {
        display.value = String((180 * Number(display.value)) / Math.PI);
        $(".degrees").text("DEG");
    }
}
//Memory functions
var memory = [];
function memoryAdd() {
    memory.push(display.value);
    subDisplay.value = "M+(".concat(display.value, ")");
}
function memorySubtract() {
    memory.push(display.value);
}
function memoryRecall() {
    var result = memory.reduce(function (acc, cur) {
        return acc + cur;
    }, 0);
    display.value = result;
}
function memoryStore() {
    var i = 0;
    if (memory.length === 0)
        alert("Empyt Memory");
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
}
