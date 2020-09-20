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
