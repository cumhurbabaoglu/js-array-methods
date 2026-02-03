// We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

function copySorted(arr) {
    // using slice() to have a copy of the array
  return arr.slice().sort();
}
