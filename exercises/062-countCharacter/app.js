function countCharacter(str, char) {
    // your code here
    let count = 0;
    for(i=0; i<str.length; i++){
        if(str[i]==char)
        count++

    }
    return count
}

let output = countCharacter('I am a haaaaacker', 'a');
console.log(output); // --> 3
