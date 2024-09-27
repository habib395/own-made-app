
const addMoneyBtn = document.getElementById('add-money-btn')
addMoneyBtn.addEventListener('click', function(event){
    event.preventDefault()
    const addSection = getDocumentElementIdOnly('add-section')
    addSection.classList.remove('hidden')
    const loginButton = getDocumentElementIdOnly('cash-in-btn')
    loginButton.removeAttribute('disabled')
    const outSection = getDocumentElementIdOnly('out-section')
    outSection.classList.add('hidden')
    const transferSection = getDocumentElementIdOnly('transfer-section')
    transferSection.classList.add('hidden')
    const bonusSection = getDocumentElementIdOnly('bonus-section')
    bonusSection.classList.add('hidden')
    const paySection = getDocumentElementIdOnly('pay-section')
    paySection.classList.add('hidden')
    const transactionSection = getDocumentElementIdOnly('transaction-section')
    transactionSection.classList.add('hidden')

    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[0].classList.add('btn-warning')
    buttonDtn[1].setAttribute('disabled', true)
    buttonDtn[2].setAttribute('disabled', true)
    buttonDtn[3].setAttribute('disabled', true)
    buttonDtn[4].setAttribute('disabled', true)
    buttonDtn[5].setAttribute('disabled', true)
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
//add to transaction history
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
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[0].classList.remove('btn-warning')
    buttonDtn[1].removeAttribute('disabled')
    buttonDtn[2].removeAttribute('disabled')
    buttonDtn[3].removeAttribute('disabled')
    buttonDtn[4].removeAttribute('disabled')
    buttonDtn[5].removeAttribute('disabled')
})

const logOutButton = document.getElementById('log-out-button')
logOutButton.addEventListener('click', function(event){
    event.preventDefault()
    window.location.href = 'index.html'
})
document.getElementById('cash-out-money-btn').addEventListener('click', function(){
    const outSection = document.getElementById('out-section')
    outSection.classList.remove("hidden")
    const cashOutBtn = document.getElementById('cash-out-btn')
    cashOutBtn.removeAttribute('disabled')
    const cashInSection = document.getElementById('add-section')
    cashInSection.classList.add('hidden')
    const transferSection = document.getElementById('transfer-section')
    transferSection.classList.add('hidden')
    const bonusSection = document.getElementById('bonus-section')
    bonusSection.classList.add('hidden')
    const paySection = document.getElementById('pay-section')
    paySection.classList.add('hidden')
    const transactionSection = document.getElementById('transaction-section')
    transactionSection.classList.add('hidden')
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[1].classList.add('btn-warning')
    buttonDtn[0].setAttribute('disabled', true)
    buttonDtn[2].setAttribute('disabled', true)
    buttonDtn[3].setAttribute('disabled', true)
    buttonDtn[4].setAttribute('disabled', true)
    buttonDtn[5].setAttribute('disabled', true)
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
        //add to transaction history

        const div = document.createElement('div')
        div.innerHTML = `<p class="text-base font-bold">Cash Out</p>
        <p class="text-sm font-bold">Tk. ${enterAmount} withdraw. New Balance ${reduceMoney}</p>
         Time: at ${new Date().toLocaleTimeString()} in ${new Date().toLocaleDateString()}`
        document.getElementById('transaction-container').appendChild(div)
    }else{
        alert('Please provide Right Information')
    }
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[1].classList.remove('btn-warning')
    buttonDtn[0].removeAttribute('disabled')
    buttonDtn[2].removeAttribute('disabled')
    buttonDtn[3].removeAttribute('disabled')
    buttonDtn[4].removeAttribute('disabled')
    buttonDtn[5].removeAttribute('disabled')
})

