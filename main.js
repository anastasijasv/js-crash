console.log('Hello World');

const name = 'John';
const age = 35;

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);
// Template String
console.log(`My name is ${name} and I am ${age}`);

const string = 'Hello World!';
console.log(string.toUpperCase());

const s = 'technology, computers, it, code';
console.log(s.split(', '));

// Arrays - variables that hold multiple values
const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits[1]);
fruits[3] = 'grapes';
fruits.push('mangos');
fruits.unshift('strawberries');
console.log(fruits);

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges'));

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 35,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 Main St.',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName, person.lastName);
console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address: { city }} = person;
console.log(city);

person.email = 'john@gmail.com';
console.log(person);



























