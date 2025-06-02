// call 

function greet(greeting) {
    console.log(greeting + ', ' + this.name);
}
const person = { name: 'Alice' };
greet.call(person, 'Hello'); // Output: Hello, Alice

//apply
function greet(greeting, punctuation) {
    console.log(greeting + ', ' + this.name + punctuation);
}
const person = { name: 'Bob' };
greet.apply(person, ['Hi', '!']); // Output: Hi, Bob!


//bind
function greet(greeting) {
    console.log(greeting + ', ' + this.name);
}
const person = { name: 'Carol' };
const greetCarol = greet.bind(person);
greetCarol('Hey'); // Output: Hey, Carol
