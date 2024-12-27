const billAmt = document.getElementById('bill-amt');
const totalPerson = document.getElementById('total-person');
const tipPercentage = document.querySelectorAll('.btn');
const showTipAmount = document.getElementById('tip-amt');
const showTotalAmount = document.getElementById('total-amt');
const amtEachPerson = document.getElementById('amt-each-person');
const reset = document.getElementById('reset-btn');
const calculate = document.getElementById('submit-btn');

let selectedTip = 0;

tipPercentage.forEach(Tip => {
    Tip.addEventListener('click', () => {
        selectedTip = parseInt(Tip.textContent);
        tipPercentage.forEach(btn => {
            btn.classList.remove('active')
            btn.style.backgroundColor = "";
        });
        Tip.classList.add('active');
        Tip.style.backgroundColor = "rgba(255, 255, 255, 0.15)";
        Tip.style.boxShadow = "2px 1px 40px 1px rgba(0, 0,0, 0.4)"
    });
});

calculate.addEventListener('click', () => {
    let bill = parseFloat(billAmt.value);
    let persons = parseInt(totalPerson.value);

    if (isNaN(bill) || bill <= 0 || isNaN(persons) || persons <= 0) {
        alert("Please enter valid amount and number of persons");
        return;
    }

    const tipAmount = (bill * selectedTip) / 100;
    const totalAmount = bill + tipAmount;
    const eachPerson = totalAmount / persons;

    showTipAmount.textContent = tipAmount.toFixed(2);
    showTotalAmount.textContent = totalAmount.toFixed(2);
    amtEachPerson.textContent = eachPerson.toFixed(2);

});

reset.addEventListener('click', () => {
    billAmt.value = "";
    totalPerson.value = "";
    showTipAmount.textContent = '00';
    showTotalAmount.textContent = '00';
    amtEachPerson.textContent = '00';
    tipPercentage.forEach(btn => {
        btn.classList.remove('active');
        btn.style.backgroundColor = "";
    });
});

