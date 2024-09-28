const addMoneyBtn = document.getElementById('add-money-btn')
addMoneyBtn.addEventListener('click', function(event){
    event.preventDefault()
    hideDisabledOption('cash-in-btn')
    showSectionById('add-section')
    selectButtonDisabled('button-dtn')
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[0].removeAttribute('disabled')
})
document.getElementById('cash-in-btn').addEventListener('click', function(event){
    event.preventDefault()
    const availableMoney = getAvailableMoneyProvidingId('available-money')
    const enterAmount = getInputValueByProvidingId("enter-amount")
    const InputPassword = getInputPasswordByProvidingId('input-password')
    if(InputPassword === '1234' && enterAmount > 0){
        let addMoney = availableMoney + enterAmount
        document.getElementById('available-money').innerText = addMoney
        document.getElementById('enter-amount').value = ''
        document.getElementById('input-password').value = ''
        const loginButton = document.getElementById('cash-in-btn')
        loginButton.setAttribute('disabled', true)
        const p = document.createElement('p')
        p.classList.add('text-xs')
        p.classList.add('font-bold')
        p.innerText = `Cash In
        Added: ${enterAmount} Tk.  New Balance: ${addMoney} Tk.
        Time: at ${new Date().toLocaleTimeString()} in ${new Date().toLocaleDateString()}`
        document.getElementById('transaction-container').appendChild(p)
    }else{
        alert('Please provide Right Information')
    }
    disabledSection('button-dtn')
})
const logOutButton = document.getElementById('log-out-button')
logOutButton.addEventListener('click', function(event){
    event.preventDefault()
    window.location.href = 'index.html'
})
document.getElementById('cash-out-money-btn').addEventListener('click', function(event){
    event.preventDefault()
    hideDisabledOption('cash-out-btn')
    showSectionById('out-section')
    selectButtonDisabled('button-dtn')
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[1].removeAttribute('disabled')
})
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault()
    const availableMoney = getAvailableMoneyProvidingId('available-money')
    const enterAmount = getInputValueByProvidingId("cash-out-amount")
    const InputPassword = getInputPasswordByProvidingId('cas-out-password')
    if(InputPassword === '1234' && enterAmount > 0 && enterAmount < availableMoney){
        let reduceMoney = availableMoney - enterAmount
        document.getElementById('available-money').innerText = reduceMoney
        document.getElementById('cash-out-amount').value = ''
        document.getElementById('cas-out-password').value = ''
        const loginButton = document.getElementById('cash-out-btn')
        loginButton.setAttribute('disabled', true)
        const div = document.createElement('div')
        div.innerHTML = `<p class="text-base font-bold">Cash Out</p>
        <p class="text-sm font-bold">Tk. ${enterAmount} withdraw. New Balance ${reduceMoney}</p>
         Time: at ${new Date().toLocaleTimeString()} in ${new Date().toLocaleDateString()}`
        document.getElementById('transaction-container').appendChild(div)
    }else{
        alert('Please provide Right Information')
    }
    disabledSection('button-dtn')
})
document.getElementById('transfer-money-btn').addEventListener('click', function(event){
    event.preventDefault()
    hideDisabledOption('transfer-btn')
    showSectionById('transfer-section')
    selectButtonDisabled('button-dtn')
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[2].removeAttribute('disabled')
})
document.getElementById('transfer-btn').addEventListener('click', function(event){
    event.preventDefault()
    const phoneNumber = document.getElementById('transfer-other-amount').value
    const availableMoney = getAvailableMoneyProvidingId('available-money')
    const enterAmount = getInputValueByProvidingId("transfer-amount")
    const InputPassword = getInputPasswordByProvidingId('transfer-password')
    if(InputPassword === '1234' && enterAmount > 0 && enterAmount < availableMoney && phoneNumber.length === 11){
        let transferMoney = availableMoney - enterAmount
        document.getElementById('available-money').innerText = transferMoney
        document.getElementById('transfer-amount').value = ''
        document.getElementById('transfer-password').value = ''
        document.getElementById('transfer-other-amount').value = ''
        const loginButton = document.getElementById('transfer-btn')
        loginButton.removeAttribute('disabled')
        const loginTwoButton = document.getElementById('transfer-btn')
        loginTwoButton.setAttribute('disabled', true)
        const div = document.createElement('div')
        div.innerHTML =`<h4 class="text-base font-bold">Transfer Money</h4>
        <p class='text-sm font-bold'>Tk. ${enterAmount} Transferred. New Balance ${transferMoney} Tk <br>
        Time: at ${new Date().toLocaleTimeString()} in ${new Date().toLocaleDateString()}</p>`
        document.getElementById('transaction-container').appendChild(div)
    }else{
        alert('Please provide Right Information')
    }
    disabledSection('button-dtn')
})
document.getElementById('bonus-money-btn').addEventListener("click", function(event){
    event.preventDefault()
    hideDisabledOption('bonus-btn')
    showSectionById('bonus-section')
    selectButtonDisabled('button-dtn')
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[3].removeAttribute('disabled')
    
})
document.getElementById('bonus-btn').addEventListener("click", function(event){
    event.preventDefault()
    const bonusAmount = document.getElementById('bonus-amount').value
    if(bonusAmount === "123455"){
        const availableMoney = getAvailableMoneyProvidingId('available-money')
        const added = document.getElementById('bonus-amount').value = 200
        const totalMoney = added + availableMoney;
        document.getElementById('available-money').innerText = totalMoney
        document.getElementById('bonus-amount').value = ''
        const loginTwoButton = document.getElementById('bonus-btn')
        loginTwoButton.setAttribute('disabled', true)
        const div = document.createElement('div')
        div.innerHTML =`<h4 class="text-sm font-bold">Bonus Money</h4>
        <p class='text-xs font-bold'>Get Bonus Tk. ${added} Added. New Balance ${totalMoney} Tk <br>
        Time: at ${new Date().toLocaleTimeString()} in ${new Date().toLocaleDateString()}</p>`
        document.getElementById('transaction-container').appendChild(div)
    }else{
        alert('Give the Correct Coupon')
    }
    disabledSection('button-dtn')
})
document.getElementById('pay-money-btn').addEventListener("click", function(event){
    event.preventDefault()
    hideDisabledOption('pay-btn')
    showSectionById('pay-section')
    selectButtonDisabled('button-dtn')
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[4].removeAttribute('disabled')
})
document.getElementById('pay-btn').addEventListener('click', function(event){
    event.preventDefault()
    const availableMoney = getAvailableMoneyProvidingId('available-money')
    const payAmount = getInputValueByProvidingId("pay-amount")
    const payPassword = getInputPasswordByProvidingId('pay-password')
    const billerAmount = getInputPasswordByProvidingId('biller-amount')
    console.log(billerAmount)
    if(billerAmount.length === 11 && payPassword === '1234' && payAmount > 0 && payAmount < availableMoney){
        let payMoney = availableMoney - payAmount
        document.getElementById('available-money').innerText = payMoney
        document.getElementById('biller-amount').value = ''
        document.getElementById('pay-password').value = ''
        document.getElementById('pay-amount').value = ''
        document.getElementById('select-amount').value = ''
        const loginTwoButton = document.getElementById('pay-btn')
        loginTwoButton.setAttribute('disabled', true)
         const div = document.createElement('div')
         div.innerHTML =`<h4 class="text-sm font-bold">Pay Bill</h4>
         <p class='text-xs font-bold'>Pay Bill Tk. ${payAmount}. New Balance ${payMoney} Tk <br>
         Time: at ${new Date().toLocaleTimeString()} in ${new Date().toLocaleDateString()}</p>`
         document.getElementById('transaction-container').appendChild(div)
    }else{
        alert('Please fill Up With Right Information')
    }
    disabledSection('button-dtn')
})
document.getElementById('transaction-btn').addEventListener('click', function(event){
    event.preventDefault()
    showSectionById('transaction-section')
    hideDisabledOption('transaction-btn')
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[5].classList.add('btn-warning')
})



