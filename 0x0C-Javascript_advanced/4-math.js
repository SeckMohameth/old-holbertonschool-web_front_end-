const divideBy = (firstNumber) => (secondNumber) => secondNumber / firstNumber;

const addBy = (firstNumber) => (secondNumber) => secondNumber + firstNumber;

var addBy100 = addBy(100);
var addBy1000 = addBy(1000);
var divideBy10 = divideBy(10);
var divideBy100 = divideBy(100);

console.log(addBy1000(20));
