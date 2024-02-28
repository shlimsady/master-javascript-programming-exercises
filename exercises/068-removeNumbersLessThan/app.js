let objeto = {
    a: 8,
    b: 2,
    c: 'montana'
}

function removeNumbersLessThan(num, obj) {
    // your code here
    for (let key in obj) {
        if(typeof obj[key] === 'number' && obj[key]<num){
            delete obj[key]
        }
    }
    return obj
}
let outputo = removeNumbersLessThan(9,objeto);
console.log(outputo)