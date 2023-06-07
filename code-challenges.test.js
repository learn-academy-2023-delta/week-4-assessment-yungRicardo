// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


// describe("shuffleColors", () => {
//   it("return array with frist item removed and the rest shuffled", () => {
//     expect(shuffleColors(colors1)).toEqual(shuffleColors(colors1))
//     expect(shuffleColors(colors2)).toEqual(shuffleColors(colors2))
//   })
// })

// b) Create the function that makes the test pass.

const shuffleColors = (arr) => {
  arr.shift()
  return arr.sort((a, b) => Math.random() - 0.5)
}
// console.log(shuffleColors(colors1))
// console.log(shuffleColors(colors2))

// Pseudo code:

// Create a function that takes in a array and eliminates the first element and shuffles the rest
// Within function use .shift() to remove frist element
// Return array with sort method to shuffle the rest, using Math.random() 


// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

// a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

// describe("endTally", () => {
//   it("returns an end tally of votes.", () => {
//     expect(endTally(votes1)).toEqual(11)
//     expect(endTally(votes2)).toEqual(-31)
//   })
// })

// b) Create the function that makes the test pass.

const endTally = (obj) => {
  var totalTally = obj.upVotes - obj.downVotes
  return totalTally
}


// Pseudo code:

// create function thats take obj returns end tally of upVotes and downVotes
// inside code block declare new variable totalTally
// assign object upVotes - downVotes to new variable
// return totalTally 

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

const dataTypesArray1 = ["array", "object", "number", "string", "Boolean"]
const dataTypesArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.

// const dataTypes = (arr1, arr2) => {
//   mergedArr = [...arr1, ...arr2]
//   var noDuplicates = [...new Set(mergedArr)]
//   return noDuplicates
// }
// console.log(dataTypes(dataTypesArray1, dataTypesArray2))

const dataTypes = (...data) => {
  var noDuplicates = [...new Set(data)]
  return noDuplicates 
}

mergedArr = [...dataTypesArray1, ...dataTypesArray2]
console.log(dataTypes(...mergedArr))


// Pseudo code:

// Create function that accepts a dynamic number of arguments and returns an array with unique values
// Declare variable and assign it the value [...new Set(data)]
//the Set object accepts an array as arugment and returns a set with unique values. While the spread is used to hold the uniquw elements
//we merge the the 2 arrays together using spread syntax and invoke dataTypes passing the mergedArr as a argument.