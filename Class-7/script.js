
// ----------------------------------------------------------
// -------------------------Destructuring---------------------
// ------------------------------------------------------------

// const obj={
//     a:1,
//     b:2,
//     c:3
// }

// const {a,b}=obj
// console.log(a,b);


// const obj = { a: 1, b: { c: 2 } };

// const {
//     a,
//     b: { c },
// } = obj;

// console.log(c)               //2


// const arr=[1,2,3,4,5,6];
// const [a,,b,,c]=arr

// console.log(a,b,c)               //1,3,5


// const arr=[1,2,[100,200,300],3,4]

// const [a,,[,b,c]]=arr
// console.log(a,b,c)                  //1,200,300




// ----------------------------------------------------------
//---------------------Spread Operator------------------------
// -----------------------------------------------------------

// const arry1=[1,21,32,4]
// const arry2=[34,5,34,235,6]
// const finalArry=[...arry1,...arry2]
// console.log(finalArry)                      //1,21,32,4,34,5,34,235,6



// const obj1={
//     name: 'hridoy',
//     age: '24'
// }

// const obj2={
//     address:{
//         District: "Bogura",
//         Thana: "Gabtali"
//     }
// }

// const object={...obj1,...obj2}
// console.log(object);                     //  {
//     name: 'hridoy',
//     age: '24',
//     address: { District: 'Bogura', Thana: 'Gabtali' }
//   }





// ---------------------------------------------
//------------------ Rest operator---------------
// ---------------------------------------------

// function average(...args){                  //(...args) as rest Operator
//                                             // rest operator that acts like a spread operator 
//                                             // but it works in function
//     console.log(args)

//     let avg=args.reduce(function (previousValue,currentvalue){
//         return previousValue + currentvalue;
//     },0)/args.length;               //0 as initial value

//     return avg;
// }

// console.log(average(1,2,3,4,5,6))




// ------------------------------------------
// -------------- Fill Method---------------
// --------------------------------------------
// fill method is a method that fill the array with the same value that is passed in the method
//it change the original array

// const arr=[1,2,3,4,5]
// arr.fill(45)
// console.log(arr)



// const arr=[1,2,3,4,5,6,7,8]
// arr.fill(45,3,5)                  // start index 3 and end index 5  and fill with 45
// console.log(arr)


// ---------------------------------------------
// --------------Find Method-----------------
// --------------------------------------------


// it returns a specific number from the array
// it only returns only one value if the condition is true

// const arr=[12,23,35,456,74,,32,75]
// const result=arr.find(x=>{
//     return x%5===0 && x%7===0;
// })

// console.log(result)


// -------------------------------------------
// -----------------For In Loop----------------
// -----------------------------------------------


// const arry=[12,38,3,4,5,23,34,54]

// for(element in arry){
//     console.log(element)
// }

// const obj={
//     name: "Hridoy",
//     age: 24,
//     edu: 'BSc'
// }

// for (property in obj){
//     console.log(`${property} : ${obj[property]}`)
// }

// const obj={
//     name: "Hridoy",
//     age: 24,
//     edu: 'BSc'
// }

// for (property in obj){
//     console.log(`${property} : ${obj[property]}`)
//     delete obj.age
// }



// const obj = { a: 1, b: 2, c: 3 };

// // Deleting a property before it is visited
// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
//   delete obj.c;
// }

// const obj2 = { a: 1, b: 2, c: 3 };

// for (const prop in obj2) {
//   console.log(`obj2.${prop} = ${obj2[prop]}`);
//  delete obj2.c
// }


// -------------------------------------------------
// --------------For Of Loop------------------------
// -------------------------------------------------

// const arry=[12,38,3,4,5,23,34,54]

// for(element of arry){
//     console.log(element)
// }




// -----------------------------------------------
// ----------------Map---------------------------
// ----------------------------------------------

// const student = new Map([
//     ['Hridoy', 123],
//     ['Mugdho', 100],
//     ['Arif', 200]
// ])

// student.set('Rizwan', 300)
// x = student.get('Rizwan')
// console.log(student.size)
// console.log(student.delete("Arif"))
// console.log(student.clear())
// console.log(student)



// -------------------------------------------------
// ----------------Set------------------------------
// -------------------------------------------------

// const text = new Set();

// text.add("I ");
// text.add("Love");
// text.add("JavaScript");

// console.log(text.keys())
// console.log(text.entries())
// console.log(text.has('JavaScript'))
// console.log(text.delete('JavaScript'))
// console.log(text.clear())

// let sentence = "";
// text.forEach (function(value) {
//   sentence += value;
// })

// console.log(text)




// ---------------------------------------------------
// ----------------String Methods-------------------------
// ----------------------------------------------------

// const string='My name is Hridoy Rahman. I love coding'
// const text='5'

// console.log(text.padStart(10,'0'))
// console.log(text.padEnd(10,'0'))

// console.log(string.length)
// console.log(string.slice(4,13))
// console.log(string.slice(-19))
// console.log(string.slice(-19,-5))
// console.log(string.slice(-19,-5))
// console.log(string.substring(9,15))

// console.log(string.replace('coding','JavaScript'))
// console.log(string.replace(/Coding/i,'JavaScript'))             
// console.log(string.toLowerCase())             
// console.log(string.toUpperCase())             
// console.log(string.trim())             



// -------------------------------------------------------
// ---------------Array.flat() and Array.flatMap()--------
// -------------------------------------------------------
// const myArr = [[1,2],[3,4],[5,6]];
// console.log(myArr.flat())

// const myArr = [1, 2, [3, [4, 5, 6], 7], 8];
//  console.log(myArr.flat(2))


// const myArr = [1, 2, 3, 4, 5, 6];
//  console.log(myArr.flatMap((x) => x * 2))



// ---------------------------------------------------------------
// ------------------Optional chaining---------------------------
// -------------------------------------------------------------


// const adventurer = {
//     name: 'Alice',
//     cat: {
//       name: 'Dinah',
//     },
//   };
  
//   const catAge = adventurer.cat?.name;
//   console.log(adventurer.dog?.name);





// Write a JavaScript program to reverse the order of characters in the string.

// const reverseString=str=>[...str].reverse().join('')


// console.log(reverseString('rakib'))
// console.log(reverseString('Hridoy'))



// Write a JavaScript program that takes a predicate and an array, like Array.filter(), but only keeps x if pred(x) returns false.
// Filters an array's values based on a predicate function, returning only values for which the predicate function returns false.


// const reject=(pred,array)=>array.filter((...args)=>!pred(...args));

// console.log(reject(x=>x%2===0,[1,2,3,4,5]))


// const reject = (pred, array) => array.filter((...args) => !pred(...args));

// console.log(reject(x => x % 2 === 0, [1, 2, 3, 4, 5]));

// console.log(reject(word => word.length > 4, ['Apple', 'Pear', 'Kiwi', 'Banana']));
