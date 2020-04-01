const input = document.querySelector('input');
const ball = document.querySelector('.toggle-label');
const toggleContainer = document.querySelector('.toggle-container');
const prices = document.querySelectorAll('.price .price-number');

toggleContainer.addEventListener('click', (e) => {
    toggleContainer.classList.toggle('active');

    prices.forEach(el => {
        const currentPrice = el.innerText.replace('$', '');
        const annualPrice = el.getAttribute('target');
        const monthlyPrice = el.getAttribute('target') / 12;
        if(toggleContainer.classList.contains('active')) {
            el.innerText = monthlyPrice.toFixed(2) + '$';
        }else{
            el.innerText = annualPrice + '$';
            console.log(annualPrice);
        }
        
    })
});
console.log('a');
