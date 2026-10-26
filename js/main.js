// alert('works')

// Rock Paper Scissors Oracle

function oracle(gestures) {
  //work your magic here
    const options = ["rock", "paper", "scissors"];
  const beats = { rock: "scissors", paper: "rock", scissors: "paper" };
  const winners = [];

  for (let i = 0; i < options.length; i++) {
    const mine = options[i];
    let score = 0;

    for (let j = 0; j < gestures.length; j++) {
      const theirs = gestures[j];
      if (beats[mine] === theirs) {
        score++;
      } else if (beats[theirs] === mine) {
        score--;
      }
    }

    if (score > 0) {
      winners.push(mine);
    }
  }

  if (winners.length === 0) {
    return "tie";
  }
  return winners.join("/");
}





// Convert a string to an array

function stringToArray(string){

	// code code code
return string.split(" ");
}







// Evil or Odious

function evil(n) {
    const binary = n.toString(2);
  let ones = 0;
  for (let i = 0; i < binary.length; i++) {
    if (binary[i] === "1") {
      ones++;
    }
  }

  if (ones % 2 === 0) {
    return "It's Evil!";
  } else {
    return "It's Odious!";
  }
  
}






// Well of Ideas - Easy Version
function well(x){
let goodCount = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] === "good") {
      goodCount++;
    }
  }

  if (goodCount === 0) {
    return "Fail!";
  } else if (goodCount <= 2) {
    return "Publish!";
  } else {
    return "I smell a series!";
  }
}





// Simple number triangle

function solve(n) {
    // input and output are BigInts
   let catalan = 1n;
  for (let k = 0n; k < n; k++) {
    catalan = (catalan * 2n * (2n * k + 1n)) / (k + 2n);
  }
    return catalan;
}






// Classy Classes
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  get info() {
    return this.name + "s age is " + this.age;
  }
}


// Regexp Basics - is it a digit?
String.prototype.digit = function() {
  return /^\d$/.test(this);
  return false;
};



// Switch it Up!
function switchItUp(number){
//Write your own Code!
   switch (number) {
    case 0:
      return "Zero";
    case 1:
      return "One";
    case 2:
      return "Two";
    case 3:
      return "Three";
    case 4:
      return "Four";
    case 5:
      return "Five";
    case 6:
      return "Six";
    case 7:
      return "Seven";
    case 8:
      return "Eight";
    case 9:
      return "Nine";
  }
}


// Generate range of integers

function generateRange(min, max, step){
 const result = [];
  for (let i = min; i <= max; i += step) {
    result.push(i);
  }
  return result;
}


// Function 1 - hello world

// Write a function "greet" that returns "hello world!"
function greet() {
  return "hello world!";
}







// Add new item (collections are passed by reference)
function addExtra( listOfNumbers ){
    // your code here
    // add an int to listOfNumbers and return it
  const newList = listOfNumbers.slice();
  newList.push(13);
  return newList;

}




// Ones and Zeros

const binaryArrayToNumber = arr => {
 return parseInt(arr.join(""), 2);
  return 0;
};



// 99 Bottles of Beer

var sing = function () {
  const lines = [];
  for (let i = 99; i >= 2; i--) {
    const next = i - 1;
    lines.push(i + " bottles of beer on the wall, " + i + " bottles of beer.");
    lines.push(
      "Take one down and pass it around, " +
        next + (next === 1 ? " bottle" : " bottles") +
        " of beer on the wall."
    );
  }
  lines.push("1 bottle of beer on the wall, 1 bottle of beer.");
  lines.push("Take one down and pass it around, no more bottles of beer on the wall.");
  lines.push("No more bottles of beer on the wall, no more bottles of beer.");
  lines.push("Go to the store and buy some more, 99 bottles of beer on the wall.");
  return lines;
};



// Pole Vault Starting Marks

function startingMark(bodyHeight){
  // Remember: Body height of 1.52 m --> starting mark: 9.45 m
  //           Body height of 1.83 m --> starting mark: 10.67 m
  // All other starting marks are based on these guidelines!
  const slope = (10.67 - 9.45) / (1.83 - 1.52);
  const mark = 9.45 + (bodyHeight - 1.52) * slope;
  return Math.round(mark * 100) / 100;
}



// Even or Odd

function evenOrOdd(number) {
    if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}


// Multiply
function multiply(a, b){
  return a * b;
}



// Square(n) Sum

function squareSum(numbers){
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i] * numbers[i];
  }
  return total;
}


// Highest and Lowest
function highAndLow(numbers){
    const list = numbers.split(" ").map(Number);
  const highest = Math.max(...list);
  const lowest = Math.min(...list);
  return highest + " " + lowest;
}


// String repeat

function repeatStr (n, s) {
  return s.repeat(n);
}



// Grasshopper - Summation
var summation = function (num) {
   let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
}





// Convert a Boolean to a String

function booleanToString(b){
   return b.toString();
}




// Century From Year

function century(year) {
  return Math.ceil(year / 100);
  return;
}


// MakeUpperCase

function makeUpperCase(str) {
  return str.toUpperCase();
}


// Friend or Foe?

function friend(friends){
    return friends.filter(function (name) {
    return name.length === 4;
  });
}


// Beginner Series #2 Clock

function past(h, m, s){
  return (h * 3600 + m * 60 + s) * 1000;
}



// You Can't Code Under Pressure #1
function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return i * 2;
}


// Grasshopper - Check for factor
function checkForFactor (base, factor) {
  return base % factor === 0;
}



// Convert number to reversed array of digits
function digitize(n) {
  const array = String(n).split("");

  array.reverse();

  const numbers = array.map(Number);

  return numbers;
}