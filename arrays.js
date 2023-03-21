// Converting a Set to an array using spread operator
const set = new Set(['a', 'b', 'c']);
const arr = [...set];
console.log(arr); // Output: ['a', 'b', 'c']

// Converting a string to an array of characters using spread operator
const str = 'hello';
const charsArr = [...str];
console.log(charsArr); // Output: ['h', 'e', 'l', 'l', 'o']

arr[0]=5
console.log(set)


//Use Array.from for converting an array-like object to an array.
const arrLike = { 0: 'foo', 1: 'bar', 2: 'baz', length: 3 };
const arr1 = Array.from(arrLike);
console.log(arr1)


const map = new Map([
    ['key1', 'value1'],
    ['key2', 'value2'],
    ['key3', 'value3']
  ]);
  
  // Converting a map to an array of key-value pairs
  const pairsArr = [...map];
  console.log(pairsArr); // Output: [['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']]

  console.log(Array.from(set)); // Output: [['key1', 'value1)