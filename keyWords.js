// this keywords ka use ham kisi object ke variable ko use karne ke liye use karte hai 
const student = {
    name: "sumit",
    age: 22,
    markseng: 75,
    math: 95,
    physics: 84,
    getAvg(){
        let avg =(this.math +this.physics)/2;
        console.log('${this.name} got avg marks = ${avg}');
    }
}

// try and catch keywords use for find the error 

console.log("hello");

console.log("mr abhi");
try{
    console.log(a);
}catch{
    console.log("give a error because a is not creat");
}