// 01 no task
function newPrice(currentPrice , discount ) {
    const discount20 = (currentPrice / 100) * discount;
    const newPrice = (currentPrice - discount20).toFixed(3);
    
    if(typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 100){
        return 'Invalid';
    }
    return newPrice;
}

// 02 no task
function validOtp(otp) {
    if(typeof otp !== 'string'){
        return 'Invalid';
    }
    else if(otp.startsWith('ph-') && otp.length === 8){
        return true;
    }
    else{
        return false;
    }
}

// 03 no task
function finalScore (omr) {

  const {right, wrong, skip} = omr;
  const total = right + wrong + skip;
  if(total !== 100){
    return 'Invalid'
  }

  if(typeof right !== 'number' || typeof wrong !== 'number' || typeof skip !== 'number'){
    return 'Invalid';
  }
  
  const cutMark = wrong * 0.5
  const totalScore = Math.round(right - cutMark);
  return totalScore;
  }

// 04 no task
function gonoVote(array) {

    if(Array.isArray(array) === false){
        return 'Invalid';
    }
    let haVote = 0;
    let naVote = 0;
    for(let vote of array){
        if(vote === 'ha'){
            haVote = haVote + 1;
        }
        else if (vote === 'na'){
            naVote++;
        }
    }
    if(haVote > naVote){
        return true;
    }
    else if(naVote > haVote){
        return false;
    }
    else if(haVote === naVote){
        return "equal"
    }
    // console.log(haVote);
    // console.log(naVote);
}

// 05 no task
function  analyzeText(str) {
  if(typeof str !== 'string' || str === ''){
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

// ===================== the end ==================== //