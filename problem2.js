function countEchCharacterInWord(word){
    let wordArray = [...word];
  let response = [];
 result = wordArray.reduce((m, c) => (m[c] = (m[c] || 0) + 1, m), [])
  for (var key in result) {
    response.push(key + result[key] )
  }
  console.log(response)
}
countEchCharacterInWord('boucle');

// complexity of algorith = n^2