// Object Creation
const person = {
    fname: 'Hridoy',
    lname: 'Rahman',
    age:24,
    color: 'black'
}

console.log('Before delete age ')
console.log(person);


// // deleting object property

delete person.age;
console.log('After deleting age property');
console.log(person);


// --------------------------------------
// --------Object Clonning---------------
// --------------------------------------

// -------------Shallow Copy----------------      It will work only 1st level of object

let person1 = {
    name:'Rakib',
    age:24
}

let person2=person1;
person2.name = 'Hridoy'

console.log(person1);
console.log(person2);



let person3 = {
    name:'Rakib',
    age:24
}

let person4 = {...person3};
person2.name = 'Hridoy'

console.log(person3);
console.log(person4);


// -----------------Deep Copy----------------
//  It will work for higher order object

let person5 = {
    name: 'Rakib',
    age: 24,
    address: {
        city:'Bogura',
        division:'Rajshahi'
    },
    getData: function(){
        console.log('This is a function')
    }
}

let person6 = JSON.parse(JSON.stringify(person5))
person6.address.city = 'Dinajpur'

console.log(person5);
console.log(person6);


// ---------------------------------------------------------------------
// -----------------------------Private Properties----------------------
// ---------------------------------------------------------------------

let Rectangle = function(height,width){

    this.height = height;
    this.width = width;

    var position = {
        x:37,
        y:100
    }


    var printProperties = function(){
        console.log('Height :',height)
        console.log('Width :',width)
    }

    this.draw=function(){
        console.log('Rectangle');
        printProperties()
        console.log('X = ',position.x,'Y = ',position.y);

    }

}

let rect = new Rectangle(32,43);
rect.draw()




// ------------------------------------------------
// -----------------Object Method And this keyword------------------
// ------------------------------------------------

const student = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

student.age=24;

student.fullName=function(){
    return this.firstName + ' ' + this.lastName
}

console.log(student)
console.log(student.fullName())



// ---------------------------------------
// --------Pure function------------------
// ---------------------------------------
// when a function return thye same result all the time then it is called a pure function

const sqrt = function(n){
    return n*n
}

console.log(sqrt(3))
console.log(sqrt(3))
console.log(sqrt(3))