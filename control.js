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

function items (Arry){

    let result = [];
    Arry.forEach(function(item){
        result.push(item*2)
        
    });
    console.log(result);
}
let Arry = [12,2,4,3,5,7];
items(Arry)




//Write a function that takes in an array of numbers and consoles the first four 
// items multiplied by8 and the last two added by 5. Console the array with the new values

function arry(arrayNum){
    for (let i=0;i<4;i++){
        arrayNum[i] *=8;
    }

    for (let i = arrayNum.length -2; i < arrayNum.length; i++){
        arrayNum[i] += 5
    }
 console.log(arrayNum);
}
let arrayNum = [25,23,34,53,56,7];
arry(arrayNum)








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
