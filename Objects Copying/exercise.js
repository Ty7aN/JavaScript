const person1 = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const person2 = person1;

// Modify the property `firstName` of the `person2` in "Simon".
person2.firstName = "Simon";

console.log(person1);
console.log(person2);

// RISPOSTA:
// L'assegnazione di un oggetto a una variabile 
// comporta la creazione di un collegamento all'oggetto originale, 
// perciò person1 viene modificato di conseguenza.