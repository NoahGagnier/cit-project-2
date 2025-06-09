/*
    CIT 281 Project 2
    Name: Noah Gagnier
*/

// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }
  
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  let result = "";
  
  for (let i = 0; i < getRandomInteger(1, 26); i++) {
    result += alphabet[getRandomInteger(1, alphabet.length - 1)];
  }
  
  //Get a single random letter within the array. 
  const getRandomLetter = function(){
let a = getRandomInteger(1,alphabet.length - 1);
let randomLetter = alphabet[a];
return randomLetter;
  }

  //get a random string of lowercase letter
  const getRandomString = function(minLength, maxLength){
    let length = getRandomInteger(minLength, maxLength + 1);
    let result = '';
    for (i = 0; i < length;i++){
    result += getRandomLetter();
    }
    return result;
  }

  const getSortedString = function(string){ return string.split("").sort().join("");}

  //getRandomLetter();
  let rstring = getRandomString(10,20);
  console.log(rstring); 
  console.log(getSortedString(rstring));