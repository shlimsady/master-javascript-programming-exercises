function isEitherEvenAndLessThan9(num1, num2) {
    // your code here
    if(num1 == 7 || num1 % 2 == 0 && num2 == 7 || num2 % 2 == 0) {
    return true
    }else return false
}


let output = isEitherEvenAndLessThan9(2, 4);
console.log(output); // --> true
