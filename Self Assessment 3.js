var each = function (collection, iterator) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      iterator(collection[key], key, collection);
    }
  }
};


/*
Issues with 'each'
1) Double negative to test whether collection is an Array.
2) i should start at 0
3) else if is not necessary, Array is also an object
4) variable i is not declared, should use key since we are using the for...in loop to iterate over objects.
etc.
*/

function nameBreakdown(input) {
  var name = {};
  var fullName = input.split(' ');
  if (fullName.length === 3) {
    name.first = fullName[0];
    name.middle = fullName[1];
    name.last = fullName[2];
  } else {
    name.first = fullName[0];
    name.last = fullName[1];
  }
  return name;
}
console.log(nameBreakdown('Lena P. Mason')); // { first: "Lena", middle: "P.", last: "Mason" }
console.log(nameBreakdown('Roland Porter')); // { first: "Roland", last: "Porter" };
console.log(nameBreakdown('roland porter').hasOwnProperty('middle'));

function addIdentificationNumber(obj, id) {
  if (!id) {
    obj.id = 'n/a';
  } else if (typeof id !== 'number') {
    return 'Invalid code';
  } else {
    obj.id = id;
  }
  return obj;
}


var staff = ["Aleen Y. Atkins", "Alvaro L. Angelos", "Denese Dossett", "Douglas Denney", "Earline Erickson", "Herman L. Hazell", "Homer Hirth", "Hwa Heidt", "Hyon G. Hampshire", "Issac Ingerson", "Jeraldine N. Joplin", "Jin L. Jeffrey"];

function breakDownListOfNames(names) {
  return names.map(nameBreakdown);
}

console.log("namebreakdown: " + breakDownListOfNames(staff)[0]); // {first: 'Aleen', middle: 'Y.', last: 'Atkins'}
console.log(breakDownListOfNames(staff)[2]); // {first: 'Denese', last: 'Dossett'}


function assignStaffID(names, id, increment) {
  names = breakDownListOfNames(names);
  increment = increment || 1;
  for(var i = 0; i < names.length; i++){
    addIdentificationNumber(names[i], 11000 + i * increment);
  }
  return names;
}

var firstSet = assignStaffID(staff, 11000);
var secondSet = assignStaffID(staff, 11000, 12);

console.log(Array.isArray(firstSet));
console.log(firstSet[0]);
console.log(firstSet[1]);

console.log(Array.isArray(secondSet));
console.log(secondSet[0]);
console.log(secondSet[1]);
console.log(secondSet[2]);

function doAllHaveMiddleInitials(names) {
  if (names.length == staffWithMI.length) {
    return true;
  } else {
    return false;
  }
}

var staff = ["Aleen Y. Atkins", "Alvaro L. Angelos", "Denese Dossett", "Douglas Denney", "Earline Erickson", "Herman L. Hazell", "Homer Hirth", "Hwa Heidt", "Hyon G. Hampshire", "Issac Ingerson", "Jeraldine N. Joplin", "Jin L. Jeffrey"];

var staffWithMI = staff.filter(function (name) {
  //assuming nameBreakdown works
  return nameBreakdown(name).hasOwnProperty('middle');
});

console.log(doAllHaveMiddleInitials(staff)); //false
console.log(doAllHaveMiddleInitials(staffWithMI)); //true