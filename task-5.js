

/*function signature/sample */
function  analyzeText(str) {
  if(typeof str !== 'string'){
    return 'Invalid';
  }
  const words = str.split(' ');
  let longword = words[0];
  for (let word of words){
    if(word.length > longword.length){
      longword = word;
    }
  }
  const token = words.join('').length;
   return {
      longword,
      token,
    }
}
const result = analyzeText("Keep coding keep shining");
console.log(result);
