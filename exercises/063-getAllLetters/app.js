function getAllLetters(str) {
    // your code here
    let letters = []
    for(i=0; i < str.length ; i++){
        letters.push(str[i])
    }
    return letters
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
