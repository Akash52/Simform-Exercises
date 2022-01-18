const Person={
    firstname:'Steav',
    lastname:'Smith',
    age:19,
    email:'steave@gmail.com',
    hobbies:['Music','sports'],
    address:{
        city:'Palitana',
        state:'GU'
    },
    getBirthYear: function(){
        return 2022-this.age;
    }
}

console.log(Person.firstname)
console.log(Person.lastname)
console.log(Person.age)
console.log(Person.address)
console.log(Person.address.city)
console.log(Person.getBirthYear())

const people=[
    {name:'John',age:30},
    {name:'Mike',age:30},
    {name:'Sky',age:18}
];

for(let i=0;i<people.length;i++){
    console.log(people[i]);
    console.log(people[i].name);
}


