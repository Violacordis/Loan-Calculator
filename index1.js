//calling the form
const formField = document.getElementById("formField");

// Adding event listener
formField.addEventListener("submit", (e) => {
    const loan = document.getElementById("amount").value;
    const rate = document.getElementById("rate").value;
    const years = document.getElementById("yrs").value;
    const result = document.getElementById("resultSimple");
    const resultCompd= document.getElementById("resultCompd");


    const totalAmount1 = (rate * loan * years) /100;
    console.log(totalAmount1);
    result.value = totalAmount1.toFixed(2);
    
    const totalAmount2 = loan * (1 + (rate /100))**years - loan;
    resultCompd.value = totalAmount2.toFixed(2);
    console.log(`Compound interest: ${totalAmount2}`);

    
    


    // stopping clicking the button to keep refreshing the page
    e.preventDefault();

});