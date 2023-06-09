function removeChar(str){
 //use .slice() method to remove the first and last characters from a string
 //because .slice() returns a new string and leaves the old one intact, we need a new variable to house the new string
  let newStr = str.slice(1, -1);
 // now we just have to return the new string we generated and are keeping inside the variable newStr
  return newStr;
};