//IF ELSE

// const age=24;

// if(age>18){
//     console.log('You may Enter')
// }else if(age===18){
//     console.log('you just turned 18,')
// }else{
//     console.log('Grew Up!')
// }

// if({}){
//     console.log('IN HERE')
// }else{
//     console.log('NO,IN HERE')
// }

//Falsy value

//false
//0
//(' ')
//null
//undefined
//NaN

//True

// 1
// 'Hello'
// 58
// {}
// []

// const dogs = 5

// if(''){
//     console.log(`You Have ${dogs}`)
// }else{
//     console.log(`You have no Dogs.`)
// }

//Logic Operators PT-2

// const age = 19
// const isCool = true

// is cool and is above the age of 18

// console.log(isCool && age > 18)

// if (isCool && age > 18) {
//   console.log('You may Enter!')
// } else {
//   console.log('You cannot Enter')
// }

// console.log('Truthy' && 5 && 'Test' && 999) //Evalute Left to Right =>999
// console.log('Truthy' && 0 && 'Test' && 999) // if one value is Falsy than return falsy value

// console.log('Truthy' || 0 || 'Test' || 999) // Return Truthy
// console.log(undefined || 0 || '' || null) // If all falsy value than return last flasy value

// console.log(!true)
// console.log(!!false) // It return Boolean

// const value = false
// if (!!value) {
//   console.log('value is TRUTHY')
// } else {
//   console.log('value is FALSY')
// }

//SWITCH

const superHero = 'Black Window';

switch (superHero) {
  case 'Iron Man':
    console.log('I am Iron man...')
    break
  case 'Thor':
    console.log('That is my Hammer...')
    break
  case 'Captain America':
    console.log('Never Give Up!')
    break
  case 'Black Widow':
    console.log('One Shot, one kill')
    break
  default:
    console.log('Enter a valid superhero name')
}

//Ternary Operator

const age = 18

age >= 18 ? console.log('You can drive') : console.log('You can not drive.')


