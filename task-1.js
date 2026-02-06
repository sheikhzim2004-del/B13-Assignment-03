


/*function signature/sample */
function newPrice(currentPrice , discount ) {
    const discount20 = (currentPrice / 100) * discount;
    const newPrice = (currentPrice - discount20).toFixed(3);
    
    if(typeof currentPrice !== 'number' || typeof discount !== 'number' || discount < 0 || discount > 100){
        return 'Invalid';
    }
    return newPrice;
}




const currentPrice = 2000;
const discount = 17.17;
const result = newPrice(currentPrice, discount);
console.log(result);