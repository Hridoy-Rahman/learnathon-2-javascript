console.log('Class 4')





// Event Loop Practice




// setTimeout(()=>{
//     console.log('1000')
// },1000)
// console.log(2000)


// setInterval(()=>{
//     console.log(1)
// },1000)





// JavaScript Promise Practice




// fetch('https://jsonplaceholder.typicode.com/users/1')
// .then(res=>res.json())
// .then(data=>console.log(data))


// const user= new Promise((resolve,reject)=>{
//     const num=Math.floor(Math.random()*100)

//     if(num%2===0){
//         resolve(JSON.stringify({
//             name: 'Hridoy',
//             email: 'hridoyrahman715@gmail.com',
//             location: 'Dinajpur',
//             age: 23,
//             hobby: 'Gardenning',
//           }));
//     } 
//     else
//     reject('Wrong number');
// })

// user
// .then(data=>{
//     console.log (JSON.parse(data))
// })
// .catch(err=>{
//     console.error(err);
// })




// JavaScript CallBack Function Practice 



// function myDisplayer(text){
//     console.log(text)
// }

// setTimeout(e=>{
//     function myFirst() {
//         myDisplayer("Hello");
//       }
//       myFirst();
// },2000)
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
// mySecond();



// function myFirst() {
//     myDisplayer("Hello");
//   }
  
//   function mySecond() {
//     myDisplayer("Goodbye");
//   }
  
//   myFirst();
//   mySecond();



// function displaySum(sum){
//     console.log(sum)
// }

// function calculator(n1,n2){
//     const sum = n1 + n2;
//     displaySum(sum);
// }

// calculator(1,2);



// Create an Array
// const myAray = [4,2,-1,3,-5,2,-9];

// // Call removeNeg with a Callback
// const posNum=removeNeg(myAray,(x)=> x>=0)

// function removeNeg(array,callback){
//     const newArray=[];
//     for ( const i of array){
//         if(callback(i)){                //here the callback is define in the posNum variable 
//             newArray.push(i)
//         }
//     }

//     return newArray;
// }

// console.log(posNum)