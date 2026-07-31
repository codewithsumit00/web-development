 function name(){
   console.log ("ronaldo");  
 }

function age(){
   console.log (52);
}
//function calling
// name();
// age();

 
// creat a function to roll a dice and always display the value of dice 1to 6 
function ludo (){
   let random = Math.floor(Math.random() *6 )+1;
   console.log (random);
}


// ludo ();
// ludo ();
// ludo ();
// ludo ();


//funci=tion with arguments 

function marks (a,b){

   console.log (a+b);
   console.log(a*b);
}

// marks(5,9);

function name(name ,age){
   console.log("name is",name,"age is",age);
}

// name("vaishai", 26);
// name("adil");


// average of 3 number 

function average(a,b,c){
   console.log((a+b+c)%3);
   console.log((a+b+c)/3);
    
}
// average(5,5,5);
// average(4,2,1);


//create a multiplication 

function table (a){
   for (let i =1; i<=10; i++){
      console.log(i*a);
   } 
}

//table(5);

// return the sum of numbers from 1 to n 

function Return (n){
   let sum = 0;
     for (let i=1; i<=n; i++){
      sum = sum+i;
       console.log(sum);
     }
       return sum; 
}
 
 Return(5);


 // concatination 
 let str = ["hi", "hello " , "bye"];

 
 function concat(str){
   let result = "";

   for (let i=0; i<str.length; i++){
      result +=  str[i];
      
   }


   return result;
 }

 
