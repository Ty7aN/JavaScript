function printName() {
  const helloName = "Hello John";
  function inner() {
    return helloName;
  }
  return inner;
}
const myFunc = printName();

// Funzione 'setTimeout' per eseguire la stampa a video dopo 1 secondo
setTimeout(() => {
  console.log(myFunc());
}, 1000);
