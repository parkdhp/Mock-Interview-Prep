// const fruits = ['apple', 'cherry', 'orange', 'lemon', 'apple', 'lemon', 'cherry', 'orange', 'orange', 'apple', 'lemon', 'kumquat', 'apple', 'cherry', 'orange', 'lemon']

//Create a function that returns an object with fruits as the keys and how many of each fruit that exists as the value.

//example { apple: 4, cherry: 3, orange: 4, lemon: 4, kumquat: 1 }

//PSEUDO CODE: 
//create a function 
//Take given array and use reduce to RETURN an object 
//create keys 
//Check if property exsists:: no => add it, yes => add 1 to it
//RETURN reduced result from function 

// const fruitInventory = (arr) => {
//   const summary = fruits.reduce((acc, elem) => {
//     if (!acc[elem]) {
//       acc[elem] = 0
//     }
//     acc[elem]++
//     return acc
//   }, {})
//   return summary
// }
// fruitInventory(fruits)

//*************************************************************************
// const foods = [{ type: 'cheeseburger', calories: 442 }, { type: 'burrito', calories: 1002 }, { type: 'avocado', calories: 234 }, { type: 'kumquat', calories: 13 }]

//create a function that takes in a number of days and returns how many calories you would have consumed if you ate one of each of the items in the foods array each of those days. 

//example: if I input 1 into the function, it would output 1,691

//PSEUDO CODE:
//create a function that takes a parameter(the number of days) 
//function should REDUCE array to a number value that totals the calories of all the objects calories (acc should === a num to start)
//get calories value from each object :: add value to accumulator
//multiply the reduced sum by the number of days and RETURN acc 

// const dailyCalCount = (numDays) => {
//   const totalCalCount = foods.reduce((acc, elem) => {
//     acc += (elem.calories);
//     return acc
//   }, 0)
//   return totalCalCount * numDays
// }

// dailyCalCount(3)
//*************************************************************************
// const movies = {
//   horror: [ { title: 'Scream', rating: 'R' }, { title: 'Psycho', rating: 'R'}, { title: 'The Ring', rating: 'PG-13' }],
//   comedy: [ { title: 'Step Brothers', rating: 'R' }, { title: 'Tommy Boy', rating: 'PG-13' }, { title: 'Rush Hour', rating: 'PG-13' }, {title: 'Anchorman', rating: 'PG-13'}],
//   drama: [ { title: 'Titanic', rating: 'PG-13' }, { title: 'Forrest Gump', rating: 'PG-13'}, { title: 'The Godfather', rating: 'R'}]
// }

//create a function that spits out an object that has all of the movie types (horror, comedy, drama) which are each an object showing how many movies have each rating. 

//For example: 
// {
//   horror: { 'PG-13': 1, R: 2 },
//   comedy: { 'PG-13': 3, R: 1 },
//   drama: { 'PG-13': 2, R: 1 }
// }

//PSEUDO CODE:
//create a function  
//get keys from obj using Object.keys()
//use reduce to cycle through keys:: set accumulator === object
//reduce sub array of movie objects using key
  //acc === object
  //check if prop exists:: no? add it with count = 1 if yes? count++
//return acc
//return obj with keys:genre and values:count tally ratings

// const ratingSummary = () => {
//   const movieKeys = Object.keys(movies)
  
//   return movieKeys.reduce((acc, genre) => {
//     acc[genre] = movies[genre].reduce((tally, movie) => {
//       if (!tally[movie.rating]) {
//         tally[movie.rating] = 0
//       }
//       tally[movie.rating]++
//       return tally
//     }, {})
//     return acc
//   }, {})
// }

// ratingSummary()


//**************************************************************************

