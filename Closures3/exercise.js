function multiplyByTwo(value) {
  let number = 2;
  function inner() {
    return value * number;
  }
  return inner;
}
const myFunc = multiplyByTwo(4);
const result = myFunc();

console.log(result);
