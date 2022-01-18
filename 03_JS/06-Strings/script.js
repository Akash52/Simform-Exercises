// STRING
// string[index] - get a certain character of a string
// string.length - return the number of characters in a string
// string.split(' ') - returns an array of words of a string
// string.split('') - returns an array of characters of a string
// string.toLowerCase() - returns a lowercased string
// string.toUpperCase() - returns an uppercased string
// string.includes('subtring') - checks whether a substring exists inside of a string [check the characther case]

//String Length

// const name = 'Jhone'
// console.log(name.length)

//String Case

// const meixedCaseString = 'Hello,how are you,how ?'
// const lowerString = meixedCaseString.toLowerCase()
// const upperString = meixedCaseString.toUpperCase()

// console.log(lowerString, upperString)

// Searching for a Substring

// indexof()

// const firstIndex = meixedCaseString.indexOf('how')

// const lastIndex = meixedCaseString.lastIndexOf('how')
// console.log(firstIndex, lastIndex)

//Includes()  //Return TRUE || FASLSE

// const present = meixedCaseString.includes('are')
// console.log(present)

//Getting Substring

// const exampleString = 'hotdog'

//slice();

// console.log(exampleString.slice(3, 6)) //dog

//Split

// console.log(exampleString.split(''))

//Reverse a string

// const exampleString = ' test Hello'

// const reverseString = exampleString.split('').reverse().join('')
// console.log(reverseString)

//Repeat()

// console.log(reverseString.repeat(5))

//Trim

// console.log(exampleString.trim())

//Sting Exercise

// const guestList = 'Our guest are: emma, jacob , isabell, ethan'
// console.log(guestList.length)
// console.log(guestList.toUpperCase())
// console.log(guestList.includes('ethan'))

// Common string methods

// let emaill = 'mario@gmail.com'

// let result = emaill.lastIndexOf('a')

// let result = emaill.slice(2, 5) // 2 to 5 return

// let result = emaill.substr(4, 6) // 4 to + 6 character return

// let result = emaill.replace('m', 'w')

// let result = emaill.replace('a', 'w')

// console.log(result)

//-->Old Way Concatenation
// console.log('My name is' + name + ' and my age is :' + age)

//-->New Way Template String
// const hello = `My Name is ${name} and i am ${age}`
// console.log(hello)
// const s = 'Hello World'
// console.log(s.length)
// console.log(s.toLowerCase())
// console.log(s.toUpperCase())
// console.log(s.substring(0, 5).toUpperCase())
// console.log(s.split(''))


//Problem
// function isIsogram(word){
//     word=word.toLowerCase();
//     let i,j;
//     for(i=0;i<word.length;i++){
//         for(j=i+1;j<word.length;j++){
//             if(word[i]===word[j]){
//                 return false;
//             }
//         }
//     }
//     return true;
// }
// const result=isIsogram("Akaash");
// console.log(result)
// TC : O(n2)