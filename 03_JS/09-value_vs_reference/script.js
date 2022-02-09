//In JavaScript primitive types are passed around as values: meaning that each time a value is assigned, a copy of that value is created.
//On the other side objects (including plain objects, array, functions, class instances) are references.

// const fruits = ['Apple','Mango'];
// const otherfruits = fruits;

// fruits.push('banana')

// console.log(fruits)
// console.log(otherfruits)

//Object

// const person = { firstName: 'Jhone', lastName: 'Show' }
// const otherPerson = person

// console.log(person)
// console.log(otherPerson)

// => PERSON AND OTHER PERSON POINT TO THE SAME LOCATION IN THE MEMORY

// person.firstName = 'Jhin'
// console.log(person)

// console.log(person===otherPerson) //True

//Shallow Cloning
//Cloning Arrays = >

//1st way : Spread Operator
//2nd way : Array.Slice()

// const numbers = [1, 2, 3, 4, 5] // #123abc
// const copiedNumber = numbers // #123abc
// const newNumbers = [...numbers] // #321cba
// const newNumbersSlice = numbers.slice() // #421dsa

// numbers.push(6)

// console.log(numbers)
// console.log(copiedNumber)
// console.log(newNumbers)
// console.log(newNumbersSlice)

//Cloning Objects = >
//1st way : Spread Operator
//2nd way : Object.assing()

// const person = { firstName: 'Jhone', lastName: 'Show' }
// const otherPerson = { ...person }
// const otherPersonAssign = Object.assign({}, person)
// person.firstName = 'Jhin'

// console.log(person)
// console.log(otherPerson)
// console.log(otherPersonAssign)

//Deep clonning

// const person = {
//   firstName: 'Emma',
//   car: {
//     name: 'Ford',
//     color: 'Red',
//     year: '2020',
//   },
// }

// const newPerson = { ...person, car: { ...person.car } } //It clone only two level

// ;(newPerson.firstName = 'Mia'), (newPerson.car.color = 'Blue')

// console.log(person.car)
// console.log(newPerson.car)

//If we want to deep clone than there is inBuilt method available 
//JSON stringyfy & JSON Parse
//It Remove complete reference from all levels of an object

// const newPerson = JSON.parse(JSON.stringify(person))

// newPerson.firstName = 'Mike';
// newPerson.car.color = 'Blue';


// console.log(person)
// console.log(newPerson)
