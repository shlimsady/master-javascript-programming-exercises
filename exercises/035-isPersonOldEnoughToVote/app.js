let francisco = {
  age : 18,
  name : "reputo",
}
let camila = {
  age : 16,
  name : "reputo",
}
function isPersonOldEnoughToVote(person) {
  // Add your code after this line
  if (person.age >= 18) {
    return true
  }else{
    return false
  }
}

console.log(isPersonOldEnoughToVote(francisco))
console.log(isPersonOldEnoughToVote(camila))