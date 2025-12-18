var multiArray = [];


var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

for (var i = 0; i < matrix.length; i++) {
  console.log(matrix[i].join(" ") + "<br>");
}


for (var i = 1; i <= 10; i++) {
  console.log(i + "<br>");
}


var tableNum = +prompt("Enter table number:");
var length = +prompt("Enter table length:");

for (var i = 1; i <= length; i++) {
  console.log(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (var i = 0; i < fruits.length; i++) {
  console.log(fruits[i] + "<br>");
}





// a. Counting
for (var i = 1; i <= 15; i++) {
  console.log(i + ", ");
}

console.log("<br><br>");

// b. Reverse counting
for (var i = 10; i >= 1; i--) {
  console.log(i + ", ");
}

console.log("<br><br>");

// c. Even
for (var i = 0; i <= 20; i += 2) {
  console.log(i + ", ");
}

console.log("<br><br>");

// d. Odd
for (var i = 1; i < 20; i += 2) {
  console.log(i + ", ");
}

console.log("<br><br>");

// e. Series
for (var i = 2; i <= 20; i += 2) {
  console.log(i + "k, ");
}


var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter item to search:");
var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i] === userInput.toLowerCase()) {
    found = true;
    break;
  }
}

if (found) {
  alert(userInput + " is found in the list");
} else {
  alert(userInput + " is not found in the list");
}




var A = [24, 53, 78, 91, 12];
var largest = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] > largest) {
    largest = A[i];
  }
}

console.log("Largest number is: " + largest);






var A = [24, 53, 78, 91, 12];
var smallest = A[0];

for (var i = 1; i < A.length; i++) {
  if (A[i] < smallest) {
    smallest = A[i];
  }
}

console.log("Smallest number is: " + smallest);




for (var i = 5; i <= 100; i += 5) {
  console.log(i + ", ");
}
