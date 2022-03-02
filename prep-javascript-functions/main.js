function addTwoNumbers(x, y) {
  return x + y;
}

var sum = addTwoNumbers(4, 4);
console.log('sum', sum);

function convertHoursToMinutes(hours) {
  return hours * 60;
}

var minutes = convertHoursToMinutes(2);
console.log('minutes', minutes);

function getGreeting(name) {
  return 'Hello ' + name + '!';
}

var phrase = getGreeting('World');
console.log('phrase', phrase);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

var addProduct = addAndMultiplyBy5(10, 5);
console.log('addAndMulitplyBy5', addProduct);

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

var prodDiv = multiplyAndDivideBy5(35, 10);
console.log('multiplyAndDivideBy5', prodDiv);

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

var difference = subtractTwoNumbers(22, 7);
console.log('subtractTwoNumbers', difference);

function getCircleCircumference(radius) {
  return 2 * Math.PI * radius;
}

var circumference = getCircleCircumference(5);
console.log('getCircleCircumference', circumference);

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

var fullName = getFullName('Juan', 'Ramirez');
console.log('getFullName', fullName);

function cube(number) {
  return number * number * number;
}

var resultCube = cube(5);
console.log('cube', resultCube);
