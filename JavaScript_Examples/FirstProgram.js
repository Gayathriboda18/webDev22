let colors = ["Violet", "Indigo", "Blue"];
colors.push("Green");
colors.push("yellow");
console.log(colors);

//-------------TO ADD ELEMENT--------------------------//
// ['Violet', 'Indigo', 'Blue', 'Green', 'yellow']
// colors.push("Dark Violet");
// colors.unshift("Black");
// colors
// (7) ['Black', 'Violet', 'Indigo', 'Blue', 'Green', 'yellow', 'Dark Violet']

//------------TO DEL ELEMENT------------------------//
//  ['Violet', 'Indigo', 'Blue', 'Green', 'yellow']
// colors.pop();
// 'yellow'
// colors.shift();
// 'Violet'
// colors
// ['Indigo', 'Blue', 'Green']

//----------------- CONCAT------------------------------//
// let pastelColors = ["Peach", "Grey", "skyBlue"];
// let allColors = colors.concat(pastelColors);
// console.log(allColors);

//--------------includes-----------------------------//
// console.log(allColors.includes("Red"));
// console.log(allColors.includes("P"));
// console.log(allColors.includes("Grey"));

//-----------indexOf------------------------------//
// console.log(colors);
// console.log("index of 'P' ",allColors.indexOf("P")); // returns -1 char is not found
// console.log("index of skyblue",allColors.indexOf("skyBlue"));

//-------------slice & splice --------------------//
console.log(colors);
console.log(colors.slice(3));
console.log(colors.slice(2, 5));
console.log(colors.splice(-1));

//----------Splice-----------------------------------//
colors
['Violet', 'Indigo', 'Blue', 'Green']
colors.splice(2, 1);
['Blue']
colors
['Violet', 'Indigo', 'Green']

// deleting multiple items
delOddNo = [2, 4, 6, 3, 1, 7];
[2, 4, 6, 3, 1, 7]
delOddNo.splice(3, 3);
[3, 1, 7]
delOddNo
[2, 4, 6]

// insert new ELEMENT
colors
['Violet', 'Indigo', 'Green']
colors.splice(1, 0, "Purple")
colors.splice(1, 0, "Purple")
colors
['Violet', 'Purple', 'Purple', 'Indigo', 'Green'] // added 2X purple

// insert more elements using splice
colors
['Violet', 'Purple', 'Purple', 'Indigo', 'Green']
colors.splice(2, 0, "Light-green", "Light-Pink", "Light-orange");
colors
['Violet', 'Purple', 'Light-green', 'Light-Pink', 'Light-orange', 'Purple', 'Indigo', 'Green']

// Deleting more elements
colors
['Violet', 'Purple', 'Light-green', 'Light-Pink', 'Light-orange', 'Purple', 'Indigo', 'Green']
colors.splice(4, 2, "Deleted purple and light org");
['Light-orange', 'Purple']
colors
['Violet', 'Purple', 'Light-green', 'Light-Pink', 'Deleted purple and light org', 'Indigo', 'Green']

//=------------------------ Reference--------------------------------------------//

// [] === []
// false

// num = [1,2,3];
// [1, 2, 3]
// numsCopy= num;
// [1, 2, 3]
// num.push(4);
// 4
// numsCopy
// [1, 2, 3, 4]
// numsCopy.pop();
// 4
// num
// [1, 2, 3]
// num === numsCopy
// true