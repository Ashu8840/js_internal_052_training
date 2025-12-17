// assignment2.js
// All 25 programs in a single file.
// Each program has a comment describing the problem,
// the code, a console.log showing the result, and a comment showing the expected output.

// --------------------------------------
// 1) Sum of two numbers
// --------------------------------------
// Problem: Sum two numbers and print result
let a = 10;
let b = 20;
let sum1 = a + b;
console.log("1) Sum of two numbers:", sum1);
// Output: 1) Sum of two numbers: 30

// --------------------------------------
// 2) Print "Hello <name>"
// --------------------------------------
// Problem: Print greeting with name
let userName = "Ayush";
console.log("2) Hello " + userName);
// Output: 2) Hello Ayush

// --------------------------------------
// 3) Even / Odd check
// --------------------------------------
// Problem: Check if a number is even or odd
let num3 = 7;
if (num3 % 2 === 0) {
  console.log("3) Even");
} else {
  console.log("3) Odd");
}
// Output: 3) Odd

// --------------------------------------
// 4) Celsius → Fahrenheit
// --------------------------------------
// Problem: Convert Celsius to Fahrenheit
let celsius = 37;
let fahrenheit = (celsius * 9 / 5) + 32;
console.log("4) Fahrenheit:", fahrenheit);
// Output: 4) Fahrenheit: 98.6

// --------------------------------------
// 5) Max among 3 numbers
// --------------------------------------
// Problem: Find maximum of three numbers
let n1 = 10, n2 = 25, n3 = 15;
let maxOfThree = Math.max(n1, n2, n3);
console.log("5) Max among three numbers:", maxOfThree);
// Output: 5) Max among three numbers: 25

// --------------------------------------
// 6) Find string length
// --------------------------------------
// Problem: Find length of a string
let str6 = "JavaScript";
console.log("6) String length:", str6.length);
// Output: 6) String length: 10

// --------------------------------------
// 7) Toggle boolean
// --------------------------------------
// Problem: Toggle a boolean value
let flag = true;
flag = !flag;
console.log("7) Toggled boolean:", flag);
// Output: 7) Toggled boolean: false

// --------------------------------------
// 8) Concatenate strings
// --------------------------------------
// Problem: Concatenate two strings
let part1 = "Hello ";
let part2 = "World";
let concatenated = part1 + part2;
console.log("8) Concatenated string:", concatenated);
// Output: 8) Concatenated string: Hello World

// --------------------------------------
// 9) Positive / Negative / Zero
// --------------------------------------
// Problem: Check if number is positive, negative or zero
let val9 = -5;
if (val9 > 0) {
  console.log("9) Positive");
} else if (val9 < 0) {
  console.log("9) Negative");
} else {
  console.log("9) Zero");
}
// Output: 9) Negative

// --------------------------------------
// 10) var / let / const example
// --------------------------------------
// Problem: Show usage of var, let, const
var vv = 5;
let ll = 10;
const cc = 15;
vv = 6;        // var can be reassigned
ll = 11;       // let can be reassigned
// cc = 16;    // const cannot be reassigned (this line is commented to avoid runtime error)
console.log("10) var, let, const values:", vv, ll, cc);
// Output: 10) var, let, const values: 6 11 15

// --------------------------------------
// 11) Multiplication table
// --------------------------------------
// Problem: Print multiplication table of a number (1 to 10)
let tableOf = 5;
console.log("11) Multiplication table of", tableOf);
for (let i = 1; i <= 10; i++) {
  console.log(tableOf + " x " + i + " = " + (tableOf * i));
}
/* Output:
11) Multiplication table of 5
5 x 1 = 5
5 x 2 = 10
5 x 3 = 15
5 x 4 = 20
5 x 5 = 25
5 x 6 = 30
5 x 7 = 35
5 x 8 = 40
5 x 9 = 45
5 x 10 = 50
*/

// --------------------------------------
// 12) Sum of first 10 natural numbers
// --------------------------------------
// Problem: Compute sum 1+2+...+10
let sum12 = 0;
for (let i = 1; i <= 10; i++) {
  sum12 += i;
}
console.log("12) Sum of first 10 natural numbers:", sum12);
// Output: 12) Sum of first 10 natural numbers: 55

// --------------------------------------
// 13) Switch-case → day name
// --------------------------------------
// Problem: Given number (1-7) print day name
let dayNum = 3;
switch (dayNum) {
  case 1:
    console.log("13) Monday");
    break;
  case 2:
    console.log("13) Tuesday");
    break;
  case 3:
    console.log("13) Wednesday");
    break;
  case 4:
    console.log("13) Thursday");
    break;
  case 5:
    console.log("13) Friday");
    break;
  case 6:
    console.log("13) Saturday");
    break;
  case 7:
    console.log("13) Sunday");
    break;
  default:
    console.log("13) Invalid day number");
}
// Output: 13) Wednesday

// --------------------------------------
// 14) Function → Factorial
// --------------------------------------
// Problem: Write function to compute factorial of n
function factorial(n) {
  let f = 1;
  for (let i = 1; i <= n; i++) {
    f *= i;
  }
  return f;
}
console.log("14) Factorial of 5:", factorial(5));
// Output: 14) Factorial of 5: 120

