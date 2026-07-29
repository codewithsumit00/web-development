// for (let i = 5; i<=5; i++){
//     console.log ("apnacollege");
// }

// for(let i =100; i>=1; i--){
//     console.log(i ,"number");
// } 



// for(let i =1 ; i<=15;  i=i+2){
//  console.log(i);

// }

// for( let i=2; i<=10; i=i+2 ){
// console.log(i);
// }
// console.log("")
//  console.log("backword");
// for(let i=10; i>=2; i=i-2){
//     console.log (i);
// }

// for (let i=50; i>=5; i=i-5){
//     console.log(i);
// }

//  let n = prompt("write your number! ");
//  n = parseInt(n);
// for ( let i=n; i<=n*10; i=i+n){
//     console.log (i);
// }


//nested loop 
// for(let i=1; i<=3; i++){

//     for(let j=1; j<=3;j++){
//         console.log (j);
//     }
// }

 //while loop 

//  let i=0;
//  while(i<=20){
//     console.log(i);
//     i=i+2;
//  }

// let movie = "avtar";

// let guess =prompt(" guess the movie");
// while((guess!=movie)&&(guess!="quite")){
//     console.log("wrong");
//     guess =prompt("try again");

// }
// if (guess == movie){
//     console.log("congratulation");
// }

//  let i=1;
//  while(i<=20){
//     if (i == 5){
//     break;
//     }
//     console.log(i);
//     i=i+1;
// }

 let fruits = [ 'mango', 'banana', 'papaya','orange'];

 for (let i=0; i<fruits.length; i++){
    console.log(i, fruits [i]);

 }

 let hero = [[ "ironman", "spiderman", "cpamerica"],["superman" ,"wonder", "woman"]];

 for(let i=0; hero.length; i++){
   console.log ('list #${i}');

   for (let j=0; j<hero[i].length; j++){
      console.log(hero[i][j]);
   }
 }

