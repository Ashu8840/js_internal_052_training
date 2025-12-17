// ==============================================
// Task 1: Student Marks
// Create an array of marks → calculate average using reduce().
// ----------------------------------------------
let marks = [80, 90, 70, 85, 95];

// reduce() adds all marks, then divide by length
let avg = marks.reduce((sum, val) => sum + val, 0) / marks.length;

console.log("Average Marks:", avg);
// Output Example: Average Marks: 84

// ==============================================
// Task 2: Filter Even Numbers
// Use filter() to return even numbers only.
// ----------------------------------------------
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// filter numbers where remainder = 0
let evens = numbers.filter((num) => num % 2 === 0);

console.log("Even Numbers:", evens);
// Output: [2, 4, 6, 8]

// ==============================================
// Task 3: Shopping Cart
// Create object and calculate total bill = price * quantity.
// ----------------------------------------------
let cart = {
  item: "Laptop",
  price: 45000,
  quantity: 2,
};

let totalBill = cart.price * cart.quantity;

console.log("Total Bill:", totalBill);
// Output: Total Bill: 90000

// ==============================================
// Task 4: Movie List
// Create array → add one movie → remove last movie → print final list
// ----------------------------------------------
let movies = ["KGF", "Salaar", "Pushpa"];

// add movie
movies.push("Bahubali");

// remove last movie
movies.pop();

// print final list using loop
console.log("Final Movie List:");
for (let i = 0; i < movies.length; i++) {
  console.log(movies[i]);
}
/* Output:
Final Movie List:
KGF
Salaar
Pushpa
*/

// ==============================================
// Task 5: User Profile JSON
// Convert object to JSON → store → convert back to object
// ----------------------------------------------
let user = { name: "Aman", age: 21, course: "JS" };

// convert object to JSON string
let jsonData = JSON.stringify(user);

// convert JSON back to object
let newObj = JSON.parse(jsonData);

console.log("JSON Data:", jsonData);
console.log("Converted Back Object:", newObj);
/* Output:
JSON Data: {"name":"Aman","age":21,"course":"JS"}
Converted Back Object: { name: 'Aman', age: 21, course: 'JS' }
*/

// ==============================================
// Bonus Challenge (Optional)
// Task 6: Find Max Number in Array (Without Math.max)
// ----------------------------------------------
let arr = [10, 40, 25, 80, 15];

let max = arr[0];
for (let i = 1; i < arr.length; i++) {
  if (arr[i] > max) {
    max = arr[i];
  }
}

console.log("Maximum Number:", max);
// Output: 80

// ==============================================
// Task 7: Transform Names Using map()
// Convert names to uppercase
// ----------------------------------------------
let names = ["ram", "shyam", "mohan"];

let upperNames = names.map((n) => n.toUpperCase());

console.log("Uppercase Names:", upperNames);
// Output: ["RAM","SHYAM","MOHAN"]
