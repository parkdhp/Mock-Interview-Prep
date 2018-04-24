var inventory = [{
  name: 'Brunello Cucinelli',
  shoes: [{
      name: 'tasselled black low-top lace-up',
      price: 1000
    },
    {
      name: 'tasselled green low-top lace-up',
      price: 1100
    },
    {
      name: 'plain beige suede moccasin',
      price: 950
    },
    {
      name: 'plain olive suede moccasin',
      price: 1050
    }
  ]
},
{
  name: 'Gucci',
  shoes: [{
      name: 'red leather laced sneakers',
      price: 800
    },
    {
      name: 'black leather laced sneakers',
      price: 900
    }
  ]
}
];


function renderInventory(inven) {
  var itemList = '';
  for(var i = 0; i < inven.length; i++){
    var designer = inven[i];
    var designerName = designer.name;
    for(var z = 0; z < designer.shoes.length; z++){
      var shoeName = designer.shoes[z].name;
      var shoePrice = designer.shoes[z].price;
      if(i === inven.length-1 && z === designer.shoes.length-1){
        itemList += `${designerName}, ${shoeName}, ${shoePrice}`
      } else{
        itemList += `${designerName}, ${shoeName}, ${shoePrice}\n`
      }
    }
  }
  return itemList;
}






console.log(renderInventory(inventory));


//Create helper functions as needed

// Concatenate all the information of each shoe: 
// {designer name}, {shoe name}, {price} 
// separate each shoe’s full info with a new line
// Brunello Cucinelli, tasselled black low-top lace-up, 1000