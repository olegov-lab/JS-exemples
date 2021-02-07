function findShort(s) {
    let arrSplit = s.split(" ");
    //let arrShortLength = arrSplit[0].length;
    let shortWord = Infinity;

    for (let i = 0; i < arrSplit.length; i++) {
      let wordLength = arrSplit[i].length;

       if (wordLength < shortWord) {
            shortWord = wordLength;
       }

    }
    return shortWord;
}
