
/*function signature/sample */
function  analyzeText(str) {
  if(typeof str !== 'string' || str.trim() === ''){
    return 'Invalid'; 
  }

  const words = str.split(' '); //str ke spacewise alada kora hoyeche
  let longwords = words[0];
  for (let word of words){
    if(word.length > longwords.length){
      longwords = word;
    }
  }

  const token = words.join('').length;
   return {
      longwords,
      token,
    }
}




// const result = analyzeText("Keep coding keep shining");
// console.log(result);
