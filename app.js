const principal = document.getElementById('principal');
const rate = document.getElementById('rate');
const year = document.getElementById('year');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    let p = principal.value;
    let rateValue = rate.value;
    let r = rateValue/100; 
    let t = year.value;
    let amount = p*(1+r*t);
    let interest = (amount-p).toFixed(2)
    let interestOutput = document.getElementById('interest-output')
    interestOutput.innerHTML = 'Interest: ' + '$' + interest;
    let amountOutput = document.getElementById('amount-output');
    amountOutput.innerHTML = 'Total Amount: ' + '$' + amount.toFixed(2);
});