function alphabetPosition(text) {
    text.split("");
    var char = "";
    var arr = [];
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split('');
    
    for(var i = 0; i < text.length; i++){
      char = text.charAt(i).toLowerCase();
      
      if(alphabet.indexOf(char) > -1){
        arr.push(alphabet.indexOf(char) + 1);
        var arr2 = arr.join(" ");
      }
      
    }
    return arr2;
  }
  
  console.log(alphabetPosition("The sunset sets at twelve o' clock."));
  console.log(alphabetPosition("The narwhal bacons at midnight."));

  //exes and ohs
  function XO(str){
    same = str.toLowerCase()
    var x = 0
    var o = 0
    for (var i=0; i<same.length; i++){
      if(same[i] === 'x'){
        x ++
      } else if(same[i] === 'o'){
        o ++
      } 
    }
    return x === o
  }
  
  console.log(XO('xxoo'));

  //friend or foe
  function friend(friends){
 
    let frndGroup = [];
    for(i=0; i<friends.length;i++){
        if(friends[i].length == 4){
            frndGroup.push(friends[i])
        }
    }
    return frndGroup
  }

  console.log("Hello World");
  console.log("Goodbye World!");
  console.log("I need a break");
  console.log("Time for that break");

  // <-- 08/24/2020 -->
  
  //find the outlier in an array of either all even or odd integers
  function findOutlier(integers){
    var evens = [];
    var odds = [];
    for (var i = 0; i < integers.length; i++) 
    {
        if ((integers[i] % 2) == 0) 
        {
            evens.push(integers[i]);
        } 
        else 
        {
            odds.push(integers[i]);
        }
    }
    var elen = evens.length;
    var olen = odds.length;
 
    if (elen > olen)
    {
        return odds[0];
    } 
    else 
    {
        return evens[0];
    }
 }
 

 //return the highest and lowest numbers in a string of spaced numbers

 function highAndLow(numbers){
  // ...
  numbers = numbers.split(" ");
  return Math.max.apply(null, numbers) + " " + Math.min.apply(null, numbers)
}
console.log(highAndLow);

//Take a short string with each word of the string having a number in it that corresponds witht the words place in the string
function order(words){
  if(words === ""){
    return "";
  }
  var array = [];
  words = words.split(" ");
  var j = 1;
  for(var i = 0; i<words.length; i++){
    if(words[i].indexOf(j) > -1){
     array.push(words[i]);
    j++;
    i=-1;
    }
  }
return array.join(" ");
}
console.log(order);

//implement a difference function, which subtracts one list from another and returns the result
function arrayDiff(a, b) {
  let difArray = []
  
  for( let i = 0; i < a.length; i++){
    let elem = a[i]
    if(b.indexOf(elem) === -1){
      difArray.push(elem)
    }
  }
  return difArray
}


//A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
function isPangram(string){
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
                    'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't',
                    'u','v', 'w', 'x', 'y', 'z'];
  let result = [];
  string.toLowerCase().replace(/\w/g, (str) => {
    str.split('').reduce((acc, cur) => {
      return !result.includes(cur)
         && alphabet.includes(cur)
         && result.push(cur);
      }, '');
   });
  return alphabet.join('') === result.sort().join('');
}

//Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  
  for(var i = 0; i < numbers.length; i++)
  {
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

//Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
function humanReadable(seconds) {
  var hours = seconds / 3600, minutes = seconds / 60 % 60, newSeconds = seconds %  60 ;
  return formatDate(hours) +':' + formatDate(minutes)+':'+formatDate(newSeconds)
}

function formatDate(n){
  var number = Number.parseInt(n)
  return number > 9? number : '0'+number;
}

//Given an array of integers, find the one that appears an odd number of times.
function findOdd(A) {
  var len = A.length;
  var A_sort = A.slice().sort();

  var count = {};

  A_sort.forEach(function(i) {
      count[i] = (count[i] || 0) + 1;
  });

  for (var key in count) {
      if (count.hasOwnProperty(key)) {

          //  var value = count[key];
          if (count[key] % 2 !== 0) {
              return Number(key);
          }
      }
  }
}

//Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.
function solution(number){
  var value = 0;
  var romanStr = "";
  var  roman = [{M:1000},{CM:900}, {D:500},{CD:400},{C:100},{XC:90},{L:50},{XL:40},{X:10},{IX:9},{V:5},{IV:4},{I:1} ];
  for(var i = 0; i < roman.length; i++){
    for(var key in roman[i]){
      while(value + roman[i][key] <= number){
         value += roman[i][key];
         romanStr += key;
      }
    }
   }
  return romanStr;
 }

 //Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 var moveZeros = function (arr) {
  let resultArr = [];
  let zerosArr = [];
  arr.map(item => item === 0 ? zerosArr.push(0) : resultArr.push(item));

  return resultArr.concat(zerosArr);
}

//****finish */
//This time we want to write calculations using functions and get the results
function one    (calculate) { return calculate ? calculate(1) : 1 }
function two    (calculate) { return calculate ? calculate(2) : 2 }
function three  (calculate) { return calculate ? calculate(3) : 3 }
function four   (calculate) { return calculate ? calculate(4) : 4 }
function five   (calculate) { return calculate ? calculate(5) : 5 }
function six    (calculate) { return calculate ? calculate(6) : 6 }
function seven  (calculate) { return calculate ? calculate(7) : 7 }
function eight  (calculate) { return calculate ? calculate(8) : 8 }
function nine   (calculate) { return calculate ? calculate(9) : 9 }


function plus(y)  { return function (x) { return x + y} }
function minus(y) { return function (x) { return x - y} }
function times(y) { return function (x) { return x * y} }
function dividedBy(y) { return function (x) {
    return y === 0 ? 'division by zero' : Math.floor(x / y) 
  } 
}

seven(minus(five()))

//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.
function persistence(num) {
  let i = 0;
  while (num.toString().length !== 1) {
    num = num.toString().split("").reduce((a,b)=>a*b);
    i++;
  }
  return i;
}

//Write a function that when given a URL as a string, parses out just the domain name and returns it as a string.
function domainName(url){
  let arr;
  if (/www/.test(url)) {
    arr = url.split('.');
    return arr[1];
  } else if (/http/.test(url)) {
    arr = url.split('//');
    arr = arr[1].split('.');
    return arr[0];
  } else {
    arr = url.split('.');
    return arr[0];
  }
}

//Given an n x n array, return the array elements arranged from outermost elements to the middle element, traveling clockwise.
function snail(array){
  const sorted = []
  while(array.length){
    sorted.push(...array.shift())
    for(let i=0; i<array.length; i++){
      sorted.push(array[i].pop())
    }
    sorted.push(...(array.pop() || []).reverse())
    for(let i=array.length-1; i>=0; i--){
      sorted.push(array[i].shift())
    }
  }
  return sorted
}
