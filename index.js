// let name = prompt("What is your name?");

// // Isolate first letter
// let sliceFirstChar = name.slice(0, 1);
// // Change first letter to upper case
// let upperCaseLetter = sliceFirstChar.toUpperCase();
// // grabs the group of characters
// let groupOfChar = name.slice(1, name.length);
// // isolate the group of characters to lowercase
// let lowerCase = groupOfChar.toLowerCase();

// alert("Hello, " + upperCaseLetter + lowerCase);


// function lifeIn90Years(age) {

//     // 32850 days in 90 years
//     let daysOfAge = Math.floor(32850 - (365 * age));
//     console.log(daysOfAge);
//     // 4680 weeks in 90 years
//     let weeksOfAge = Math.floor(4680 - (52 * age));
//     console.log(weeksOfAge);
//     // 1080 months in 90 years
//     let monthsOfAge = Math.floor(1080 - (12 * age));
//     console.log(monthsOfAge);

//     console.log("You have " + daysOfAge + " days" + ", " + weeksOfAge + " weeks" + ", " + "and " + monthsOfAge + " months" + " left.");

// };
// // lifeIn90Years(22.95);

// // BMI Calculator Challenge
// // BMI = weight(kg) / height^2(m^2)
// // Create your function below this line.
// // The first parameter should be the weight and the second should be the height.

// // function bmiCalculator(weight, height) {
// //     let bmi = weight / Math.pow(height, 2);
// //     return Math.round(bmi)
// //   };
// // console.log(bmiCalculator(65, 1.8))

// /* If my weight is 65Kg and my height is 1.8m, I should be able to call your function like this:

// var bmi = bmiCalculator(65, 1.8); 

// bmi should equal 20 when it's rounded to the nearest whole number.

// */

// // BMI Calculator Intermediate
// function bmiCalculator(weight, height) {
//     let bmi = Math.round(weight / Math.pow(height, 2));

//     if (bmi < 18.5) {
//         return ("Your BMI is " + bmi + ", so you are underweight.");
//     }

//     if (bmi > 18.5 && bmi < 24.9) {
//         return ("Your BMI is " + bmi + ", so you have a normal weight.");
//     }

//     if (bmi > 24.9) {
//         return ("Your BMI is " + bmi + ", so you are overweight.");
//     }
// }

// console.log(bmiCalculator(60, 1.72));



// let x = Math.random() * 6;
// console.log(Math.round(x));

// // dice roll
// let n = Math.random();
// n = n * 6;
// n = Math.floor(n) + 1;
// console.log(n)

// // love calculator
// let name1 = prompt("What is the first person's name?")

// let name2 = prompt("What is the second person's name?")

// let loveCalculator = Math.random();
// loveCalculator = loveCalculator * 100;
// loveCalculator = Math.floor(loveCalculator) + 1;

// if (loveCalculator <= 100 && loveCalculator >= 75) {
//     alert(alert(name1 + " and " + name2 + " have a love score of " + loveCalculator + "%" + "," + " they love each other very much!"))
// } else if (loveCalculator < 75 && loveCalculator >= 50) {
//     alert(name1 + " and " + name2 + " are compatible with a love score of " + loveCalculator + "%" + ".")
// } else if (loveCalculator < 50 && loveCalculator >= 25) {
//     alert(name1 + " and " + name2 + " are not in love as much as we thought with a love score of " + loveCalculator + "%" + ".")
// } else {
//     alert(name1 + " and " + name2 + " are not a match at all with a love score of " + loveCalculator + "%" + ".")
// }

// function isLeap(year) {

//     /**************Don't change the code above****************/

//     //Write your code here.    

//     if (year % 4 === 0 && year % 400 === 0) {
//         console.log("Leap year.")
//     } else if (year % 4 === 0 && year % 100 !== 0) {
//         console.log("Leap year.")
//     } else {
//         console.log("Not leap year.")
//     }

//     /**************Don't change the code below****************/

// }
// isLeap(1948);

// let output = []
// let count = 1;

// function fizzBuzz() {

//     if (count % 3 === 0 && count % 5 === 0) {
//         output.push("FizzBuzz")
//         count++
//     } else if (count % 3 === 0) {
//         output.push("Fizz")
//         count++
//     } else if (count % 5 === 0) {
//         output.push("Buzz")
//         count++
//     } else {
//         output.push(count);
//         count++
//     }
//     console.log(output)
// }
// fizzBuzz(1);

