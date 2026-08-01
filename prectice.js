// let array = [4,5,6,7,8];
// let num = 5;
// function getele (array , num){
//     for (let i=0; i<array.length; i++){
//         if (arr[i] >num){
//             console.log(array[i]);
//         }
//     }

// }

getele(array,num);

let str = "abcdkgnefghtij";

function ansd ( str){
    let ans = ""
    for (let i=0; i<str.length; i++){
        let curr =str[i];
            if(ans.indexOf(curr)==-1){
                ans += curr;
        } 
    }
    return ans ;
}
ansd(str);
