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

function listAllBlackShoes(inven) {
  var shoeList = [];
  inven.map(function(shoe){
    shoeList.push(`${shoe.name},${getBlackShoeAndPrice(shoe.shoes)}`);
  });
  return shoeList.join('\n');
}

function getBlackShoeAndPrice(shoe){
  var shoeAndPrice = '';
  shoe.forEach(function(shoe){
    if(shoe.name.includes('black')){
      shoeAndPrice = `${shoe.name},${shoe.price}`;
    }
  });
  return shoeAndPrice;
}

function assertEquals(actual, expected, testName){
  if(actual === expected){
    console.log(`passed`);
  } else{
    console.log(`FAILED  ${testName} expected ${expected} but got ${actual}`);
  }
}

assertEquals(listAllBlackShoes(inventory), `Brunello Cucinelli,tasselled black low-top lace-up,1000
Gucci,black leather laced sneakers,900`, `get black shoes`);