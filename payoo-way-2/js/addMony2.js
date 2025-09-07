document.getElementById('btn-addmony').addEventListener('click',function(e){
    e.preventDefault();

    const idAmount = getInputFieldValuByID('amount');
    const idPin = getInputFieldValuByID('pin');
    const currentAmout = getInputFieldTextByID('current-balance');

    // validatin check for add amount
    if(isNaN(idAmount)){
        alert('Failed to add Mony')
        return;
    }

    if (idPin === 1234){
         const newBalance = currentAmout + idAmount;
         document.getElementById('current-balance').innerText = newBalance;

        //  logic for add transactin history
        const p = document.createElement('P');
        p.innerText = `Added: ${idAmount} Tk. New Balance: ${newBalance}`;

        document.getElementById('transaction-container').appendChild(p);
    }else{
        alert('you pin or amount not valid')
    }
})


