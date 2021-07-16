function countWord(book, word){
    let wordsConcat = book.join(' ');
    let result = (wordsConcat.split(word)).length - 1;
  return result < 1 ?  -1 : result;
}
countWord(['le', 'la', 'u'] ,'le');

// complexity of algorith = 1