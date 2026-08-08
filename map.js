// let num = [1,2,3,4,5];

//  let double = num.map((num)=> {
//     return num%2!=0;
    
// });



// let student = [
//     {
//         name : "rahul",
//         marks: 95,
//     },

//     {
//         name: "abhi",
//         marks: 94.4,
//     },

//     {
//         name: "ram",
//         marks: 84,
//     },
// ];


// let gpa = student.map((num)=>{
//     return num.marks/10;
// });


// reduce function 

// let arr = [1,2,3,4,5,6];

// let value = arr.reduce((red, el) => red+el);
// console.log(value);

 

// find the maximum valure by using reduce method 

// let val = [3,35,57,3,56];
//  let max = -1;

// for(let i=0; i<=val.length; i++){
   

//     if(max < val[i]){
//         max = val[i]
//     }
// }

// console.log(max);


// let max = val.reduce((red, el) => { 
//     if (max < el) {
//         return el;
//     } else {
//         return max;
//     }
// });

// console.log(max);








 let array =  [20,10,30,40,60];

 let div = array.every((el) => el %10==0);
 console.log(div);