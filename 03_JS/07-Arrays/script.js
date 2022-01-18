const fruits=['Apple','Mango','Banana']

// for(let i=0;i<fruits.length;i++){
//     console.log(fruits[i])
// }

//Array push - add back element
// fruits.push('Watermelon')
// console.log(fruits)

//Array pop - remove back element
// fruits.pop('Banana')
// console.log(fruits)

//Array Shift - remove back element

//Array UnShift - add front element
// fruits.unshift('Mango')
// console.log(fruits)

// Array Splice - remove & also add new element random position
// fruits.splice(2, 0, 'ABC', 'ABC')
// console.log(fruits)

//Array Slice - Copies certain part
// const spliceArray = fruits.slice(1, 2)
// console.log(spliceArray)

// Array ForEach - its return undifined value
// fruits.forEach((name) => {
//   console.log(name)
// })

//Example
// const numbers = [12, 12, 12]
// let sum = 0

// numbers.forEach ((number) => {
//    sum += number
// })
// console.log(sum)

//let's Explore Higher Order Function


// const inventory = [
//     { price: 5, name: 'eggs' },
//     { price: 4, name: 'milk' },
//     { price: 3, name: 'brad' },
//     { price: 1, name: 'brad' },

//   ]

// Array Map

//   const prices = inventory.map((item)=>item.price)
//   console.log(prices)

// const items = inventory.map((item)=>item.name)
// console.log(items)

//Array Filter

// const numbers = [1,2,3,4,5,-5,6,-6];

// numbers.filter((number)=>{
//     return number >=0;  //Not work bcz filter return new array
// })

// console.log(numbers)

// const positiveNumber = numbers.filter((number)=>{
//     return number >=0;
// })

// console.log(positiveNumber)

// const itemPrice = inventory.filter((item) => item.price >= 2) //Filter
// console.log(itemPrice)
// const itemName = itemPrice.map((item) => item.name) //Map
// console.log(itemName)
// itemName.forEach((item) => console.log(`Fruit name ${item}`)) // For Each

//Array Reduce

// let total = 0;

// const number = [1,2,3,4,5,7,8];

// const num = number.reduce((acc,val)=>{
//     return acc + val
// },0)

// console.log(num)

//Array Find //Return fisrt value not look for other

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const value = numbers.find((number) => {
//   return number > 5
// })
// console.log(value)

// const states = ['Gujarat', 'Mp', 'UP', 'KN', 'KP']
// const state = states.find((state) => state.startsWith('K'))
// console.log(state)

//Array Includes => Does this array including something ?
//=> Includes Method is case sensitive

// const array1 = [1, 2, 3, 4]
// console.log(array1.includes(1))

// const pets = ['cat', 'dog', 'lama']
// console.log(pets.includes('dog'))

// if (fruits.includes('Apple')) {
//   console.log('We have fruit')
// } else {
//   console.log('Sorry')
// }

//Array Sort

// fruits.sort()
// console.log(fruits)

//Array Some => Returns true if atleast one element passes the test

// const array = [1, 2, 4, 5]
// const greaterThan3 = (num) => num > 3
// console.log(array.some(greaterThan3))

// const array = [1, 2, 4, 5]
// console.log(array.some((el) => el > 3))

//Array Every => Return true if only every element passes the test
// console.log(array.every((el) => el > 3))











