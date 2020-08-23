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