// set event handler
document.getElementById("loginBtn").addEventListener("click", function (e) {
  // prevent defualt behavior (prevent loding browser)
  e.preventDefault();

  // get phone number
  const mobileNumber = document.getElementById("mobile-number").value;

  // get pin number
  const pinNumber = document.getElementById("pin").value;

  // this is temporary logic for  test
  if (mobileNumber === "11" && pinNumber === "1234") {
    window.location.href = "/payoo/home.html";
  } else {
    console.log("Wrong Mobile Number or Pin ");
  }
});
