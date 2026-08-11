// cpnvert JSON DATA To java script obj data by this method 


// let url = "https://catfact.ninja/fact";

// fetch(url).then((response)=>{
//     console.log(response);
//     response.json().then((data) =>{
// console.log(data);
//     });
    
// }).catch((err) =>{
//     console.log (err);
// });




//async and await keyword used abd Axios keyword for sending a request 
// async function getvalue(){
//    try {
// let res = await axios.get(url);
// console.log(res.data.fact);

// }catch (err){
//     console.log( err);
//   }
// }


// apply java script API in html code changes

let btn = document.querySelector(".clickable");

// btn.addEventListener("click", async()=>{
//     let result =  await getfect();
//     console.log(result);
//     let p = document.querySelector(".para");
//     p.innerText = result;
// });

// let url = "https://catfact.ninja/fact";

// async function getfect(){
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
    
//     } catch(error){
//         console.log("error show",error);
//         return "No fact found";
//     }
// }

let url2 = "https://dog.ceo/api/breeds/image/random"


btn.addEventListener("click",async() =>{
    let link = await gatimg();

    let img = document.querySelector("#result");
    img.setAttribute("src",link);
    console.log(link);
});

async function gatimg(){
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch(err){
        console.log(err);
        return"/";
    }
}
