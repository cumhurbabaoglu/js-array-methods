// Sort an array of numbers in decreasing order

let arr = [5, 2, 1, -10, 8];

arr.sort((a, b) => b - a);

console.log(arr); // [8, 5, 2, 1, -10]

// sort() method treats numbers as strings by default
// so we need to give sort() a function to deal with numbers