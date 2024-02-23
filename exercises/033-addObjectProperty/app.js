function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
  return obj1;
}

// Example usage:
let person1 = {
  name: 'Alice',
  age: 25
};

let address = {
  city: 'New York',
  zip: '10001'
};

// Adding the address object as a property to the person1 object
addObjectProperty(person1, 'address', address);

console.log(person1);
