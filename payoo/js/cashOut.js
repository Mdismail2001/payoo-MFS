// Cash Out Froms handle here
// cash out button hanndle function
document.getElementById("btn-cashout").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log('Cash Out Button worked');

  // get amount function and conver string ot float
  const cashOutAmount = parseFloat(
    document.getElementById("cashout-amount").value
  );
  // console.log(cashOutAmount);

  // get pin function
  const cashOutPin = document.getElementById("cashout-pin").value;
  // console.log(cashOutPin);

  // get current balance function and convert string to float
  const currentBalance = parseFloat(
    document.getElementById("current-balance").innerText
  );
  // console.log(currentBalance);

  // pin validatin function but woring way
  if (cashOutPin === "1234" && cashOutAmount <= currentBalance) {
    // console.log('Pin and Balance is valid');

    // calculation new curren balancd after cash out an nad push the UI
    const newCurrentBalance = currentBalance - cashOutAmount;
    // console.log(newCurrentBalance);
    document.getElementById("current-balance").innerText = newCurrentBalance;
  } else {
    console.log("Ivalid Pin");
  }
});
