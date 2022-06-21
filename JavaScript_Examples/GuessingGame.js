
let maximum = parseInt(prompt("Enter the Maximum Number!"));

// This loop is for when "NaN" is present in "maxium"
// i.e. when all alphabets are given by user the "NaN" will be stored in "maximum"
while (!maximum) {
    maximum = parseInt((prompt("Enter Valid Number")));
}

// Generate a no between 1 and maximum number
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = (prompt("Enter your guess!!")); // guess will be stored as string
let attempts = 1 

//Try until the guess is targetNum
while (parseInt(guess) != targetNum) { // guess is changes to numeric (parseInt)
    // if you wanna quit
    if (guess == 'q' || guess == "quit") break; // guess is string
    attempts++;
    if (guess > targetNum) {
        guess = prompt("You are guess is too high!");
    }else if (guess < targetNum){
        guess = prompt("you are guess is too low!");
    } else {
        prompt("your guess is not too high or too low");
    }

}

if (guess == 'q' || guess == "quit") {
    alert("OK, YOU QUIT!");
} else {
    console.log(`you guessed at ${attempts} attempt`);
}