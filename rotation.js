function rotateArray(array) {
  var newArray = [];
  var i;
  if (!Array.isArray(array)) {
    return undefined;
  } else if (array.length === 0) {
    return [];
  }
  var newArray = array.slice(0);
  newArray.shift();
  newArray.push(array[0]);

  return newArray;
}

var array = [1, 2, 3, 4];

console.log(
  rotateArray([7, 3, 5, 2, 9, 1]),       // [3, 5, 2, 9, 1, 7]
  rotateArray(['a', 'b', 'c']),          // ["b", "c", "a"]
  rotateArray(['a']),                    // ["a"]
  rotateArray([1, 'a', 3, 'c']),         // ["a", 3, "c", 1]
  rotateArray([{ a: 2 }, [1, 2], 3]),    // [[1, 2], 3, { a: 2 }]
  rotateArray([]),                       // []

  // return `undefined` if the argument is not an array
  rotateArray(),                         // undefined
  rotateArray(1),                        // undefined


  // the input array is not mutated
  rotateArray(array),                    // [2, 3, 4, 1]
  array,                                 // [1, 2, 3, 4]
);
