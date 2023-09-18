
document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log("deposit button");

    const newDepositAmount=getInputFieldValueId('deposit-field');
    
    const previousDepositTotal=getElementValueById('deposit-total');

    const newDepositTotal= previousDepositTotal+newDepositAmount;

    setTextElementValueId('deposit-total',newDepositTotal);


    const previousBalanceTotal=getElementValueById('balance-total');
    const newBalanceTotal=previousBalanceTotal+newDepositAmount;

    setTextElementValueId('balance-total',newBalanceTotal);


})