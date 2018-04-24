/*
Part 1
Write a function, each, which given a collection and an iterator, 
calls iterator(value, key, collection) for each element of collection.
Accepts both arrays and objects.
Note: _.each does not have a return value, but rather simply runs the
iterator function over each item in the input collection.
*/

function each(coll, iterator){
  if(Array.isArray(coll)){
    for(var i = 0; i < coll.length; i++){
      iterator(coll[i], i, coll);
    }
  } else {
    for(var key in coll){
      iterator(coll[key], key, coll);
    }
  }
}

var x = {a: 1,b:2,c:3,d:4};
each(x, x=> console.log(x));

/*

Part 2
Write a function nameBreakdown which takes in a name, and returns an object with proper first, middle, and last names as properties.

Things to consider:

If input name does not have a middle initial, the return object should contain no middle property. 
I.e. calling hasOwnProperty('middle') should return false.
Assume the only two variations of input values are similar to the given below -- 
one with first, middle initial, and last, and another with simply first and last.

Example:

nameBreakdown('Lena P. Mason'); // { first: "Lena", middle: "P.", last: "Mason" }
nameBreakdown('Roland Porter'); // { first: "Roland", last: "Porter" };

*/

var nameBreakdown = function(name){
  var nameSplit = name.split(' ');
  if(nameSplit.length === 3){
    return {first: nameSplit[0], middle: nameSplit[1], last: nameSplit[2]};
  } else{
    return {first: nameSplit[0], last: nameSplit[1]};
  }
}

function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    (`Passed: [${testName}]`);
  } else {
    console.log(`FAILED [${testName}] Expected ${expected}, but got ${actual}`);
  }
}



/*
Part 3
Write a function addIdentificationNumber which takes in an object and an "identification (id) code", 
and returns the object with an added id property to it. The id's value will be the id code.
Things to consider:
If no id code is given, assign 'n/a' as the property's value.
If the id code is not a number, return 'Invalid Code'.
Example:
addIdentificationNumber({a : 0}, 43234); // {a: 0, id: 43234}
addIdentificationNumber({b : 1}); // {b : 1, id: 'n/a'}
addIdentificationNumber({c : 2}, 'ABC'); // "Invalid code"
Using each
*/

function addIdentificationNumber(obj, id){
  //i = obj and id#
  //o =  obj with id property
  if(!id){
    obj.id = 'n/a';
  } else if(typeof id !== 'number'){
    return 'Invalid Code';
  } else{
    obj.id = id;
  }
  return obj;
}



/*

For each of the following sections, you must use the corrected each function from Part 1 
OR a native array method such as: forEach, map, filter, reduce, etc.

Given:



*/

/*

Part 4
Write a function breakDownListOfNames which takes in the staff array, 
and returns a new array of objects with their names broken down into first, middle, and last key-value pairs. 
If there is no middle name, the corresponding object should not contain a middle property.

breakDownListOfNames(staff)[0]; // {first: 'Aleen', middle: 'Y.', last: 'Atkins'}
breakDownListOfNames(staff)[2]; // {first: 'Denese', last: 'Dossett'}

*/

var staff = ["Aleen Y. Atkins", "Alvaro L. Angelos", "Denese Dossett", "Douglas Denney", "Earline Erickson"];

function breakDownListOfNames(staff){
  return staff.map(name => nameBreakdown(name));
}

/*
Part 5
Write a function assignStaffID which will take in an array of staff members' names, 
a starting number, and an optional 3rd argument. 
This function should return a new array of objects, each with a name property (the original staff member's name), 
and an id property. 
Each staff member should get an ID code starting from 11000, and increment by the optional 3rd parameter.
Things to consider:
If a 3rd argument is not provided, increment by 1 for each staff member.
var firstSet = assignStaffID(staff, 11000);
var secondSet = assignStaffID(staff, 11000, 12);
Array.isArray(firstSet); //true;
firstSet[0]; // {name: 'Aleen Y. Atkins', id: 11000};
firstSet[1]; // {name: 'Alvaro L. Angelos', id: 11001};
Array.isArray(secondSet); //true;
secondSet[0]; // {name: 'Aleen Y. Atkins', id: 11000};
secondSet[1]; // {name: 'Alvaro L. Angelos', id: 11012};
secondSet[2]; // {name: 'Denese Dossett', id: 11024};
*/

function assignStaffID(names, num, incre){
  //i= arr, num, arg
  //o = array with objects that include name and id
  // incre = incre || 1;
  // if(!incre){
  //   return names.map(name => {
  //     var nameID = {name: name, id: num}
  //     num++;
  //     return nameID;
  //     });
  // } else{
  //   return names.map(name => {
  //     var nameID = {name: name, id: num}
  //     num += incre;
  //     return nameID;
  //     });
  // }
  incre = incre || 1;
  return names.map((name, i) => {
    return {name: name, id: num + (incre * i)}
  });
}

var firstSet = assignStaffID(staff, 11000);
var secondSet = assignStaffID(staff, 11000, 12);
Array.isArray(firstSet); //true;
// firstSet[0]; // {name: 'Aleen Y. Atkins', id: 11000};
// firstSet[1]; // {name: 'Alvaro L. Angelos', id: 11001};
// Array.isArray(secondSet); //true;
// secondSet[0]; // {name: 'Aleen Y. Atkins', id: 11000};
// secondSet[1]; // {name: 'Alvaro L. Angelos', id: 11012};