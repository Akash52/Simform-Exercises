//Select all element which class name has img-responsive
console.log(document.getElementsByClassName('img-responsive')) 

//Select single element which appeare first 
console.log(document.querySelector('.img-responsive'))

//Select All element using querySelectorAll
console.log(document.querySelectorAll('.img-responsive')) 

//Select deep element using querySelectorAll
console.log(document.querySelectorAll('.example-container li:first-child')) 

//Select all  list element
console.log(document.querySelectorAll('.example-container li')) 

//Iterate through nodelist using for loop
const items=document.querySelectorAll('.example-container li')

for(let i=0;i<items.length;i++){
    console.log(items[i].innerText)
}

//Iterate through nodelist using forEach

items.forEach(item => {
    console.log(item.innerText)
});






