// ### Prompt 1
// Write a function `sum` which accepts an array of numbers, adds all the elements together, and returns that value.

function sum(numbers){
  //input = list of numbers
  //output = sum of all the numbers in the list as an integer.
  //use reduce function to add all the numbers.
  return numbers.reduce((sum, num)=> sum += num);
}

console.log(sum([1,2,3,4,5]));

// ### Prompt 2
// Write a function `average` which takes an array of numbers, and returns the sum of all the elements divided by the number of elements.

// I.e. if `total` was the value of adding `n` elements, the function `average` would return `total/n`;

function average(numbers){
  //input-list of numbers
  //output-average of the numbers
  return sum(numbers)/numbers.length;
}

console.log(average([1,2,3,4,5]));

// <!--### Prompt 3-->
// Ask the interviewee to use the `assertEqual` function provided below, to check if their `average` function works.

function assertEqual(actual, expected, message) {
  if (actual !== expected) {
    console.log("FAILED: " + message);
  } else {
    console.log("Passed!");
  }
}

var array = [10, 12, 15, 18, 22, 13];
var output = 15;
var array2 = [43, 22, 64, 91];
var output2 = 55;

assertEqual(average([1,2,3,4,5]), 3, 'should equal 3');
assertEqual(average(array), output, 'should pass if avg is 15');
assertEqual(average(array2), output2, 'should pass if avg is 55');

// <!--### Prompt 4 -->
// Create a function that will return a new object, which only contains the properties of an input object which have numbers as values

// e.g.
var person = {
  name: "Sean",
  age: 29,
  birth_day: 10,
  birth_month: "March",
  birth_year: 1930,
  married: true,
};

// `numberValuesOnly(person)` returns:
// {
//   age: 29,
//   birth_day: 10,
//   birth_year: 1930
// }

function numberValuesOnly(obj){
  //input obj with properties of a person
  //output reutrn obj with values that only contain numbers
  //use a for..in loop to iterate through every value and add it to a new obj if the value is a number.
  var numberObj = {};
  for(var key in obj){
    if(typeof obj[key] === 'number'){
      numberObj[key] = obj[key];
    }
  }
  return numberObj;
}

console.log(numberValuesOnly(person));


function certainValuesOnly(obj, dataType){
  //i - obj and dataType
  //o - new object that only has the specified dataType
  var newObj = {};
  if(dataType !== 'string' || dataType !== 'number' ||dataType !== 'boolean'){
    return 'data type is not correct';
  }
  for(var key in obj){
    if(typeof obj[key] === dataType){
      newObj[key] = obj[key];
    }
  }
  return newObj;
}

console.log(certainValuesOnly(person, 'boolean'));
console.log(certainValuesOnly(person, 'string'));