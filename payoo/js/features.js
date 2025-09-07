
// cash out button handler
document.getElementById('cashout-btn').addEventListener('click', function(){
    // console.log("cash out button worked");

    //  find the class list from cash out forms and remove hidden class attribute
    document.getElementById('cashout-form').classList.remove('hidden');

    //  find the class list from cash out forms and add hidden class attribute
    document.getElementById('addmony-form').classList.add('hidden');
  
})


// add mony btn handler function
document.getElementById('addmony-btn').addEventListener('click', function(){
    console.log("add mony button worked");

    //  find the class list from cash out forms and add hidden class attribute
    document.getElementById('addmony-form').classList.remove('hidden');

    //  find the class list from cash out forms and remove hidden class attribute
    document.getElementById('cashout-form').classList.add('hidden');


})