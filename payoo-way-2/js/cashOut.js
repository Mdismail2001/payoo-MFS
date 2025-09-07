document.getElementById('btn-cashout').addEventListener('click',function(e){
    e.preventDefault();

    const idAmount = getInputFieldValuByID('cashout-amount');
    const idPin = getInputFieldValuByID('cashout-pin');
    const currentAmout = getInputFieldTextByID('current-balance');

    if (idPin === 1234 && idAmount <= currentAmout){
         const newBalance = currentAmout - idAmount;
         document.getElementById('current-balance').innerText = newBalance;
    }else{
        alert('you pin or amount not valid')
    }
})


