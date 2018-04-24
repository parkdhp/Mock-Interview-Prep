function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}

function indexedExponentials(numbers){
  var exp = [];
  each(numbers, function(element, i){
     exp.push(element**i);
  })
  return exp;
}

console.log(indexedExponentials([2, 5, 7, 4]));

function evenIndexedOddNumbers(numbers){
  oddWeven = [];
  each(numbers, function(element, i){
    if(i%2 === 0 && element%2 ===1){
      oddWeven.push(element);
    }
  });
  return oddWeven;
}

console.log(evenIndexedOddNumbers([1, 3, 3, 4, 7, 10]));

var voters = [  
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function totalVotes(arr) {
  var votes =  arr.reduce(function(acc, ele){
    if(ele.voted){
      acc++;
    }
    return acc;
  }, 0);
  return votes;
}

console.log(totalVotes(voters));


var wishlist = [  
  { title: "Tesla Model S", price: 90000 },
  { title: "4 carat diamond ring", price: 45000 },
  { title: "Fancy hacky Sack", price: 5 },
  { title: "Gold fidgit spinner", price: 2000 },
  { title: "A second Tesla Model S", price: 90000 }
];

function shoppingSpree(arr) {
  var total = arr.reduce((acc, val) => acc += val.price, 0);
  return total;
}



console.log(shoppingSpree(wishlist)); // 227005  