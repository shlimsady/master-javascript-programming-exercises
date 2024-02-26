function isEitherEvenOrAreBoth7(num1, num2) {
    if ((num1 === 7 && num2 === 7) || (num1 % 2 === 0 || num2 % 2 === 0)) {
        return true;
    } else {
        return false;
    }
}

let output = isEitherEvenOrAreBoth7(7, 6);
console.log(output); // Output will be false since only one of them is 7
