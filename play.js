const person = {
name : 'Max',
age  : 29,
greet: function() {
    console.log("Name is :"+ this.name);
}
};
console.log (person);
person.greet();