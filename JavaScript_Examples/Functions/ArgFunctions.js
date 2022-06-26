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
    for (let i = 0; i < times; i++){
        result += s1;
    }
    console.log(result);
}
num("Print me 3times", 4);

//topic:--------------------  using "RETURN" in Functions

//e.g. multiply 
function multiply(x,y){
    return x*y;
}

//e.g. Return last element of Array

function lastElement(ar){
    if (ar.length() == '0'){
        return null;
    }
    return ar.splice(-1).pop()
}
