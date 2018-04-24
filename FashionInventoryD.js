var inventory = [{
  name: 'Brunello Cucinelli',
  shoes: [{
    name: 'tasselled black low-top lace-up',
    price: 1000
  }, {
    name: 'tasselled green low-top lace-up',
    price: 1100
  }, {
    name: 'plain beige suede moccasin',
    price: 950
  }, {
    name: 'plain olive suede moccasin',
    price: 1050
  }]
}, {
  name: 'Gucci',
  shoes: [{
    name: 'red leather laced sneakers',
    price: 800
  }, {
    name: 'black leather laced sneakers',
    price: 900
  }]
}];

//The task now is to find all the laced shoes. 
// Output shoe names that contain “lace” in them, and indicate which word contains “lace”.

// [{
//   "nameWords": ["tasselled", "black", "low-top", "lace-up"],
//   "targetWordIndex": 3
// }, {
//   "nameWords": ["tasselled", "green", "low-top", "lace-up"],
//   "targetWordIndex": 3
// }, {
//   "nameWords": ["red", "leather", "laced", "sneakers"],
//   "targetWordIndex": 2
// }, {
//   "nameWords": ["black", "leather", "laced", "sneakers"],
//   "targetWordIndex": 2
// }]

function findLacedShoes(inven){
  var shoeList = [];
  var objOfWords = {};
  debugger;
  for(i = 0; i < inven.length; i++){
    inven[i].shoes.forEach(function(shoeName){
      objOfWords.nameWords = returnNameAsArray(shoeName.name);
      objOfWords.targetWordIndex = returnIndexOfLace(objOfWords.nameWords);
    })
    shoeList.push(objOfWords);
  }
  return shoeList;
}

function returnNameAsArray(shoeName){
  var wordsInArray = [];
  wordsInArray = shoeName.split(' ');
  return wordsInArray;
}

function returnIndexOfLace(arr){
  var index = 0;
  arr.forEach(function(word, i){
    if(word.includes('lace')){
      index = i;
    }
  });
  return index;
}

console.log(findLacedShoes(inventory));
//obj of designer will have 
  //1. nameWords property with array of words 
  //2. targetWordIndex property with index corresponding to word containing lace
    //convert shoe name into an array split by spaces
    //if 'lace' is in any elements in array, index will be logged
    //targetWordIndex property will return index from shoe name
  //


