//Hello Peter Park

//Prompt 1
//Write a function 'fullName' which takes in an object with a first and last name property, 
//and returns the first and last name separated by a space.

//Sample input:
var artistA = {first: "Beyonce", last: "Knowles"};
var artistB = {first: "Kendrick", last: "Lamar"};

var fullName = function(nameObj) {
//input - object with prop first and last
//output - string of the first and last name values
  return `${nameObj.first} ${nameObj.last}`;
}

//Result
fullName(artistA); //"Beyonce Knowles"
fullName(artistB); //"Kendrick Lamar"

//Prompt 2
var allStars2017 = [
    {
      name: {first: "Dwyane", last: "Wade"},
      pointsPerGame: 23.7,
      assistsPerGame: 5.8,
      reboundsPerGame: 4.8
    }, 
    {
      name: {first: "Kyle", last: "Lowry"},
      pointsPerGame: 13.5,
      assistsPerGame: 5.7,
      reboundsPerGame: 4.0
    }, 
    {
      name: {first: "LeBron", last: "James"},
      pointsPerGame: 27.2,
      assistsPerGame: 6.9,
      reboundsPerGame: 7.2
    }, 
    {
      name: {first: "Paul", last: "George"},
      pointsPerGame: 16.9,
      assistsPerGame: 3.1,
      reboundsPerGame: 6.2
    }, 
    {
      name: {first: "Carmelo", last: "Anthony"},
      pointsPerGame: 24.9,
      assistsPerGame: 3.2,
      reboundsPerGame: 6.6
    }, 
    {
      name: {first: "Stephen", last: "Curry"},
      pointsPerGame: 22.4,
      assistsPerGame: 6.9,
      reboundsPerGame: 4.3
    }, 
    {
      name: {first: "Russell", last: "Westbrook"},
      pointsPerGame: 21.5,
      assistsPerGame: 2.6,
      reboundsPerGame: 5.6
    }, 
    {
      name: {first: "Kobe", last: "Bryant"},
      pointsPerGame: 25.0,
      assistsPerGame: 4.7,
      reboundsPerGame: 5.2
    }, 
    {
      name: {first: "Kevin", last: "Durant"},
      pointsPerGame: 25.6,
      assistsPerGame: 2.9,
      reboundsPerGame: 5.6
    }, 
    {
      name: {first: "Kawhi", last: "Leonard"},
      pointsPerGame: 14.3,
      assistsPerGame: 2.0,
      reboundsPerGame: 6.3
    }
];

//You work for a scouting manager, and they only want you to pay attention to players who score at least 20 points per game. 
//Create a function that returns an array of player's first and last names who fit this description.

var highScoringPlayers = function(players){
//input - array of players
//output - first and last names
//chaining filter and map to return the fullName
  return players.filter(player => player.pointsPerGame >= 20).map(player => fullName(player.name));
}

//Result:
 highScoringPlayers(allStars2017); //["Dwyane Wade", "LeBron James", "Carmelo Anthony", "Stephen Curry", "Russell Westbrook", "Kobe Bryant", "Kevin Durant"]