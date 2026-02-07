
/*function signature/sample */
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





// const result = gonoVote(["ha","na","na"]);
// console.log(result);