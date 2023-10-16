// Class-8 ------>>>> Error in JS

// Range Error
let num = 1;
try {
  num.toPrecision(200);   
}
catch(err){
    console.log(err.name)
}


// Syntax Error

// const name = 'Hridoy ;
console.log(name)


// Type error

const num1 = 12;
console.log(num.toUpperCase())


// Reference Error
let x = 5;

x = y + 5;
console.log(x)
try {
    x = y + 1;   // y cannot be used (referenced)
}
catch (err) {
    console.log(err.name)
}



 // Write a JavaScript function that takes a number as a parameter and throws a custom 'Error' if the number is not an integer.


function validateInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error('Invalid number. Please input an integer.');
    }
    console.log('Number is valid:', number);
}

try {
    validateInteger(12); // Valid integer
    validateInteger(2.12); // Throws an error
} catch (error) {
    console.log('Error:', error.message);
}




// Write a JavaScript program that uses a try-catch block to catch and handle a 'TypeError' when accessing a property of an undefined object.



try{
    const obj= undefined
    console.log(obj.property)
}
catch(err){
    if(err instanceof TypeError){
        console.log('Error: Property access to undefined object')
    }
    else{
        throw err;
    }
}


// Write a JavaScript function that accepts two numbers as parameters and throws a custom 'Error' if the second number is zero.


function division(n1,n2){
    if (n2===0){
     console.error('Error : Divide by 0 is not allowed');
    }
    else{
        console.log(n1/n2)
    }
}

division(2,4)
division(2,0)


// Write a JavaScript function that takes a string as a parameter and throws a custom 'Error' if the string is empty.

function ValidString(str){
    if(str.length === 0){
        throw new Error("It's an empty string")
    }
    else{
        console.log(str)
    }
}

try{
    const string1 = 'Hridoy'
    ValidString(string1)

    const string2 = ''
    ValidString(string2)
}
catch(err){
    console.log('Error : ',err.message)
}


// Write a JavaScript program that shows the use of multiple catch blocks to handle different types of errors separately.


function divide(a, b) {
    try {
        if (typeof a !== 'number' && typeof b !== 'number') {
            throw new Error('Arguments are not number')
        }
        else if (b === 0) {
            throw new Error(' Second arguments can not be zero')
        }

        console.log('Result', a / b);
    }
    catch (err) {
        console.log('Error : ', err.message)
    }
}

divide(5,4)
divide("qwe","qwe")
divide(2,0)



// Write a JavaScript program that uses a try-catch block to catch and handle a 'SyntaxError' when parsing an invalid JSON string.

function parse_JSON(jsonString) {
    try {
        const parsedData = JSON.parse(jsonString);
        console.log('Parsed data:', parsedData);
    } catch (error) {

        if (error instanceof SyntaxError) {
            console.log('SyntaxError:', error.message);
        }

        else {
            console.log('Error:', error.message);
        }
    }
}

// Example:
parse_JSON('{"name": "Rowan Octave", "age": 30}'); // Valid JSON
parse_JSON('{"name": "Rowan Octave", "age": 30,}'); // Invalid JSON