

/*function signature/sample */
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

const omr = { right: 67, wrong: 23, skip: 10 };
const result = finalScore(omr);
console.log(result);


