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
