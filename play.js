const person = {
name : 'Max',
age  : 29,
greet: function() {
    console.log("Name is :"+ this.name);
},
greet_diff (){
console.log("Name is :"+ this.name);
}
};
console.log (person);
person.greet();

const copiedPerson = {...person};
console.log(copiedPerson);

const hobbies = ['Sports','cooking'] ;
for(let hobby of hobbies)
{
    console.log(hobby);
}
console.log(hobbies.map(hobby => 'Hobby  : '+hobby));
const toArrayTypeOne = (arg1,arg2,arg3) => {
    return [arg1,arg2,arg3];
};
console.log(toArrayTypeOne(1,2,3));
const toArrayTypeTwo = (...args) => {
    return args;
};
console.log(toArrayTypeTwo(1,2,3));