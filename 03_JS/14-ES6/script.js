//ECMAScript 6 or ES6

//const and let

// var age = 30;
// console.log(age);
// var age = 40;
// console.log(age);

// let age = 30;
// console.log(age);
// let age = 40;
// console.log(age);

// const password = '123456';
// // password = '654321';
// console.log(password);

//Arrow functions

// function multiply(a, b){
//     return a*b;
// }

// const multiply = (a, b) => a*b;
// console.log(multiply(4,5));

//Default parameters

// const add = (a, b=1) => a+b;
// console.log(add(5));

//Template Strings

const customer = {
    name: 'John',
    age: 30
};

//the old way
console.log('Name: ' + customer.name + ', age: ' + customer.age);

//new way
console.log(`Name: ${customer.name}, age: ${customer.age}`);

//Spread operator and rest operator (...)

//Rest operator
//rest operator is used to collect all the arguments into an array

const add = (...numbers) => {
    let sum = 0;
    for(let i=0; i<numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}
console.log(add(1,2,3,4,5));

//Spread operator
//Spread operator is used to expand arrays and objects

const numbers = [1,2,3,4,5];
const newNumbers = [...numbers, 6,7,8];
console.log(numbers);
console.log(newNumbers);

// console.log(numbers===newNumbers);//false beacuse they are different arrays pointing to different memory locations

//Using Object

// const object = {
//     name: 'John',
//     age: 30
// };

// const object1 = {
//     ...object,
//     name: 'Mary'
// };

// console.log(object);

// console.log(object1);

//Destructuring
//Destructuring is used to extract values from objects and arrays

const address = {
    street: '50 Main st',
    city: 'Boston',
    state: 'MA',
    car:{
        make: 'Ford',
        model: 'Fiesta'
    },
    animals:{
        dog :{
            name: 'Max',
            age: 3
        },
        cat: {
            name: 'Tom',
            age: 2
        }
    }
};

//Here we break DRY principle

console.log(address.car.make);
console.log(address.street);
console.log(address.state)
console.log(address.animals.dog.name);
console.log(address.animals.cat.age);
console.log(address.animals.cat.name);

//Using Destructuring we resolve the DRY principle

const {car, street, state, animals:{dog}} = address;

console.log(car);
console.log(street);
console.log(state);
console.log(dog);

//Node

const test = (req, res) => {
    const {body ,params} = req;
};

//React

// const Componet = ({name, age}) => {
//     return (
//         <div>
//             <h1>{name}</h1>
//             <h2>{age}</h2>
//         </div>
//     );
// }


//Array Destructuring

const introductions = ['Hello', 'Hi', 'Hey'];

const [first, second, third] = introductions;

console.log(first, second, third);












