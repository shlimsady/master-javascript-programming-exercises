function removeFromFrontOfNew(arr) {
    // your code here
    return arr.slice(1)
}

let arrae = [1, 2, 3];
let output = removeFromFrontOfNew(arrae);
console.log(output); // --> [2, 3]
console.log(arrae); // --> [1, 2, 3]
