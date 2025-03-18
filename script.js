const student = {
  name: "John"
};

const info = {
  name: "John",
  age: 30,
  city: "123 Main Street"
};

function getKeys(obj) {
  return Object.keys(obj);  // Correct usage of Object.keys()
}

console.log(getKeys(student));  // ["name"]
console.log(getKeys(info));     // ["name", "age", "city"]
