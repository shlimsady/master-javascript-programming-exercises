function addToFront(arr, element) {
  // your code here
  let output = arr.unshift(element)
  return output
}

let arreo = [1, 2, 3]

let gato = addToFront([1, 2], 3);
console.log(gato); // -> [3, 1, 2]
