// Write a function compareDates that takes in two strings of dates in the following en-US short-date pattern format: '6/15/2009' and returns whether the first date is more recent than the second.

function compareDates(date1, date2){
  //input is 2 string of dates
  //output should be true if date1 is more recent than date2
  //The first element we want to compare is the year, followed by the month, and the date
  //create an array by splitting against '/', index 0 = month, index 1 = day, index 2 = year
  //create helper function to parseDate and return array of integers resembling the dates
  //now we will compare the year, true if date1 year is greater than date2 year
  if(getYear(date1) > getYear(date2)){ //if date1
    return true;
  } else if(getYear(date1) < getYear(date2)){
    return false;
  } else if(getYear(date1) === getYear(date2)){
    if(getMonth(date1) > getMonth(date2)){
      return true;
    } else if(getMonth(date1) < getMonth(date2)){
      return false;
    } else if(getMonth(date1) === getMonth(date2)){
      if(getDay(date1) > getDay(date2)){
        return true;
      } else if(getDay(date1) < getDay(date2)){
        return false;
      } else{
        return 'They are the same date.';
      }
    }
  }

  // console.log((getYear(date1)));
  // compareNum(getYear(date1), getYear(date2))?
  //   true : (getYear(date1) < getYear(date2))?
  //     false : (getMonth(date1) > getMonth(date2))?
  //       true: (getMonth(date1) < getMonth(date2))?
  //         false: (getDay(date1) > getDay(date2))?
  //           true: (getDay(date1) < getDay(date2))?
  //             false: "They are the same date.";
        
}

function compareNum(num1, num2){
  return num1 > num2;
}

function parseDate(date){
  return date.split('/').map(num => parseInt(num));
}

function getYear(date){
  return parseDate(date)[2];
}

function getMonth(date){
  return parseDate(date)[1];
}

function getDay(date){
  return parseDate(date)[0];
}







console.log(compareDates('6/15/2018', '12/20/2016')) //---> true
console.log(compareDates('12/31/1900', '12/25/2005')) //---> false
console.log(compareDates('1/3/2000', '12/25/2005')) //---> false