//login button event handler
const loginBtn=document.getElementById('loginBtn')
loginBtn.addEventListener('click',function(){
    const loginArea=document.getElementById('login-area')
    loginArea.style.display='none'
    const transactionArea=document.getElementById('transaction-area')
    transactionArea.style.display='block'
})

//deposit button event handler
const depositBtn=document.getElementById('addDeposit')
depositBtn.addEventListener('click',function(){
    const depositNumber=getInputNumber('depositAmount')
    //update deposit
    updateSpanText('currentDeposit',depositNumber)
    //update balance
    updateSpanText('currentBalance',depositNumber)
})
//withdraw button event handler
const withdrawBtn=document.getElementById('addWithdraw')
withdrawBtn.addEventListener('click',function(){
    const withdrawNumber=getInputNumber('withdrawAmount')
    updateSpanText('currentWithdraw',withdrawNumber)
    updateSpanText('currentBalance',-1*withdrawNumber)
})
// get input and convert number
function getInputNumber(idName){
    const amount=document.getElementById(idName)
    const amountNumber=parseFloat(amount.value)
    amount.value=''
    return amountNumber;
}
// get current number and update number
function updateSpanText(idName,addedNumber){
    const current=document.getElementById(idName)
    const currentNumber=parseFloat(current.innerText)
    const totalAmount=addedNumber+currentNumber;
    current.innerText=totalAmount
}
