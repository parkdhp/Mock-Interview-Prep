function findLongestPalindrome(sentence) {
  // split sentence into words
  debugger;
  var words =  sentence.split(' ');
  // iterate words and collect the palindromes
  var palindromes = words.filter(isPalindrome).map(word => reverseString(word));
  // sort the list of palindromes by word length
  console.log(palindromes)
  console.log(palindromes.sort(sortAscendingByLength));
  // return the largest item in the sorted list
  return palindromes[palindromes.length-1];
}

function reverseString(string) {
  var characters = string.split(``);
  var reversed = [];
  characters.map(unshiftChar => reversed.unshift(unshiftChar));
  return reversed.join('');
}

function isPalindrome(word) {
  return word === reverseString(word) ? true : false;
}

function sortAscendingByLength(a, b) {
  console.log(a+' '+b);
  if(a.length < b.length){
    return -1
  }
  if(a.length > b.length){
    return 1
  }
  return 0;
  
}


console.log(findLongestPalindrome(`hello i am a rotator civic kayak`));