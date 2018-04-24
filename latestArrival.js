var timeStamp = [
  {
    name: 'John Smith',
    time: '7:01:56'
  }, {
    name: 'Anthony Summers',
    time: '8:05:23'
  }, {
    name: 'Jill Jones',
    time: '12:51:12'
  }, {
    name: 'Richard Dill',
    time: '16:12:8'
  }, {
    name: 'Jake Watson',
    time: '16:12:10'
  }
];

/* PROMPT:
The above object is a list of people and the time they arrived at the office. Take special note to study the time notation.
Write a function latestArrival that returns the name of the person who arrived the last.
You'll automatically pass both tests if your function returns the right value. */

function latestArrival(list) {
  // Write your code here, using any helper functions and HOFs you'd like
  //input is a collection of people with name and time properties
  //output should be the name of the person who came the latest
  var lastPerson = list.reduce(function(latest, person) {
    if (time(person.time)[0] > time(latest.time)[0]) { //check hour
      latest = person; //current person is now the latest person
    } else if (time(person.time)[0] < time(latest.time)[0]) {
      latest = latest;
    } else if (time(person.time)[0] === time(latest.time)[0]) {
      //now check for minutes
      if (time(person.time)[1] > time(latest.time)[1]) {
        latest = person;
      } else if (time(person.time)[1] < time(latest.time)[1]) {
        latest = latest;
      } else if (time(person.time)[1] === time(latest.time)[1]) {
        if (time(person.time)[2] > time(latest.time)[2]) {
          latest = person;
        } else if (time(person.time)[2] < time(latest.time)[2]) {
          latest = latest;
        }
      }
    }
    return latest;
  }).name;

  return lastPerson;
}

latestArrival(timeStamp);

//helper function to make time into array
function time(timeString) {
  return timeString.split(':').map(function(time) {
    return parseInt(time);
  });
}

// Write your code above; don't change anything below.

/* TEST SUITE */

let assert = (actual, expected, test) => actual === expected
  ? console.log(`passed`)
  : console.log(`FAILED [${test}] Expected '${expected}', but got '${actual}'`);

let testLatest = () => {
  let actual = latestArrival(timeStamp);
  let expected = 'Jake Watson';
  let test = `returns person with longest lifespan from a list`;
  assert(actual, expected, test);
}

let testLAreturnType = () => {
  let test = `returns a string name`;
  assert(typeof latestArrival(timeStamp), 'string', test);
}

testLatest();
testLAreturnType();
