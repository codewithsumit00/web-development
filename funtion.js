//  function name(){
//    console.log ("ronaldo");  
//  }

// function age(){
//    console.log (52);
// }
// //function calling
// // name();
// // age();

 
// // creat a function to roll a dice and always display the value of dice 1to 6 
// function ludo (){
//    let random = Math.floor(Math.random() *6 )+1;
//    console.log (random);
// }


// // ludo ();
// // ludo ();
// // ludo ();
// // ludo ();


// //funci=tion with arguments 

// function marks (a,b){

//    console.log (a+b);
//    console.log(a*b);
// }

// // marks(5,9);

// function name(name ,age){
//    console.log("name is",name,"age is",age);
// }

// // name("vaishai", 26);
// // name("adil");


// // average of 3 number 

// function average(a,b,c){
//    console.log((a+b+c)%3);
//    console.log((a+b+c)/3);
    
// }
// // average(5,5,5);
// // average(4,2,1);


// //create a multiplication 

// function table (a){
//    for (let i =1; i<=10; i++){
//       console.log(i*a);
//    } 
// }

// //table(5);

// // return the sum of numbers from 1 to n 

// function Return (n){
//    let sum = 0;
//      for (let i=1; i<=n; i++){
//       sum = sum+i;
//        console.log(sum);
//      }
//        return sum; 
// }
 
// // Return(5);


//  // concatination 
//  let str = ["hi", "hello" , "bye"];

 
//  function concat(str){
//    let result ="";

//    for (let i=0; i<str.length; i++){
//       result +=  str[i];
      
//    }


//    return result;
//  }

//  //scope  tell us that kon se variable ko kaha p use karna hai kaha p nahi  
//  let sum = 50;

//  function clasum (a,b){

//    console.log(sum);
//  }
// calsum(2,3);
// console.log(sum);


// //multiple greet 

// function multiplgreet(fun ,n){
//    for (let i= 1; i<n; i++){
//       func();
// }
// }

// let greet = function(){
//    console.log("hello");
// }

// multiplegrrt(greet ,2)

// // hieger function order 


// function odd (request){
//    if (request=="odd"){
//       let odd =function(n){
//          console.log(!(n%2==0));
//       }
//       return odd;
//    }else if (request =="even"){
//       let even = function (n){
//          console.log(n%2==0);
         
//          }
//          return Even;
//       }else {
//          console.log("wrong reqeust ")
//       }
//  }


// const cal = {
//     num50,
//  add: function (a,b){
//    return a+b;

//  },
//  sub : function (a,b){
//    return a-b;
//  },

//  mul: function (a,b){
//    return a*b;
//  }
// };


const num = {
   add (a,b){
      return a+b;
   },
   sub (a,b){
      return a-b;
   }
};