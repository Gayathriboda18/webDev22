//============================ Simple function example
function SayHi() {
    console.log("hey ya!");
}

SayHi()

//================================= Arguments function=================================//
function intro(courseName) {
    console.log(`Welcome to ${courseName} course`);
}

intro("python")

//----------------- EXAMPLE 1-------------------------// 
function rant(message) {
    console.log(`${message.toUpperCase()}`);
    console.log(`${message.toUpperCase()}`);
    console.log(`${message.toUpperCase()}`);
}
rant("I hate beets");

//--------------------------- Multiple Arguments ---------------//

function bTech(year, course) {
    console.log(`btech ${year} and ${course} course`);
}

bTech('1', 'CSSE');

// -------------------Example 2 -------------------
function num(s1, times) {
    result = ' ';
    for (let i = 0; i < times; i++) {
        result += s1;
    }
    console.log(result);
}
num("Print me 3times", 4);

//topic:--------------------  using "RETURN" in Functions

// //e.g. multiply
// function multiply(x, y) {
//     return x * y;
// }

//todo 
//e.g. Return last element of Array

function lastElement(ar) {
    if (ar.length() == '0') {
        return null;
    }
    return ar.splice(-1).pop() 
}

function lastElement(test) {
if (test.length == 0)
    return null;
else
    return test[test.length - 1];
}
// //e.g. Return 1st letter of string Capitalize

// function capitalize(word){
//     let first = word.charAt(0 ).toUpperCase();
//     let rest=word.slice(1);
//     return first+rest
// }

// //e.g. Sum of an Array
// function sumArray(array) {
//   let sum = 0;

//   for (let i = 0; i < array.length; i += 1) {
//     sum += array[i];
//   }
  
//   return sum;
// }

// sumArray([2, 4, 56, 6]);

//e.g. Return weekDAY
//Solution 1 
const daysArray= {1:'Monday', 2:'Tuesday', 3:'Wednesday', 4:'Thursday', 5:'Friday', 6:'Saturday',7:'Sunday'};

function returnDay(number){
    if(number<1 || number >7){
        return null;
    }
    else{
     return daysArray[number];   
    }
}

//Solution 2
// const weekDAY = new Array(7);
// weekDAY[1] = 'Monday' ;
// weekDAY[2] = 'Tuesday';
// weekDAY[3] = 'Wednesday';
// weekDAY[4] = 'Thursday';
// weekDAY[5] = 'Friday';
// weekDAY[6] = 'Saturday';
// weekDAY[7] = 'Sunday';

// function returnDay(x){
//   if(x < 1 || x > 7) {
//     return null;
//   }
//   else {
//     return weekDAY[x];
//   }
// }