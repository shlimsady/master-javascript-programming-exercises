function addToFront(arr, element) {
  // your code here
  let variable = arr.unshift(element);
  return variable;
}

let output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
