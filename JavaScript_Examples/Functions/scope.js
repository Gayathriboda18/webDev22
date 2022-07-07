//topic: SCOPE

//e.g. 

let color = 'blue'
function change(){
    color = 'red'
}

console.log(color)
//o/p: blue

change();
console.log(color);
red

//e.g
// let sea = 'blue'
// function change(){
//     console.log(sea)
// }

// change();
// blue

//e.g 
let sea = 'blue'
function change(){
    let sea = 'black'
}
change();
console.log(sea);
blue

//topic: Expressions

const add = function (x, y) {
    return x + y;
}
add(4, 5);