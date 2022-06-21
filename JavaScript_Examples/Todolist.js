// "New" to add item
// "list" to display items
// "del" to delete items
// "quit" to exit

const todolist = ["water plants","go to cinema"];

let input = prompt("What would you like to do?");

while (input != "quit" && input!= "q") {
    input = prompt("What would you like to do?");
    // to display list
    if (input === "list") {
        console.log("---------------------------------");
        for (let i = 0; i < todolist.length; i++) {
            console.log(`${i}:${todolist[i]}`);
        }
        console.log("---------------------------------");
    }
    //"New" to add item
    else if (input === "new") {
        const newtodo = prompt("What is new item in list?");
        todolist.push(newtodo);
    }
    // "del" to delete items
    else if (input === "del") {
        const item = parseInt(prompt("Enter the index value of item to delete"));
        if (!Number.isNaN(item)) {
            todolist.splice(item, 1); 
        } else {
            prompt("Enter vaild data");
        }
    }
}

console.log("ok! you exit");