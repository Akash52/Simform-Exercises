//Execution Context
//Thread of Execution
//Memory

//Functions

const num=10;

function multiplyBy2(inputNumber){
    const result=inputNumber*2;
    return result;
}

const output=multiplyBy2(num);
const newOutput=multiplyBy2(20);

//Call Stack
//Call Stack is a stack of functions that are being executed
//Functions are added to the call stack when they are called

//Three core component of JS

//1. Execution Context
//2. Call Stack
//3. Memory

//Generalize Functions

function nineSquare(){
    const result=9*9;
    return result;
}

function tenSquare(){
    const result=10*10;
    return result;
}

//Here we break DRY principle

//we can generalize the function to make it reusable

function squareNum(inputNumber){
    const result=inputNumber*inputNumber;
    return result;
}
squareNum(9);
squareNum(10);
squareNum(20);


function copyArray(inputArray){
    const result=[];
    for(let i=0;i<inputArray.length;i++){
        result.push(inputArray[i]*2);
    }
    return result;
}

const myArray=[1,2,3,4,5];
const newArray=copyArray(myArray);
console.log(newArray);

//Higher Order Functions