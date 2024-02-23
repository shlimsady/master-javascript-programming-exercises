function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
  return obj;
}

// Example usage:
let person = {
  name: 'John',
  age: 30
};

let hobbies = ['reading', 'hiking', 'cooking'];

// Adding the hobbies array as a property to the person object
addArrayProperty(person, 'hobbies', hobbies);

console.log(person);
