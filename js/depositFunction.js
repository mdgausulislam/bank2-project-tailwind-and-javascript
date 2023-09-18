
function getInputFieldValueId(inputFieldId){
    const inputField=document.getElementById(inputFieldId);
    const inputFieldValueString=inputField.value;
    const inputFieldValue=parseFloat(inputFieldValueString);
    inputField.value='';
    return inputFieldValue;
}

function getElementValueById(elementId){
    const element=document.getElementById(elementId);
    const elementValueString=element.innerText;
    const elementValue=parseFloat(elementValueString);
    return elementValue
}


document.getElementById('btn-deposit').addEventListener('click',function(){
    // console.log("deposit button");

    // const newDepositAmount=getInputFieldValueId('deposit-field');
    
    // const newDepositAmount=getInputFieldValueId('deposit-field');

  
})