// function  stack(){
//     console.log ("hello");
//     console.log("inside the main function")
// }

// function demo(){
//     stack();
//     console.log("inside the calling function")
// }

// function callfunction(){
//     demo();
//    console.log("this is the main calling function");

// }
// // demo();
// callfunction();


// // visulizing the call stack

// function one(){
//     return 1;
// }

// function two(){
//     return one()+one();
// }

// function finalans(){
//     let ans = two()+one();
//     console.log(ans);
// }

// finalans();


// // set time /singtle thread in java script 

// setTimeout(()=>{
//     console.log ("this is a single thread function")
// }, 2000);
// setTimeout(()=>{
//     console.log("second time");
// },20000);

// console.log ("normal value pass");



// // call back nesting and caller this type code called the callBack hell 

// let h1 = document.querySelector("h1");

// function changeColor(color ,delay){
//     return new Promise((resolve, reject)=>{
// setTimeout(() => {
//       h1.style.color =color;
//       resolve("color change");
// }, delay);
// });
// }

// changeColor("red",1000)
// .then(()=>{
//     console.log("red color was completed");
//     return changeColor ("green",1000);
// }).then(()=>{
//     console.log("green color was completed");
//     return changeColor("yellow",1000);
// }).then(()=>{
//     console.log("yellow color was comleted");
//     return changeColor("blue", 1000)
// }).then(()=>{
//     console.log("blue color was completed");
// })   
      
// changeColor("red",1000,() => {
//     changeColor ("orange",1000,() =>{
//       changeColor("yellow",1000,()=>{
//         changeColor("pink",1000);  
//        });
//     });
// });

// function savedb(data){
//     let internetdata = Math.floor(Math.random()*10)+1;
//     if (internetdata >4){
//         console.log ("hogh speed data",data);
//     }else{
//         console.log("low speed data");
//     }
// }
// savedb =("apna coder bhai");



// //  second type code for same output 
// function database(net,cuccess,failure){
//   let internetspeed = Math.floor(Math.random()*10)+1;
//   if(internetspeed > 5){
//     success();
//   }else {
//     failure();
//   }
// }

// database(
//     "apna college",()=>{
//         console.log("high speed data");
//         database(
//             "hello coder",()=>{
//                 console.log("succes second time");
//             },()=>{
//                 console.log("waek speed");
//             }
//         );
//     },()=>{
//         console.log("again failure very weakconnection");
// function database(net){
    // return new Promise((success, reject)=>{
    //   }
// );

// let internetspeed = Math.floor(Math.random()*10)+1;
// if (internetspeed > 5){
//     success("success: data was save");
// }else{
//     reject("connection is weak");
// }
// });
// }

// // promise keyword use and .then and .catch  
// //  promise chaining

// database("apna college")

// .then(()=>{
    
//     database("hello dear").than(()=>{
//         console.log("promise was success: second time save ");
//         database("third time calling").then(()=>{
//             console.log("third time data save");
//         })
//     })
// })
// .then(()=>{
//     console.log("promise was succes second time");
// })

// .then(()=>{
//     console.log("promise was succes third time");
// })

// .catch(() =>{
//     console.log("promise was rejected");
// });

// // setTimeout(()=>{
// // color.style.color= "red";
// // },1000);

// // setTimeout(()=>{
// // color.style.color= "blue";
// // },2000);

// // setTimeout(()=>{
// // color.style.color= "yellow";
// // },2500);

// // setTimeout(()=>{
// // color.style.color= "green";
// // },3000);


// await key word are used to when multiple funcrion call at a time so so all out put give me a at a time so use await keyword give output oneby one and take a time 

function getnum (){
    return new Promise((resolv,reject)=>{
        setTimeout(()=>{
            let num = Math.floor(Math.random()*10)+1;
        console.log (num);
        resolve(); 
        },delay);
    })
}
async function demo (){
    await getnum ();
    getnum ();
    getnum();
}


