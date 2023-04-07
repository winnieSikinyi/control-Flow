//Write a function that accepts an array of strings
// and console.logs each element using a for loop.


let str = ["Roll Royce","BMW","Mercedese"];
function arr(str){
for (let i = 0;i<str.length;i++){
    console.log(str[i]);
}
}

arr(str)

//Write a function that accepts an array of numbers and uses the forEach()
// method to console.log each number multiplied by 2.


//multiplication
// let nums = [25,23,34,53,56,7];
// let j = 0;
// let product = 2;
// while(j< nums.length){
//     product *= nums [j] 
//     j++;
// }
// console.log({product});

// //
// function num (numsy){
//     num.forEach(num)

// }

// let nim = [25,23,34,53,56,7];
// nim.forEach(myFunction)
// let t = 0
// let multiplication = 2
// function myFunction(t,index,multiplication){
// t[index] =multiplication*2
// }



//Write a function that takes in an array of numbers and consoles the first four 
// items multiplied by8 and the last two added by 5. Console the array with the new values
let arrayNum = [25,23,34,53,56,7];
function arry(arrayNum){
    let j = 0;
    let product = 8;
     while(j< nums.length){
        product *= nums [j] 
         j++;
    }
    console.log({product});
}







//while loop to iterate and break when the item is equal to the fourth index
let arrNum = [1,2,3,4,5,6,7,8,9];

let i = 3;

while(i = arrNum.indexOf(3)){
    console.log()
    break;
    
}



//Write a function that takes in a an array of strings and use a continue 
//a continue statement when the item is at the second index
//
let fruits= ['apple','plum','banana','strawberries','kiwi']
function frt(fruits){
    for(let i=0; i<fruits.length;i++){
        if (i===1){
            continue;
        }
        console.log("continue",fruits[i]);
}
}
frt(fruits)
