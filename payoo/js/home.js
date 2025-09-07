// submit button function added

document.getElementById('btn-addmony').addEventListener('click', function(e){
    e.preventDefault();
    console.log("Submit workd")

    // get amount
    const amout = document.getElementById('amount').value;
    console.log(amout); 

    // get pin from home
    const pin = document.getElementById('pin').value;
    console.log(pin);

    // pin validation
    if (pin ==="4"){
        console.log("mony add successful");
        

    }else{
        console.log("wrong pin")
    }


})
