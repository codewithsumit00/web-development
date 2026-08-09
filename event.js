// let btn = document.querySelector("button");
// console.dir(btn);
//  btn.onclick = function(){
//     console.log("button was click");
//     alert("warnning");
//  };


//  let btn = document.querySelectorAll("button");

//  for(btn of btn){
//     btn.onclick= sayhello; 

//  }

//  function sayhello(){
//     console.log ("button 1 was clicked ");
//     console.log ("button 2 was clicked");
//     alert("oh hello miss");
//  }

//  for(btn of btn){
//     btn.onmouseenter= sayhello;
//  }
//  function sayhello(){
//     console.log ("button 1 was clicked ");
//     console.log ("button 2 was clicked");
//     alert("oh hello miss");
 //}








//  addlisteners

// let btn = document.querySelectorAll("button");
// for(btn of btn){
// // btn.addEventListener( "click",sayhello);
// // btn.addEventListener("click",sayname);
// btn.addEventListener("dblclick", function (){
//     console.log("you double click");
// });
// }

// function sayhello(){
//     alert("hay miss ");
// }


// function sayname(){
//     alert("hay mr ");
// }





//  let btn = document.querySelector("button");


// btn.addEventListener("click",function(){
//     let h1 = document.querySelector("h1");
//     let randomcolor= getrendomcolor();
//     h1.innerText = randomcolor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomcolor;
//      console.log("color updated");
// });




// function getrendomcolor(){
//     let red =Math.floor(Math.random()*255);
//     let green =Math.floor(Math.random()*255);
//     let blue =Math.floor(Math.random()*255);

//     let color= `rgb(${red}, ${green}, ${blue})`;
//              return color;
// }

// let para = document.querySelector("p");
// para.addEventListener("mouseenter",function(){
//     console.log("para was checked");
// });


// let box = document.querySelector("div");
// box.addEventListener("mouseenter",function(){
//     console.log("mouse inside the box ");
// });


// use this keyword in java script 

// let h2 = document.querySelector("h2");
// let h4 = document.querySelector("h4");
// let btn = document.querySelector("button");

// function  colorchange(){
//     console.dir(this.innerText);
//     this.style.backgroundColor = "red";
// }
// btn.addEventListener("click",colorchange);
// h2.addEventListener("click",colorchange);
// h4.addEventListener("click",colorchange);


// use keyboeard function
// let input =  document.querySelector("input");

// input.addEventListener("keydown", function (event){
//     console.log(event.code);
//     console.log ("key was pressed");

// });




// form functionality 

let form = document.querySelector("form");
form.addEventListener("submit",function(event){
    event.preventDefault();
    alert("form is sumbited");
});