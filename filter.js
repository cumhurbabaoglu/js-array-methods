// Write a function to filter a given array of numbers for values between and including two numbers
// The task requires the function to have three parameters, one being the array and the other two being numbers
// The function should not modify the array but return the new array

function filterRange(arr, a, b) {
  const filtered = arr.filter(n => (n >= a && n <= b));
  return filtered;
}

let arr = [1, 18, 4, 9, 12, 2];

let result = filterRange(arr, 2, 10);
console.log(result);