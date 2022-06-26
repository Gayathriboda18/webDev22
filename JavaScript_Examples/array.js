const pi = 3.14;
//console.log(pi += 1); // error pops 
const num = [1, 2, 3];
num.push(4);
console.log(num);

//----------Objects---------------------//
const person = {
    name: "Tom",
    age: "45",
    job: "Sales Executive",
    hobbies: ["Cricket","Reading"]
};
console.log(person);
console.log(person["job"]); //"Sales Executive"
// Adding a element
person.height = "6'feet";
person['academics'] = "Average";
//Change/update values 
person['name'] = "Jess";
person.age = "20";
//e.g.----------------------------//
const restaurant = {
    name: 'Ichiran Ramen',
    address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
    city: 'Brooklyn',
    state: 'NY',
    zipcode: '11206',
};

const fullAddress = restaurant['address'] +" "+ restaurant['city'] +" "+ restaurant['state'] +" "+ restaurant['zipcode'];

//----------------------Nesting Objects in Arrays---------------------------------------//
const comments = [
    {username : "Rory G", text : "Fabulous" , votes :" 89%"},
    {username : "Lorelai G", text : "Good" , votes :" 80%"},
    {username : "Jess M", text : "Okay" , votes :" 60%"},
    {username : "Luke S", text : "Not Bad" , votes :" 50%"}];

//----------------------Arrays + Objects-----------------------------------------//
const students = {
    firstName: "Hannah",
    lastName: "Baker",
    hobbies: ['fishing', 'reading', 'basketball'],
    exams: {
        midterm: "75%",
        Final: "80"
    }
};