// function whosPaying(names) {

//     /******Don't change the code above*******/

//     //Write your code here.
//     let numberOfPeople = names.length;
//     let randomPicker = Math.floor(Math.random() * numberOfPeople);
//     let randomPerson = names[randomPicker];

//     return randomPerson + " is going to buy lunch today!"


//     /******Don't change the code below*******/
// }
// whosPaying();

// // Fibonacci Sequence

// function fibonacciGenerator(n) {

//     //Write your code here:
//     // In order to get the last index in a array, the solution is n - 1
//     let fibonacci = [];

//     for (let i = 0; i < n; i++) {

//         if (i > 1)

//             fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);

//         else

//             fibonacci.push(i)

//     }

//     return fibonacci;
//     //Return an array of fibonacci numbers starting from 0.
//     //Do NOT change any of the code below 👇
// }
// fibonacciGenerator(100);



// function weekDays(w) {
//     var w = ["monday", "tuesday", "wednesday", "thursday", "friday"];
//     let weekArray = w.length - 1;
//     for (let i = 0; i <= weekArray; i++) {
//         console.log(w[i])
//     }
// }

// let arr = ["monday", "tuesday", "wednesday", "thursday", "friday"],
//     len = arr.length - 1;

// for (let i = 0; i <= len; i++) {
//     console.log("The value of element # " + i + " is: " + arr[i]);
// }

// let sampleArray = ["Matthew", "Ty", "Madelyn", "Ewell"];
// console.log(sampleArray)
// sampleArray[0] = "Matt"
// // changes string data depending on index
// console.log(sampleArray)
// sampleArray.push("Jacob");
// // adds to the end of the array
// console.log(sampleArray)
// sampleArray.pop()
// // end of an array gets removed
// console.log(sampleArray)
// sampleArray.shift()
// // removes the first element of the array
// console.log(sampleArray)
// sampleArray.unshift("Matthew")
// // adds an element at the front of an array
// console.log(sampleArray)

// let splitArray = sampleArray.reverse()

// console.log(splitArray[2]);

const str = 'The quick brown fox jumps over the lazy dog.';

const words = str.split(' ').reverse(' ');
// for(let i = 0; i < words.length; i++);
console.log(words);

// expected output: "fox"

const chars = str.split('');
console.log(chars[8]);
// expected output: "k"

const strCopy = str.split();
console.log(strCopy);
// expected output: Array ["The quick brown fox jumps over the lazy dog."]

let palindrome = function (word) {
     let len = word.length;
     let start = word.substring(0, Math.floor(len/2)).toLowerCase();
     let end = word.substring(len - Math.floor(len/2)).toLowerCase();
    //  console.log(start, end);
     let flip = end.split('').reverse().join('');
     return (start === flip);
};

console.log(palindrome('radar'));

console.log(palindrome('redder'));

console.log(palindrome('window'));

// Removing duplicates from an array

// brute froce
let a = [1, 2, 5, 2, 1, 8];
// [1, 2, 5, 8];
let b = [];
// new array to input non-duplicates
let len = a.length;
// making it faster
for (let i = 0; i < len; i++) {
    if (b.indexOf(a[i]) === - 1) {
        // - 1 usually means it is not there 
        // hence the push of the non-duplicate with the push method
        b.push(a[i])
    } 
    // indexOf is a method that returns the first index at which a given element can be found in an array
};
console.log(b)

// 8 Array methods
// .filter(); filter out an array to produce a certan group in the object
// .map(); return a certain group of the array
// .find(); return a single index in the array of information
// forEach(); like a for loop, but takes a function instead, lists all diff items given
// some function - .some(); gives a boolean true or false to see if it has an item equal to the parameter
// .every(); checks to see every item falls under a certain if statements returns true or false
// .reduce(); takes a first input besides the array
// .includes(); takes a single argument, to see if the index insists in the array returns true or false

// show me how you can remove duplicates from an array

let numberArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7];

let lenArray = numberArray.length;

let output = [];

for (let i = 0; i < lenArray; i++) {
    if (output.indexOf(numberArray[i]) === - 1) {
        output.push(numberArray[i])
    }
};

console.log(output)

// show me how to remove duplicates in an array

let numbersArray = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5];
let lensArray = numbersArray.length;

let outputs = [];
for (let i = 0; i < lensArray; i++) {
    if (outputs.indexOf(numbersArray[i]) === - 1) {
        outputs.push(numbersArray[i])
    };
};
console.log(outputs);