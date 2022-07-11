numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

//topic: ForEach
numbers.forEach(function (el) {
    console.log(el);  
})

//topic: MAP

numbers.map(function (num) {
    return num * 2;
})

const fullNames = [{ first: 'Albus', last: 'Dumbledore' },
    { first: 'Harry', last: 'Potter' },
    { first: 'Hermione', last: 'Granger' },
    { first: 'Ron', last: 'Weasley' },
    { first: 'Rubeus', last: 'Hagrid' },
    { first: 'Minerva', last: 'McGonagall' },
    { first: 'Severus', last: 'Snape' }];

//e.g. Returns First names 
const firstNames = fullNames.map(function(fname){
    return fname.first;
})
// ['Albus', 'Harry', 'Hermione', 'Ron', 'Rubeus', 'Minerva', 'Severus']

//e.g. Returns full name 
const Names = fullNames.map(function(fname){
    return `${fname.first} ${fname.last}`;
})
// ['Albus Dumbledore', 'Harry Potter', 'Hermione Granger',
// 'Ron Weasley', 'Rubeus Hagrid', 'Minerva McGonagall', 'Severus Snape']