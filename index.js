console.log("**** OBJECT ARRAY ASSIGNMENT****");
console.log();
//TASK 01: Create a program that manages a simple friend list.
//1. Define an object named people containing an empty array called friends.
//2. Create three seperate objects, each representing a friend with properties like firstName,lastName,and 
//   optionally id.
//3. Add three friend objects to the friends array within the people object.
//4. Output the entire people ibject to the console,displaying your information and your friend list.
console.log("SOLUTION 01");
console.log("BUILT YOUR FRIEND LIST");
console.log();
var people = {
    friends: []
};
var friend1 = {
    firstName: "Saba",
    lastNmae: "Noor",
    id: 2424,
};
var friend2 = {
    firstName: "Rabia",
    lastName: "Asad",
    id: 3533,
};
var friend3 = {
    firstName: "Fatima",
    lastName: "Naz",
    id: 8240,
};
var addArrays = people.friends = [friend1, friend2, friend3];
console.log(addArrays);
//TASK 02: Rearrangng an array using array methods to form the sentence "I am a student of GIAIC"
//1.Start with an array of elements in a  scrambled order,like:
// const scrambledArray = ["student" , "of" , true , 123 ,"am" , "a" , "GIAIC" , "I"];
//2.MODIFY THE ARRAY:
//Use methods like split(),join(),push(),pop(),unshift() to:
//convert non-strings(boolean , numbers) to string if needed.
//Split elements into character arrays (optional).
//Rearrange characters or elements in the desired order (modify original array or create tempoary arrays).
//3.Output the result:
//Use join() to combine element back into a single string: "I am a student of GIAIC".
console.log("SOLUTION 02");
console.log("REARRANGING WORDS");
console.log();
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.splice(2, 2);
scrambledArray.pop();
scrambledArray.unshift("I");
scrambledArray.splice(1, 0, "am a");
console.log(scrambledArray.join(" "));
console.log();
//TASK 03: Create a program to represent a product catalog using an array and perform basic queries.
//1.Define an array named inventory to store product information.
//2.create three separate objects,each representing a product,with properties like name,model,cost and quantity.
//3.Add these product objeects to the inventory array using an appropriate array method.
//4.Access and log the quantity property of a specific product(e.g, third product) in the invetory array.
//5.Explore adding and accessing more elements within the inventory array to understand how to manage product data.
console.log("SOLUTION 03 ");
console.log("COMPANY PRODUCT CATALOG");
console.log();
var inventory = [];
var product1 = {
    name: "Laptop",
    model: 2022,
    cost: 35000,
    quantity: 2
};
var product2 = {
    name: "Tecno",
    model: 2022,
    cost: 28000,
    quantity: 3
};
var product3 = {
    name: "Bugatti",
    model: 2024,
    cost: 1136000000,
    quantity: 1,
};
inventory.push(product1, product2, product3);
console.log(inventory);
console.log();
//TASK 04:
//1.STUDENT DATA: The provided code defines an interface named student that describes student information like name,
//senoir(true/false), and whether they have completed their assignments(true/false).
//Imagine this is a template for organizing student details.
//2.STIDENT LIST: 
//An array named students stores infromation about several students using the student template.Think if this array
//as your class list!
//3.FIND SENOIR STUDENT WITH ASSIGNMENTS(OPTIONAL):
//The code (not shown here) has a function that might find students who are senoirs and have completed their 
//assignments.
//Can you guess why this information might be helpful?
//4.CLASS LIST UPDATE:
//Imagine you need to update your class list! The code (not shown here)might have a function that removes students
//who have not completed their assignments(assuming only seniors are responsible)
//Can you think of any reasons why this might be useful(consider limitations?)
console.log("SOLUTION 04");
console.log("STUDENT LIST OGANIZER");
console.log();
var students = [
    { name: "Zainab", senior: true, assignentCompleted: true },
    { name: "Hiba", senior: false, assignentCompleted: false },
    { name: "Sana", senior: true, assignentCompleted: true },
    { name: "Zehra", senior: false, assignentCompleted: false }
];
for (var r = 0; r <= 4; r++) {
    if (students[r].senior === true) {
        console.log("".concat(students[r].name, " have completed her all assignments"));
    }
    else {
        console.log("".concat(students[r].name, " have not completed her all assignments"));
    }
}
