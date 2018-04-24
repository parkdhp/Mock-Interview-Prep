// Write a function comparePlayers that compares two Overwatch players' scores, and return whether the first player has a higher win percentage than the second player.
// The format for a player's score is 'win-loss-tie', e.g. '0-2-10' or '4-4-0'
// A player's win percentage can be calculated as wins divided by total games.
// Note: we will assume that players have played at least one game

function comparePlayers(player1, player2) {
  console.log(calculatePercentage(player1) + ' ' + calculatePercentage(player2));
  return calculatePercentage(player1) > calculatePercentage(player2);
}

console.log(comparePlayers('5-6-0', '4-12-5')); // ---> true
console.log(comparePlayers('15-6-69', '1-0-0')); // ---> false
console.log(comparePlayers('1-2-3', '0-0-1')); // ---> true


function calculatePercentage(history){
  history = history.split('-').map(num => parseInt(num));
  var totalGames = history.reduce((total, record) => {
    return total +=  record;
  }, 0);
  return history[0]/totalGames * 100;
}

