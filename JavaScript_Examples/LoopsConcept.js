// let input = prompt("Say Something!")
// while (true) {
//     input = prompt(input);
//     if (input.toLowerCase() == "don't copy") break;
// }
// alert("YOU WIN!!!");

// ----------Another Example of using "BREAK"-----------------------

for (let i = 0; i < 1000; i++){
    console.log(i)
    if (i == 5) break; //Stops at '5'
}

// ----------"FOR of" LOOP --------------------------------//

const substrings = ['red', 'blue', 'green', 'yellow'];

for (let i = 0; i < substrings.length; i++){
    //console.log(`colors in array are ${substrings[i]}`);
    
}
// To print individual colors
for (let sub of substrings) {
    console.log(sub);
    console.log(`colors in array are ${sub}`);
}

// ------------------"For in" LOOP-------------------------//

const testScores = {
    Dave: 93,
    Geet: 45,
    Theo: 56,
    Hary: 78
}

for (let person1 in testScores) {
    console.log(`${person1} scored ${testScores[person1]}`);
}
// Dave scored 93
// Geet scored 45
// Theo scored 56
// Hary scored 78

let totalscore=0;
for(let score of Object.values(testScores)){
    totalscore+=score;
}
console.log(totalsum);