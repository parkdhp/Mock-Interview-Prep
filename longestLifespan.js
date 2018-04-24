var obituary = [
	{ name: 'John Smith', years: '1859-98' },
	{ name: 'Anthony Summers', years: '1904-77' },
	{ name: 'Jill Jones', years: '1920-78' },
	{ name: 'Richard Dill', years: '1956-2002' },
	{ name: 'Jake Watson', years: '1880-1959' },
];

/* PROMPT:
The above object is a list of people and their years of existence. Take special note to study the years notation.
Write a function longestLifespan that returns the name of the person who lived the most years.
You'll automatically pass both tests if your function returns the right value.
  */

 function longestLifespan(list) {
  // Write your code here, using any helper functions and HOFs you'd like
  //input is a collection of people with name and years properties
  //output should be the name of the person with the longest lifesspan
  return list.reduce(function(longest, next){//calculateLifespan
    if(calculateLifespan(next.years) > calculateLifespan(longest.years)){
      return next;
    } else{
      return longest;
    }
  }).name;
}

longestLifespan(obituary);

function calculateLifespan(yearsString){
  var years = yearsString.split('-').map(string => string);
  if(years[1] < 100){
    years[1] = (yearsString.slice(0,2) + years[1]);
  }
  return years[1]-years[0];
}



// Write your code above; don't change anything below.

/* TEST SUITE */

let assert = (actual, expected, test) =>
	actual === expected
		? console.log(`passed`)
		: console.log(`FAILED [${test}] Expected '${expected}', but got '${actual}'`);

let testLongestLifespan = () => {
  let actual = longestLifespan(obituary);
  let expected = 'Jake Watson';
  let test = `returns person with longest lifespan from a list`;
  assert(actual, expected, test);
}

let testLLreturnType = () => {
  let test = `returns a string name`;
  assert(typeof longestLifespan(obituary), 'string', test);
}

testLongestLifespan();
// testLLreturnType();