document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmount = getInputFieldValueId('withdraw-field');

    const previousWithdrawAmount = getElementValueById('withdraw-total');

    const newWithdrawTotal = newWithdrawAmount + previousWithdrawAmount
    setTextElementValueId('withdraw-total',newWithdrawTotal);

   const previousBalanceTotal=getElementValueById('balance-total');
   const newBalanceTotal=previousBalanceTotal-newWithdrawAmount;
   setTextElementValueId('balance-total',newBalanceTotal);

})