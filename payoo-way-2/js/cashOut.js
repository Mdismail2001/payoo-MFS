document.getElementById('btn-cashout').addEventListener('click',function(e){
    e.preventDefault();

    const idAmount = getInputFieldValuByID('cashout-amount');
    const idPin = getInputFieldValuByID('cashout-pin');
    const currentAmout = getInputFieldTextByID('current-balance');

    // validatin check for cashout  amount
    if(isNaN(idAmount)){
        alert('Failed to Cash Out')
        return;
    }

    if (idPin === 1234 && idAmount <= currentAmout){
         const newBalance = currentAmout - idAmount;
         document.getElementById('current-balance').innerText = newBalance;

                 //  logic for add transactin history
        const p = document.createElement('P');
        p.innerText = `Cash Out: ${idAmount} Tk. New Balance: ${newBalance}`;

        document.getElementById('transaction-container').appendChild(p);

    }else{
        alert('you pin or amount not valid')
    }
})


