let trolo = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLargerThan(num, obj) {
    // your code here
    for (let key in obj) {
        if (typeof obj[key] === 'number' && obj[key] > num) {
          delete obj[key];
        }
      }
    return obj;
}

console.log(removeNumbersLargerThan(3, trolo))