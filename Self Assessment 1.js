function getFirstAndLast(arr){
  return `First: ${arr[0]}, Last: ${arr[arr.length-1]}`
}

function getEveryOtherNumber(start, end){
  var everyOtherNumber = [];  
  for(var i = start; i < end; i+=2){
    everyOtherNumber.push(i);
  }
  return everyOtherNumber;
}

function personInfo(personObj){
  var person = '';
  var name = `${personObj.name.first} ${personObj.name.last}`
  var company = '';
  if(personObj.hasOwnProperty('company')){
    company = personObj.company;
    person = `${name} | ${company}`;
  } else {
    person = `${name} | N/A`;
  }
  return person;
}

function personAndSelectedInfo(personObj, propName){
  var person = '';
  var name = `${personObj.name.first} ${personObj.name.last}`
  if(personObj.hasOwnProperty(propName)){
    person = `${name} | ${personObj[propName]}`;
  } else {
    person = `${name} | N/A`;
  }
  return person;
}

function displayPeopleSelectedInfo(peopleArray, propName){
  var people = [];
  peopleArray.map(function(person){
    people.push(personAndSelectedInfo(person));
  });
  console.log(people.join(`\n`));
}