const myMath = {  //method 
    PI: 3.14159,
    square: function (num) { 
        return num * num;
    },
    cube: function (num) { 
        return num ** 3;
    },
    //Another way to define function
    quadraplie(sq) {
        return (sq*sq) ** 2;       
    }

}
//--Output--// 
myMath // {PI: 3.14159, square: ƒ, cube: ƒ}
myMath.PI // 3.14159
myMath.cube
 // ƒ (num) { //function for method cube
//         return num ** 3;
//     }
myMath.cube(3) // 27
myMath.square
// ƒ (num) { //function for method square
//         return num * num;
//     }
myMath.square(3) // 9
myMath['cube'](4) //64

const Myhome ={
    sqft : 1443,
    bhk :3,
    color :'almond white',
    cHome() {
        console.log(`${this.color}, ${bhk}bhk`); // color will be printed, bhk will not be
    }
}

//topic TRY AND CATCH

try {
    Hello.toUpperCase();//returns error      
}
catch {
    console.log("ERROR !!!!")
}
// hello.toUpperCase(); // returns error and won't allow to execute another line
console.log("AFTER!") //if trycatch is used then it allows execute next line 
 