
//1. const myText = document.getElementById("myText");
// const mySubmit = document.getElementById("mySubmit");
// const resultElement = document.getElementById("resultElement");

// let age;

//  mySubmit.onclick = function(){
//         let age = 22;
//         age = myText.value;
//         age = Number(age);

// if(age >= 18){
//     resultElement.textContent = `you are allowed to drive you are allowed to have yor driving licence`;
// }
//  if(age <= 18){
//     resultElement.textContent = `you are not allowed to drive you have to be at reast 18+ years old`;
// }
//  }


//2. for(let i = 0; i <= 20; i++){
//     if(i == 13){
//         continue;
//     }else{
//         console.log(i)
//     }
   
// }

//3. let fruits = ["orange","apple", "banana", "coconate", "mango"];

// fruits.push("coconate");
// fruits.pop()
// fruits.unshift("coconate");
// fruits.shift()

// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);

// let numOfFruits = fruits.length;
// console.log(numOfFruits);

// for(let i = 0; i > fruits.length; i++){
//     console.log(fruits[i]);
// }


function tellFortune( numberOfChildren, partnersName, Location, jobTitle,){
    var fortune = "you will be a " + jobTitle + " in " + Location + " , and married to " + partnersName + " with " + numberOfChildren + " kids. "
    
    console.log(fortune);
    }
    tellFortune(2, "urban", "kigali", "software engineering", );
    tellFortune(3, "fifi", "bugarama", "nursing", );
    tellFortune(8, "owen", "kamembe", "teacher", );
  
  


