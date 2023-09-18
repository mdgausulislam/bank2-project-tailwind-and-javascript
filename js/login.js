
/* 
1. add event listener to the deposit button
2.get deposit amount from deposit  input  field
2.5. convert string deposit amount to a number type
3.clear the deposit input field after getting the value
4. get the previous deposit total
5. calculate new deposit total and set the value to the deposit total
6.get current balance
7.calculate the new balance and set it to the balance total elements

*/

// step-01
document.getElementById('btn-deposit').addEventListener('click', function () {
    //    console.log("add click");

    // step-03
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString);

    // step-3
    depositField.value = '';


    // step-04
    const previousDepositElement = document.getElementById('deposit-total');
    const previousDepositAmountString = previousDepositElement.innerText;
    const previousDepositTotal = parseFloat(previousDepositAmountString);


    //step-05

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    previousDepositElement.innerText = newDepositTotal;


    //  step-6

    const balanceTotalElements = document.getElementById('balance-total');
    const balanceTotalAmountString = balanceTotalElements.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalAmountString);

    // step-7
    const totalAmount=balanceTotalAmount+newDepositTotal;
    balanceTotalElements.innerText=totalAmount;



})