document.getElementById('transfer-money-btn').addEventListener('click', function(event){
    event.preventDefault()
    const transferSection = document.getElementById('transfer-section')
    transferSection.classList.remove('hidden')
    const transferBtn = document.getElementById('transfer-btn')
    transferBtn.removeAttribute('disabled')
    const cashOutSection = document.getElementById('out-section')
    cashOutSection.classList.add('hidden')
    const cashInSection = document.getElementById('add-section')
    cashInSection.classList.add('hidden')
    const bonusSection = document.getElementById('bonus-section')
    bonusSection.classList.add('hidden')
    const paySection = document.getElementById('pay-section')
    paySection.classList.add('hidden')
    const transactionSection = document.getElementById('transaction-section')
    transactionSection.classList.add('hidden')
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[2].classList.add('btn-warning')
    buttonDtn[0].setAttribute('disabled', true)
    buttonDtn[1].setAttribute('disabled', true)
    buttonDtn[3].setAttribute('disabled', true)
    buttonDtn[4].setAttribute('disabled', true)
    buttonDtn[5].setAttribute('disabled', true)
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
        //add transaction section
        const div = document.createElement('div')
        div.innerHTML =`<h4 class="text-base font-bold">Transfer Money</h4>
        <p class='text-sm font-bold'>Tk. ${enterAmount} Transferred. New Balance ${transferMoney} Tk <br>
        Time: at ${new Date().toLocaleTimeString()} in ${new Date().toLocaleDateString()}</p>`
        document.getElementById('transaction-container').appendChild(div)
    }else{
        alert('Please provide Right Information')
    }
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[2].classList.remove('btn-warning')
    buttonDtn[0].removeAttribute('disabled')
    buttonDtn[1].removeAttribute('disabled')
    buttonDtn[3].removeAttribute('disabled')
    buttonDtn[4].removeAttribute('disabled')
    buttonDtn[5].removeAttribute('disabled')
})
document.getElementById('bonus-money-btn').addEventListener("click", function(event){
    event.preventDefault()
    const bonusSection = document.getElementById('bonus-section')
    bonusSection.classList.remove('hidden')
    const bonusBtn = document.getElementById('bonus-btn')
    bonusBtn.removeAttribute('disabled')
    const cashOutSection = document.getElementById('out-section')
    cashOutSection.classList.add('hidden')
    const cashInSection = document.getElementById('add-section')
    cashInSection.classList.add('hidden')
    const transferSection = document.getElementById('transfer-section')
    transferSection.classList.add('hidden')
    const paySection = document.getElementById('pay-section')
    paySection.classList.add('hidden')
    const transactionSection = document.getElementById('transaction-section')
    transactionSection.classList.add('hidden')
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[3].classList.add('btn-warning')
    buttonDtn[0].setAttribute('disabled', true)
    buttonDtn[1].setAttribute('disabled', true)
    buttonDtn[2].setAttribute('disabled', true)
    buttonDtn[4].setAttribute('disabled', true)
    buttonDtn[5].setAttribute('disabled', true)
    
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
        //add transaction section
        const div = document.createElement('div')
        div.innerHTML =`<h4 class="text-sm font-bold">Bonus Money</h4>
        <p class='text-xs font-bold'>Get Bonus Tk. ${added} Added. New Balance ${totalMoney} Tk <br>
        Time: at ${new Date().toLocaleTimeString()} in ${new Date().toLocaleDateString()}</p>`
        document.getElementById('transaction-container').appendChild(div)
    }else{
        alert('Give the Currect Coupon')
    }
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[3].classList.remove('btn-warning')
    buttonDtn[0].removeAttribute('disabled')
    buttonDtn[1].removeAttribute('disabled')
    buttonDtn[2].removeAttribute('disabled')
    buttonDtn[4].removeAttribute('disabled')
    buttonDtn[5].removeAttribute('disabled')
})
document.getElementById('pay-money-btn').addEventListener("click", function(event){
    event.preventDefault()
    const paySection = document.getElementById('pay-section')
    paySection.classList.remove('hidden')
    const payBtn = document.getElementById('pay-btn')
    payBtn.removeAttribute('disabled')
    const cashOutSection = document.getElementById('out-section')
    cashOutSection.classList.add('hidden')
    const cashInSection = document.getElementById('add-section')
    cashInSection.classList.add('hidden')
    const transferSection = document.getElementById('transfer-section')
    transferSection.classList.add('hidden')
    const bonusSection = document.getElementById('bonus-section')
    bonusSection.classList.add('hidden')
    const transactionSection = document.getElementById('transaction-section')
    transactionSection.classList.add('hidden')
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[4].classList.add('btn-warning')
    buttonDtn[0].setAttribute('disabled', true)
    buttonDtn[1].setAttribute('disabled', true)
    buttonDtn[2].setAttribute('disabled', true)
    buttonDtn[3].setAttribute('disabled', true)
    buttonDtn[5].setAttribute('disabled', true)
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
         //add transaction section
         const div = document.createElement('div')
         div.innerHTML =`<h4 class="text-sm font-bold">Pay Bill</h4>
         <p class='text-xs font-bold'>Pay Bill Tk. ${payAmount}. New Balance ${payMoney} Tk <br>
         Time: at ${new Date().toLocaleTimeString()} in ${new Date().toLocaleDateString()}</p>`
         document.getElementById('transaction-container').appendChild(div)
    }else{
        alert('Please fill Up With Right Information')
    }
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[4].classList.remove('btn-warning')
    buttonDtn[0].removeAttribute('disabled')
    buttonDtn[1].removeAttribute('disabled')
    buttonDtn[2].removeAttribute('disabled')
    buttonDtn[3].removeAttribute('disabled')
    buttonDtn[5].removeAttribute('disabled')
})
document.getElementById('transaction-btn').addEventListener('click', function(event){
    event.preventDefault()
    const transactionSection = document.getElementById('transaction-section')
    transactionSection.classList.remove('hidden')
    const transactionBtn = document.getElementById('transaction-btn')
    transactionBtn.removeAttribute('disabled')
    const cashOutSection = document.getElementById('out-section')
    cashOutSection.classList.add('hidden')
    const cashInSection = document.getElementById('add-section')
    cashInSection.classList.add('hidden')
    const transferSection = document.getElementById('transfer-section')
    transferSection.classList.add('hidden')
    const bonusSection = document.getElementById('bonus-section')
    bonusSection.classList.add('hidden')
    const paySection = document.getElementById('pay-section')
    paySection.classList.add('hidden')
    const buttonDtn = document.getElementsByClassName('button-dtn')
    buttonDtn[5].classList.add('btn-warning')
})



