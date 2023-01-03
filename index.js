// Import stylesheets
import './style.css';

//JavaScript Crash Course by codevolution

//print something on the console
console.log('JavaScript Crash Course by Codevolution');
console.log('Hellow World!');
console.log(22 * 1 + 100 / 2);

//variable declarations;
var grade;
let name;
//const nameOfSchool; // const declarations must be initialized;
console.log('Grade: ', age); //undefined
console.log('name: ' + name); //undefined

//variable declarations and initializations
var age = 25;
let sum = 50;
const salary = 8000;
console.log('Age: ', age);
console.log('Sum: ' + sum);
console.log('Salary: ', salary);

age = 30;
sum = 500;
//salary = 10000; //main.js:17 Uncaught TypeError: Assignment to constant variable.
console.log('Age: ', age);
console.log('Sum: ' + sum);
console.log('Salary: ', salary);

console.log(length); //0    ?
//console.log(height); //main.js:30 Uncaught ReferenceError: Cannot access 'height' before initialization
console.log(status); //
var length = 150;
let height = 55;
var status = 'active';
console.log(length); //150
console.log(height); //55

// Primitive Datatypes in JavaScript

//String
const language = 'yoog';
const country = 'usa';

//Number
const total = 0;
const PI = 3.14;

//Boolean
const isPrimeNumber = true;
const isValid = false;

//Undefined
let result;
const res = undefined;
console.log(result); //undefined
console.log(res); //undefined

//Null
const stat = null;
console.log(stat); //null

//Complex Datatypes in JavaScript

//Objects
const person = {
  firstName: 'Bruce',
  lastName: 'Wane',
  age: 30,
};

console.log(person.firstName); //Bruce
console.log(person.age); //30
console.log(person['lastName']); //Wane
person.age = 50;
console.log(person.age); //50

//Arrays
const numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); //1
console.log(numbers[numbers.length - 1]); //5
numbers[1] = 99;
console.log(numbers[1]); //99

//Assignment operators
//Arithmetic operators

let x = 10;
let y = 5;
let z = x + y;

console.log(z); //15
console.log(x % y); //0
console.log(x++); //10
console.log(++x); //12
console.log(y--); //5
console.log(--y); //3

//Comparison operators
console.log(x == y); //false
console.log(x != y); //true
console.log(10 == '10'); //true

//Strict Eqality
console.log(10 === '10'); //false

console.log(x > y); //true
console.log(x <= y); //false
console.log(!x <= y); //true

console.log(isValid == isPrimeNumber); //false

//Logical operators
console.log(x < 100 || y > 10); //true
console.log(x < 100 && y > 10); //false
console.log(x < 100 && y < 10); //true

console.log(true == true); //true
console.log(!true); //false
console.log(!false); //true
console.log(true == false); //false
console.log(true != false); //true
console.log(false == ''); //true
console.log(true === ''); //false
console.log(true == '1'); //true
console.log(true === '1'); //false
console.log(true == 1); //true
console.log(false == 0); //true
console.log(true === 1); //false
console.log(false === 0); //false

console.log(null == undefined); //true
console.log(null === undefined); //false
console.log(null == ''); //false
console.log(undefined == ''); //false

console.log(null == NaN); //false
console.log(undefined == NaN); //false
console.log(NaN == ''); //false
console.log('10' == NaN); //false
console.log('A' == NaN); //false
console.log(100 == NaN); //false
console.log(isNaN(10)); //false
console.log(isNaN('A')); //true
console.log(isNaN(null)); //false
console.log(isNaN('undefined')); //true
console.log(isNaN('')); //false
console.log(isNaN('10')); //false

//Type Conversion & Concatenation
console.log('pine' + 'apple'); //pineaple
console.log(10 + '10'); //1010;
console.log(isNaN(10 + '10')); //false
console.log(true + 2); //3
console.log(false + 2); //2
console.log('100' - 10); //90
console.log(100 / '5'); //20
console.log(isNaN(100 + '')); //false
console.log('5' + true); //5true
console.log('5' - true); //4
console.log('5' - true); //4
console.log('5' - undefined); //NaN;
console.log(100 + null); //100;
console.log(100 + undefined); //NaN
console.log(100 - null); //100
console.log(100 - undefined); //NaN

console.log(Number('5')); //5
console.log(Number(true)); //1
console.log(Number(false)); //0
console.log(Number('')); //0
console.log(Number(null)); //0
console.log(Number(undefined)); //NaN

console.log(parseInt('5')); //5
console.log(parseInt(true)); //NaN
console.log(parseInt(false)); //NaN
console.log(parseInt(null)); //NaN
console.log(parseInt('')); //NaN
console.log(parseFloat('5.256')); //5.256
console.log(parseInt('5.256')); //5

console.log(String(500)); //500
console.log((500).toString()); //500

console.log(Boolean(10)); //true
console.log(Boolean('ab')); //true
console.log(Boolean(true)); //true
console.log(Boolean(false)); //false
console.log(Boolean(0)); //false
console.log(Boolean(1)); //true
console.log(Boolean('1')); //true
console.log(Boolean('0')); //true
console.log(Boolean(null)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean(NaN)); //false
console.log(Boolean('')); //false

//Ternary Operator
const isEven = 10 % 2 == 0 ? true : false;
console.log(isEven); //true
const isOdd = 10 % 2 == 1 ? 'It is Odd' : 'Not Odd';
console.log(isOdd); //Not Odd
