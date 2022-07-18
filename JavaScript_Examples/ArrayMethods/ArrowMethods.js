// const add=function(x,y){
        returnx+y;
//}
//topic: "=>" using arrow as function

const add = (x, y) => {
    returnx + y;
}

//e.g. greeting person with name
const greet = (name) => {
    console.log(`"Hey ${name}!"`);
}

//e.g
//Syntax error '{}' curly braces 
const rollDice1 = () => {
    Math.floor(Math.random() * 6) +1
}
// Implicit return : '( )' braces acts as return
const rollDice = () => (
    Math.floor(Math.random() * 6) +1
)
//output:
// rollDice();
// 5
// rollDice();
// 4
// rollDice();
// 6

//e.g

const total = (X, Y) => X + Y

// e.g: Use in Map functions 

const actual = fullNames.map(fn => fn.first);
