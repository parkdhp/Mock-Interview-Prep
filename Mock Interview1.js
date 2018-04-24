/*
Part1:
Write a function, isLargerInt which, given two strings, each representing an integer
returns true if the numerical value of the first is greater than the numerical value of the second, and false if it's not.
Example:
isLargerInt('5', '10')
// should return false
isLargerInt('20', '11')
// should return true
isLargerInt('13', '14')
// should return false
*/

//input string in form of number
//output boolean
//need to parse the string and compare
//if parse num1 > parse num2
  //return true
//else
  //return false

  function isLargerInt(num1, num2){
    return +num1 > +num2 ? true : false;
  }
  
  // console.log(isLargerInt('5', '10'));
  // console.log(isLargerInt('20', '11'))
  // console.log(isLargerInt('13', '14'))
  
  /*
  Part2:
  Write a function, newerThanVersion which, given a major version, a minor version, and a build version
  returns true if the first version is more recent than the second version, and false if it's not.
  */
  //---TESTING---//
  function assert(expectedBehavior, descriptionOfCorrectBehavior) {
    if (!expectedBehavior) {
      console.log(descriptionOfCorrectBehavior);
   } else {
      console.log('test passed');
   }
  }
  assert(newerThanVersion("5.1", "5.3") === false, "Should return true; 5.1 is newer than 5.3");
  assert(newerThanVersion("5.1", "5.0") === true, "Should return true; 5.1 is newer than 5.0");
  // newerThanVersion should be able to handle version strings 
  // that contain a major version, minor version, and build version.
  assert(newerThanVersion("1", "2") === false, "Should return false; 2 is newer than 1");
  assert(newerThanVersion("5.1", "4.8") === true, "Should return true; 5.1 is newer than 4.8");
  assert(newerThanVersion("5.1.8", "5.1.7") === true, "Should return true; 5.1.8 is newer than 5.1.7");
  assert(newerThanVersion("5.1.7", "5.1.8") === false, "Should return true; 5.1.8 is newer than 5.1.7");
  assert(newerThanVersion("5.1.8", "5.1.8") === false, "Should return false; 5.1.8 is the same as 5.1.8");
  // newerThanVersion should also be able to compare version numbers of // different lengths
  assert(newerThanVersion("3", "1.0.5") === true, "Should return true; 3 is newer than 1.0.5");
  assert(newerThanVersion("1.12.3", "10.4") === false, "Should return false; 10.4 is newer than 1.12.3");
  assert(newerThanVersion("3.5.1", "3.5") === true, "Should return true; 3.5.1 is newer than 3.5");
  assert(newerThanVersion("4.6", "4.6.3") === false, "Should return false; 4.6.3 is newer than 4.6");
  assert(newerThanVersion("4.10.3", "4.2.3") === true, "Should return true; 4.10.3 is newer than 4.2.3");
  
  
  function newerThanVersion(ver1, ver2){
    //input two strings with integer values separated by a .
    //output boolean
    //split versions into array of numbers
    //if given a version number with only 1 elements, add 2 0s to the array
    //if given a version number with only 2 elements, add 1 0 to the array
    //compare major version  number, compare minor number, and lastly compare build number
    //check which version is more recent
    var version1 = ver1.split('.');
    var version2 = ver2.split('.');
    
    var arrLength = version1.length > version2.length ? version1.length : version2.length;

    for(var i = 0; i < arrLength; i++){
      if(version1[i] !== version2[i]){
        return isLargerInt(undefNum(version1[i]), undefNum(version2[i]))
      }
    }
    return false;
  }
  
  function undefNum(num){
    return num === undefined ? 0 : num;
  }


/*

Part 3:
There's a patch that was released after mac OSX version 10.3.1 Panther (Pinot) that fixed many bugs with the mac OSX.
Write a function that returns a list of the names of all the OSX verstions after the patch release.

Example:
postPatchVersions(macOS)
// should return 
  [
    'Tiger (Merlot)', 
    'Tiger (Chardonnay)', 
    'Leopard (Chablis)', 
    'Snow Leopard', 
    'Lion (Barolo)', 
    'Mountain Lion (Zinfandel)', 
    'Mavericks (Cabernet)', 
    'Yosemite (Syrah)', 
    'El Capitan (Gala)', 
    'Sierra (Fuji)', 
    'High Sierra'
  ]

*/

var macOS = {
  OSX: {
    releaseYear: 2001,
    versions: [
      {name: 'Kodiak', version: '10'},
      {name: 'Cheetah', version: '10.0'},
      {name: 'Puma', version: '10.1'},
      {name: 'Jaguar', version: '10.2'},
      {name: 'Panther (Pinot)', version: '10.3.1'},
      {name: 'Tiger (Merlot)', version: '10.4'},
      {name: 'Tiger (Chardonnay)', version: '10.4.4'},
      {name: 'Leopard (Chablis)', version: '10.5'},
      {name: 'Snow Leopard', version: '10.6'},
      {name: 'Lion (Barolo)', version: '10.7.0'},
      {name: 'Mountain Lion (Zinfandel)', version: '10.8'},
      {name: 'Mavericks (Cabernet)', version: '10.9'},
      {name: 'Yosemite (Syrah)', version: '10.10.0'},
      {name: 'El Capitan (Gala)', version: '10.11'},
      {name: 'Sierra (Fuji)', version: '10.12'},
      {name: 'High Sierra', version: '10.13.4'}
    ]
    }
  } 
  
  
  
  function postPatchVersions(macOS){
    //input object OSX with prop versions that includes objects of versions
    //list versions after 10.3.1 Panther (Pinot)
    //if macOs.OSX.versions[num].version is greater than panther pinot, map the names of that version into a new array and return it.
    return macOS.OSX.versions.reduce((acc, curr) => {
      if(newerThanVersion(curr.version, "10.3.1")){
        acc.push(curr.name);
      }
      return acc;
    }, []);
    
      // .filter(version => newerThanVersion(version.version, "10.3.1"))
      // .map(name => name.name);
  }
  
  postPatchVersions(macOS);