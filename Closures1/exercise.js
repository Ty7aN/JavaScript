function printName() {
  const helloName = "Hello John";
  function inner() {
    return helloName;
  }
  return inner;
}
const myFunc = printName();
console.log(myFunc());
