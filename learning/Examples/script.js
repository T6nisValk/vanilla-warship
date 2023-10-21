console.log("Hello world!");

// Variables - dynamically typed, like python.
const varName = "Hello world!";
let varName2 = "Hello world!";

// Variable types - Number, String, Boolean, Undefined, Null, Symbol
// Object, Array, Function

// Naming conventions - JS uses camelCase.

let list = [1, 2, 3, 4, 5];
list.push(7);
console.log(list, "|Push - add item to the end.");
list.pop();
console.log(list, "|Pop - delete last item. ");
list.shift();
console.log(list, "|Shift - delete first item.");
list.unshift(1);
console.log(list, "|Unshift - add item to the start.");

console.log("-----Array methods-----");
// Arrays
console.log(list, "Original list.");
const reversed = list.reverse();
console.log(reversed, "|Reversed list.");

const sorted = list.sort();
console.log(sorted, "|Sorted list.");

const fused = list.concat(reversed);
console.log(fused, "|Fused lists.");

console.log(list);
console.log(list.includes(8), "|Includes - checks if value is in list.");
console.log(list);
console.log(list.indexOf(3), "|IndexOf - get the index of a value.");
console.log(list);
console.log(list.slice(2, 8), "|Slice - show values from to of index.");
console.log(list);
console.log(list.splice(0, 3), "|Splice - delete values from to of index.");
console.log(list);
console.log(list.length, "|Length - get length of the list.");

console.log("-----Loops-----");
// Loop - for(counter declaration, loop condition, counter change){instructions}
// ForEach runs a function for each element in the loop.
list = [1, 2, 3, 4, 5];
list.forEach(function (item) {
  console.log(item, "Item for each.");
});

const mapped = list.map(function (item) {
  return item + 3;
});
console.log(mapped);

console.log("-----Objects-----");
// Empty object (Same as python dictionary.)
const teacher = {};

const student = {
  firstName: "John",
  lastName: "Doe",
};
console.log(student.firstName);
console.log(student.lastName);

listOfKeys = ["firstName", "lastName"];
listOfKeys.forEach((key) => console.log(student[key]));
student.firstName = "Jane";
student.lastName = "Wild";
console.log(student);

console.log("-----Functions-----");
function add(a, b) {
  return a + b;
}
const add2 = function (a, b) {
  return a + b;
};
// Modern way.
const add3 = (a, b) => a + b;
// if you need to add more functionality then you use curly brackets:
// const add3 = (a, b) => {
//     console.log("Hey");
//     return a + b;
//   };
console.log(add3(1, 3), "|console.log(add3(1, 3) - const add3 = (a, b) => a + b");

console.log("-----Selectors-----");
console.log("In if statement.");
if (typeof window !== "undefined") {
  let element = document.getElementById("header");
  console.log(element);
  let paragraph = document.getElementsByClassName("text");
  console.log(paragraph);
  let tag = document.getElementsByTagName("body");
  console.log(tag);
  let selector = document.querySelectorAll(".text");
  console.log(selector);
}

console.log("-----Create/Append-----");
console.log("In if statement.");
if (typeof window !== "undefined") {
  const newTextNode = document.createElement("span");
  newTextNode.innerText = "Hello world from JS.";
  let box = document.querySelector("#container");
  box.appendChild(newTextNode);
}

console.log("-----Events-----");
const showMessage = () => {
  header.classList.add("color");
};