// --------------------------------------
// 15) Function → Voting eligibility
// --------------------------------------
// Problem: Function to check voting eligibility (age >= 18)
function checkVotingEligibility(age) {
  if (age >= 18) return "Eligible to vote";
  return "Not eligible to vote";
}
console.log("15) Age 20:", checkVotingEligibility(20));
// Output: 15) Age 20: Eligible to vote

// --------------------------------------
// 16) Function to check prime number
// --------------------------------------
// Problem: Return true if prime, false otherwise
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}
console.log("16) Is 11 prime?:", isPrime(11));
// Output: 16) Is 11 prime?: true

// --------------------------------------
// 17) Sum of digits of a number
// --------------------------------------
// Problem: Given 123 → print 6
function sumOfDigits(num) {
  let sum = 0;
  let n = Math.abs(num);
  while (n > 0) {
    sum += n % 10;
    n = Math.floor(n / 10);
  }
  return sum;
}
console.log("17) Sum of digits of 123:", sumOfDigits(123));
// Output: 17) Sum of digits of 123: 6

// --------------------------------------
// 18) Reverse a string without using reverse()
// --------------------------------------
// Problem: Reverse "hello" → "olleh"
function reverseString(s) {
  let r = "";
  for (let i = s.length - 1; i >= 0; i--) {
    r += s[i];
  }
  return r;
}
console.log("18) Reverse of 'hello':", reverseString("hello"));
// Output: 18) Reverse of 'hello': olleh

// --------------------------------------
// 19) Take user marks & print Grade using conditions
// --------------------------------------
// Problem: Based on marks return grade A/B/C/Fail
function gradeFromMarks(marks) {
  if (marks >= 90) return "A";
  if (marks >= 75) return "B";
  if (marks >= 50) return "C";
  return "Fail";
}
console.log("19) Grade for 82 marks:", gradeFromMarks(82));
// Output: 19) Grade for 82 marks: B

// --------------------------------------
// 20) Function: two numbers & an operator (+ - * /)
// --------------------------------------
// Problem: Perform operation based on operator input
function calculate(a, b, operator) {
  if (operator === "+") return a + b;
  if (operator === "-") return a - b;
  if (operator === "*") return a * b;
  if (operator === "/") {
    if (b === 0) return "Cannot divide by zero";
    return a / b;
  }
  return "Invalid operator";
}
console.log("20) 8 * 5 =", calculate(8, 5, "*"));
// Output: 20) 8 * 5 = 40

// --------------------------------------
// 21) Count vowels in a string
// --------------------------------------
// Problem: Count vowels a,e,i,o,u (case-insensitive)
function countVowels(s) {
  let count = 0;
  let lower = s.toLowerCase();
  for (let i = 0; i < lower.length; i++) {
    let ch = lower[i];
    if (ch === "a" || ch === "e" || ch === "i" || ch === "o" || ch === "u") count++;
  }
  return count;
}
console.log("21) Vowels in 'javascript':", countVowels("javascript"));
// Output: 21) Vowels in 'javascript': 3

// --------------------------------------
// 22) Print the Fibonacci series up to n terms
// --------------------------------------
// Problem: Print first n terms of Fibonacci sequence
function fibonacci(n) {
  let seq = [];
  if (n >= 1) seq.push(0);
  if (n >= 2) seq.push(1);
  for (let i = 2; i < n; i++) {
    seq.push(seq[i - 1] + seq[i - 2]);
  }
  return seq;
}
console.log("22) Fibonacci (7 terms):", fibonacci(7));
// Output: 22) Fibonacci (7 terms): [0, 1, 1, 2, 3, 5, 8]

// --------------------------------------
// 23) Return minimum and maximum from an array
// --------------------------------------
// Problem: Given array return min and max
function minMax(arr) {
  if (arr.length === 0) return null;
  let min = arr[0];
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
    if (arr[i] > max) max = arr[i];
  }
  return { min: min, max: max };
}
let sampleArr = [3, 7, 1, 9, 5];
let mm = minMax(sampleArr);
console.log("23) Array:", sampleArr, "→ Min:", mm.min, "Max:", mm.max);
// Output: 23) Array: [3,7,1,9,5] → Min: 1 Max: 9

// --------------------------------------
// 24) Switch-case Simple Menu Program
// --------------------------------------
// Problem: Build menu with Add/Sub/Mul/Div using switch-case
let menuChoice = 3; // 1: Add, 2: Sub, 3: Mul, 4: Div
let mA = 12;
let mB = 4;
switch (menuChoice) {
  case 1:
    console.log("24) Add:", mA + mB);
    break;
  case 2:
    console.log("24) Sub:", mA - mB);
    break;
  case 3:
    console.log("24) Mul:", mA * mB);
    break;
  case 4:
    if (mB === 0) console.log("24) Cannot divide by zero");
    else console.log("24) Div:", mA / mB);
    break;
  default:
    console.log("24) Invalid choice");
}
// Output: 24) Mul: 48

// --------------------------------------
// 25) Check if a number is Armstrong number
// --------------------------------------
// Problem: Armstrong number (e.g., 153: 1^3 + 5^3 + 3^3 = 153)
function isArmstrong(num) {
  let n = Math.abs(num);
  let s = n.toString();
  let len = s.length;
  let sumP = 0;
  for (let i = 0; i < len; i++) {
    let d = parseInt(s[i], 10);
    sumP += Math.pow(d, len);
  }
  return sumP === n;
}
console.log("25) Is 153 Armstrong?:", isArmstrong(153));
// Output: 25) Is 153 Armstrong?: true


