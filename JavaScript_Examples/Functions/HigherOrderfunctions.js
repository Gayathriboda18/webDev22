//topic: Passing a function as Argument

function callTwice(func) {
    func();
    func();
}
callTwice(rollDice)

function callTenTimes(f) {
    for (let i = 0; i <= 10; i++){
        f();
    }
}
callTenTimes(rollDice)

function rollDice() {
    const roll = Math.floor(Math.random() * 6) + 1;
    console.log(roll);
}

//topic: Returning functions

function makeMysteryFunc() {
    const rand = Math.random();
    if (rand > 0.5) {
        return function () {
            console.log("You have selected Good No");
            console.log("Congrats!");
        }  
    } else {
        return function () {
            alert("YOU HAVE CREATED VIRUS");
            alert("DONOT CLOSE WINDOW!!!");
            alert("DONOT CLOSE WINDOW!!!");
            alert("DONOT CLOSE WINDOW!!!");
            alert("DONOT CLOSE WINDOW!!!");
            alert("DONOT CLOSE WINDOW!!!");
            alert("DONOT CLOSE WINDOW!!!");
            alert("DONOT CLOSE WINDOW!!!");
        }
    }

}

//output:
makeMysteryFunc();
// ƒ () {
//             console.log("You have selected Good No");
//             console.log("Congrats!");
//         }
// makeMysteryFunc();
// ƒ () {
//             alert("YOU HAVE CREATED VIRUS");
//             alert("DONOT CLOSE WINDOW!!!");
//             alert("DONOT CLOSE WINDOW!!!");
//             alert("DONOT CLOSE WINDOW!!!");
//             alert…


const mystery = makeMysteryFunc();

//output 
mystery
// ƒ () {
//             console.log("You have selected Good No");
//             console.log("Congrats!");
//         }
//Output
mystery()
// You have selected Good No
// Congrats!

//e.g.1. Check whether the number is between given range:
// to check num is b/w (5,50)
function isbetween(num) {
    return num >= 5 && num <= 50;
}
// to check num is b/w (10,50)
function isbetween2(num) {
    return num >= 10 && num <= 50;
}

//e.g.2. Check whether the number is between given range:

function makeBetweenFunc(min, max) {
    return function (num) {
        return num >= min && num <= max;
    }
}

isChild = makeBetweenFunc(5,10);
// ƒ (num) {
//         return num >= min && num <= max;
//     }
isChild(10);// true
isChild(1);// false