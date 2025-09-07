// submit button function added

document.getElementById('btn-addmony').addEventListener('click', function(e){
    e.preventDefault();

    // get amount
    const amout = document.getElementById('amount').value;

    // get pin from home
    const pin = document.getElementById('pin').value;

    // pin validation check but wrong way 
    if (pin ==="1234"){

        // get the current balance
        const currentBalance = document.getElementById('current-balance').innerText;

        // addition to current balance and new balance  and convert the value string to float 
        const newCurrentBalance = parseFloat(currentBalance) + parseFloat(amout);

        // show the newCurrentBalance in the UI
        document.getElementById('current-balance').innerText=newCurrentBalance;

    }else{
        console.log("wrong pin")
    }


})
