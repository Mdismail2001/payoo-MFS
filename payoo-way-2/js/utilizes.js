// this function use for multiple value like string and number get
function getInputFieldValuByID(id){
    // console.log(id);
    const inputValue = parseFloat(document.getElementById(id).value);
        // console.log(inputValue);
    return inputValue;
}

// this function use for multiple value like string and text get

function getInputFieldTextByID(id){

    const inputText = parseFloat(document.getElementById(id).innerText);
    // console.log(inputText);
    return inputText;

}


// this function use for features

function showPageById(id){
    // add hidden attribute in the all button class
    document.getElementById('addmony-form').classList.add('hidden');
    document.getElementById('cashout-form').classList.add('hidden');
    document.getElementById('transaction-section').classList.add('hidden');

    // removed the hidden attribute for showing the section using id 

        document.getElementById(id).classList.remove('hidden');


}