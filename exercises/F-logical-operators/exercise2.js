/*
  Logical Operators
  ---------------------------------
  This program calls some functions that are either missing or incomplete.
  Update the code so that you get the expected result.
*/
//if it is less than 0 function
function isNegative(number) {
  if(number < 0){
    return true;
  }else{
    return false;
  }
}
 // number between 5-10 function
 function isBetween5and10(number) {
  if(number > 5 || number < 10){
    return true;
  }else{
    return false;
  }
}
//Daniel is a short name
function isShortName(name) {
  if(name ==="Daniel"){
    return true;
  }else{
    return false;
  }
}
//if Daniel start with D
function startsWithD(name) {
  if(name.charAt(0)=='D'){     // I use the charAt function to get the first character in the string
    return true;
  }else{
    return false;
  }
}


/* 
  DO NOT EDIT BELOW THIS LINE
  --------------------------- */

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

/* 
  EXPECTED RESULT
  ---------------
  Is -10 is a negative number? true
  Is 5 a negative number? false
  Is 10 in the range 5-10? true
  Is Daniel a short name? true
  Does Daniel start with 'D'?
*/
