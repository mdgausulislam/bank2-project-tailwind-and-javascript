document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawField=document.getElementById('withdraw-field');
    const newWithdrawAmountString=withdrawField.value;
    const WithdrawAmount=parseFloat(newWithdrawAmountString);
    withdrawField.value='';


    // console.log(WithdrawAmount);


    const withdrawTotalElements=document.getElementById('withdraw-total');
    const previousWithdrawTotalString=withdrawTotalElements.innerText;
    const previousWithdrawAmount=parseFloat(previousWithdrawTotalString);
    // console.log(previousWithdrawAmount);

const newWithdrawAmount=WithdrawAmount+previousWithdrawAmount;
withdrawTotalElements.innerText=newWithdrawAmount;


const withdrawAmountTotal=document.getElementById('balance-total');
const previousWithdrawAmountTotalString=withdrawAmountTotal.innerText;
const previousTotalAmount=parseFloat(previousWithdrawAmountTotalString);

const totalWithdrawBalance=previousTotalAmount-newWithdrawAmount;
withdrawAmountTotal.innerText=totalWithdrawBalance;


})