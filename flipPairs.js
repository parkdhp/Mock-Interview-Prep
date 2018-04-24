function flipPairs(string) {
  var output = '';
  // iterate string
    // reverse every two characters
    // add them to output
    for (var x = 0; x < string.length; x+=2) {
      var pairOfCharacters = string.slice(x, x+2);
      var reversedPair = pairOfCharacters.split('').reverse().join('');
      output += reversedPair;
    }
  return output;
}


function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed ' + testName);
  } else {
    console.log('failed ' + testName + ' expected: ' + expected + 'but got: ' + actual);
  }
}

var input = 'check out how interesting this problem is, it\'s insanely interesting!';
var actual = flipPairs("input");
var expected = "hcce kuo toh wnietertsni ghtsip orlbmei ,si 't sniasenyli tnreseitgn!";
assertEqual(actual, expected, 'should return string with reversed pairs of characters');

console.log(flipPairs(input));