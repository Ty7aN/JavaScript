const person = {
  firstName: "Mario",
  lastName: "Rossi",
  age: 25,
};

const keys = Object.keys(person);

for (const key of keys) {
  console.log(`${key}: ${person[key]}`);
}