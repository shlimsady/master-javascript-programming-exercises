let person = {
  age : 16,
  name : "retrolo",
};

function isPersonOldEnoughToDrive(person) {
  // Add your code after this line
  if(person.age >= 16) {
    return true
  } else {
    return false
  }
}

console.log(isPersonOldEnoughToDrive(person))