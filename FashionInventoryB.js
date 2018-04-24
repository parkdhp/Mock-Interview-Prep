function calculateAveragePricePerDesigner(inven) {
  var averagePerDesigner = {}
  var average = [];
  inven.forEach(function (brand) {
    var shoe = {};
    shoe.name = brand.name;
    shoe.averagePrice = averagePrice(brand.shoes);
    average.push(shoe);
  });
  averagePerDesigner.designers = average;
  return averagePerDesigner;
}

function averagePrice(designer) {
  var total = 0;
  designer.forEach(function (shoe) {
    total += shoe.price;
  });
  return total / designer.length;
}

function assertObjEquals(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log(`passed`);
  } else {
    console.log(`FAILED ${testName} expected ${JSON.stringify(expected)} but got ${JSON.stringify(actual)}`);
  }
}


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

assertObjEquals(calculateAveragePricePerDesigner(inventory), {
  'designers': [{
    'name': 'Brunello Cucinelli',
    'averagePrice': 1025
  }, {
    'name': 'Gucci',
    'averagePrice': 850
  }]
}, 'should get Average');