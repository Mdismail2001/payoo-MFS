document.getElementById('btn-addmony').addEventListener('click',function(e){
    e.preventDefault();

    const idAmount = getInputFieldValuByID('amount');
    const idPin = getInputFieldValuByID('pin');
    const currentAmout = getInputFieldTextByID('current-balance');

    if (idPin === 1234){
         const newBalance = currentAmout + idAmount;
         document.getElementById('current-balance').innerText = newBalance;
    }else{
        alert('you pin or amount not valid')
    }
})


