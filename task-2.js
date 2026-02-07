
/*function signature/sample */
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




// const otp = "ph-10985";
// const result = validOtp(otp);
// console.log(result);