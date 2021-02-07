function shortestWord(string) {
       var stringArray = string.split(" ");
       var shortestWord;
       var shortestLength = stringArray[0].length;
       for(var i = 0; i < stringArray.length; i++){
           if(stringArray[i].length < shortestLength){
               shortestLength = stringArray[i].length;
               shortestWord = stringArray[i];
           }
       }
       return shortestWord;
   }

   var string = 'asd yhuj io lkj rtyuiop';
   console.log(shortestWord(string));