const denver = {
  elevation: 5280,
  mayor: "Michael Hancock",
  neighborhoods: [
    "LoDo",
    "Five Points",
    "Cap Hill",
    "East Colfax",
    "RiNo",
    "Wash Park",
    "Uptown",
    "City Park",
    "Speer",
    "Highlands",
    "Globeville",
    "Congress Park",
    "Golden Triangle",
    "Berkeley"
  ],
  buildings: {
   commercial: [
     { name: "707 17th Street", floors: 42, completed: 1981, height: 552 },
     { name: "1125 17th Street", floors: 25, completed: 1980, height: 363 },
     { name: "1600 Glenarm Place", floors: 32, completed: 1967, height: 352 }
   ],
   historical: [
     { name: "Avoca Lodge", floors: 2, completed: 1897, height: 24 },
     { name: "Brown Palace Hotel", floors: 9, completed: 1892, height: 100 },
     { name: "Denver Public Library", floors: 6, completed: 1995, height: 12 }
   ],
   athletic: [
     { name: "Coors Field", floors: 4, completed: 1995, height: 64 },
     { name: "Sports Authority Field at Mile High", floors: 8, completed: 2011, height: 112 },
     { name: "Pepsi Center", floors: 5, completed: 1999, height: 68 }
   ],
   entertainment: [
     { name: "Cherry Creek Shopping Center", floors: 2, completed: 1953, height: 30 },
     { name: "Casa Bonita", floors: 2, completed: 1974, height: 44 },
     { name: "Denver Museum of Nature and Science", floors: 5, completed: 1900, height: 54 }
   ],
   medical: [
     { name: "Saint Joseph Hospital", floors: 12, completed: 1873, height: 120, beds: 365 },
     { name: "Denver Health Medical Center", floors: 9, completed: 1860, height: 100, beds: 477 },
     { name: "Swedish Medical Center", floors: 6, completed: 1905, height: 65, beds: 368 }
   ]  
 },
 restaurants: [
   { name: "Fruition Restaurant", type: "Fine Dining", number_of_reviews: 788 },
   { name: "Sushi Den", type: "Fine Dining", number_of_reviews: 479 },
   { name: "Sam's No. 3", type: "Cheap Eats", number_of_reviews: 1870 },
   { name: "Pete's Kitchen", type: "Cheap Eats", number_of_reviews: 236 },
   { name: "Root Down", type: "Lunch", number_of_reviews: 972 },
   { name: "The Capital Grille", type: "Lunch", number_of_reviews: 531 },
   { name: "Acorn", type: "Dinner", number_of_reviews: 309 },
   { name: "Panzano", type: "Dinner", number_of_reviews: 1316}
 ],
 breweries: [
   { name: "Little Machine Brew", neighborhood: "Highlands", number_of_beers: 20 },
   { name: "Alpine Dog Brewing Company", neighborhood: "East Colfax", number_of_beers: 12 },
   { name: "Spangalang Brewery", neighborhood: "Five Points", number_of_beers: 8 },
   { name: "Great Divide", neighborhood: "RiNo", number_of_beers: 24 },
   { name: "10 Barrel Brewery", neighborhood: "RiNo", number_of_beers: 30 },
   { name: "LowDown Brewery", neighborhood: "Cap Hill", number_of_beers: 14 },
   { name: "Call to Arms", neighborhood: "Highlands", number_of_beers: 7 },
   { name: "Denver Beer Co.", neighborhood: "LoDo", number_of_beers: 22 },
   { name: "Platt Park Brewing Co.", neighborhood: "Platt Park", number_of_beers: 12 },
   { name: "Bull and Bush", neighborhood: "Speer", number_of_beers: 18 }
 ]
};

// Using the denver object below - create a function that outputs an object with the type of building (commercial, historical...) and the TOTAL number of floors for that category

//Example (numbers are not necessarily accurate in the example): 

// {
//   commercial: 99,
//   historical: 14,
//   athletic: 27,
//   entertainment: 19,
//   medical: 23
// }

// const buildingType = Object.keys(denver.buildings)

// buildingType.reduce((acc, buildingType) => {
//   acc[buildingType] = denver.buildings[buildingType].reduce((a, e) => {
//     a += e.floors
//     return a
//   }, 0)
//   return acc 
// }, {})

// const buildingTypeCount = (obj) => {
//   const keys = Object.keys(obj);
 
//   let floorSum = keys.reduce((acc, buildingType) => {
//     acc[buildingType] = obj[buildingType].reduce((a, e) => {
//       a += e.floors
//         return a
//     }, 0)
   
//       return acc
//   }, {})
 
//     return floorSum
// }

// buildingTypeCount(denver.buildings)




// let denKeys = Object.keys(denver.buildings)

// denKeys.reduce((acc, buildingType) => {
 
//   acc[buildingType] = [denver.buildings[buildingType]].reduce((a, buildingData) => {
   
//     buildingData.map((val, idx) => {
//     a += buildingData[idx].floors
//     })
   
//     // for (let i = 0; i < buildingData.length; i++) {
//     //   a += buildingData[i].floors
//     // }
//     return a
//   }, 0)
//   return acc
// }, {})

//*************************************************************************************

// Create a function that returns an array of brewery names as strings in order from most amount of beers to least

//expected outcome: 
//   ["10 Barrel Brewery", "Great Divide", "Denver Beer Co.", "Little Machine Brew", "Bull and Bush", "LoDown Brewery", "Alpine Dog Brewing Company", "Platt Park Brewing Co" "Spangalang Brewery", "Call to Arms"]

// let sorted = denver.breweries.sort((a, b) => {
//   return b.number_of_beers - a.number_of_beers
// })

// const sortedBreweries = () => {
//   let result = sorted.reduce((acc, brewery, idx, arr) => {
//     acc.push(brewery.name)
//     return acc
//   }, [])
//   return result
// }

// sortedBreweries()

// denver.breweries.reduce((acc, breweryData, index) => {
//   acc.push(breweryData)
//   acc.sort((a, b) => {
//     return b.number_of_beers - a.number_of_beers
//   })
//   return acc
// }, [])

// const brewSort = denver.breweries.sort((a, b) => {
//   return b.number_of_beers - a.number_of_beers
// })


