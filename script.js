// variables..
const inputRange = document.getElementById('inputrange')
const pageViews = document.getElementById('pageviews')
const prices = document.getElementById('price');
const toggleChecker = document.getElementById('toggle')
const discount = 0;
// functions

inputRange.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${inputRange.value*25}% ,hsl(224, 65%, 95%) 0%)`
inputRange.addEventListener('input', ()=> {
    inputRange.style.background = `linear-gradient(90deg, hsl(174, 77%, 80%) ${inputRange.value*25}% ,hsl(224, 65%, 95%) 0%)`
    pricing();
})

toggleChecker.addEventListener('change', () =>{pricing();})

const pricing = () =>{
    const monthlyPrices = [8, 12, 16, 24, 36]
    const yearlyPrices = [];
    // const priceIndex;
    monthlyPrices.forEach(price =>{
        const discount = price - (price * 25 / 100)
        yearlyPrices.push(discount)
    })

    if(inputRange.value == 0){
        pageViews.innerHTML = '10K PAGEVIEWS';
        if(toggleChecker.checked) prices.innerHTML = '$' + yearlyPrices[inputRange.value]+ '.00';
        else prices.innerHTML = '$' + monthlyPrices[inputRange.value]+ '.00'
    } 
    else if(inputRange.value == 1){
        pageViews.innerHTML = '50K PAGEVIEWS';
        if(toggleChecker.checked) prices.innerHTML = '$' + yearlyPrices[inputRange.value]+ '.00';
        else prices.innerHTML = '$' + monthlyPrices[inputRange.value]+ '.00'
    }
    else if(inputRange.value == 2){
        pageViews.innerHTML = '100K PAGEVIEWS';
        if(toggleChecker.checked) prices.innerHTML = '$' + yearlyPrices[inputRange.value]+ '.00';
        else prices.innerHTML = '$' + monthlyPrices[inputRange.value]+ '.00'
    }
    else if(inputRange.value == 3){
        pageViews.innerHTML = '500K PAGEVIEWS';
        if(toggleChecker.checked) prices.innerHTML = '$' + yearlyPrices[inputRange.value]+ '.00';
        else prices.innerHTML = '$' + monthlyPrices[inputRange.value]+ '.00'
    }
    else{
        pageViews.innerHTML = '1M PAGEVIEWS';
        if(toggleChecker.checked) prices.innerHTML = '$' + yearlyPrices[inputRange.value]+ '.00';
        else prices.innerHTML = '$' + monthlyPrices[inputRange.value]+ '.00'
    }
}


