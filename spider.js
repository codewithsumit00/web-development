// let smallImages = document.getElementsByClassName("oldImg");

// for ( let i=0; i<smallImages.length; i++){
//  smallImages[i].src ="spiderman_img.png";
//  console.log('value of images no ${i} is changed');
// }



// query slectors only single element select karta hai 

// console.dir(document.querySelector("h1"));
// console.log(document.querySelector("p"));
// console.log(document.querySelector("div a"));

// jab ek se jayda element ko select karna ho by using queryselectors

// console.log(document.querySelectorAll("div a"));

// para = document.querySelectorAll('p');
// console.log(para);

// // para.innerText ="sumit";

// para.innerHTML= "hello, i am a <b>peter Parker </b>";


// // how to apply style in html by using js 

// let sty = document.querySelector("h1");
// sty.style.color ="green";



// let links = document.querySelectorAll(".box  a");
// for (link of links){
//     link.style.color ="blue";
// }
// // for(let i=0; i<link.length; i++){
// //     link[i].style.color ="red";
// // }


// let ptg = document.querySelectorAll("p");

// for(ptg of ptg){
//     ptg.style.backgroundColor ="yellow";
// } 





// prectice question 

// let para = document.createlement("p");

// para.innerText = "hay i am sumit ";
// document.querySelector('body').append(para)


let div = document.creatElement("div");
let head = document.creatElement("h1");
let para = document.creatElement("p");

h1.innerText = "hello mr Gineus";
para.innerText ="me to mr ";

div.append(h1);
div.append(para);
div.classList.add("box");

document.querySelector("body").append(div);
 