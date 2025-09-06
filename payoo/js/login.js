
// set event handler
document.getElementById('loginBtn').addEventListener('click', function(e){
    // prevent defualt behavior (prevent loding browser)
    e.preventDefault();
    console.log("login btn worked");

    // get phone number
    const mobileNumber = document.getElementById('mobile-number').value;
        console.log(mobileNumber);
    
})