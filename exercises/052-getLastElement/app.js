function getLastElement(array) {
  // Add your code after this line
  let lasT = array.length - 1 

  if(array.length == 0) {
    return undefined;
  }
  
  else return (array[lasT])

}

let output = getLastElement([1, 2, 3]);
console.log(output); // --> 4
