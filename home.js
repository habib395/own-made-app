
const addMoneyBtn = document.getElementById('add-money-btn')
addMoneyBtn.addEventListener('click', function(event){
    event.preventDefault()
    const addSection = document.getElementById('add-section')
    addSection.classList.remove('hidden')
    const loginButton = document.getElementById('cash-in-btn')
    loginButton.removeAttribute('disabled')
    const outSection = document.getElementById('out-section')
    outSection.classList.add('hidden')
    const transferSection = document.getElementById('transfer-section')
    transferSection.classList.add('hidden')
    const bonusSection = document.getElementById('bonus-section')
    bonusSection.classList.add('hidden')
    const paySection = document.getElementById('pay-section')
    paySection.classList.add('hidden')
    const transactionSection = document.getElementById('transaction-section')
    transactionSection.classList.add('hidden')
})

document.getElementById('cash-in-btn').addEventListener('click', function(event){
    event.preventDefault()
    const availableMoney = parseFloat(document.getElementById('available-money').innerText)
    const enterAmount = parseFloat(document.getElementById('enter-amount').value)
    const InputPassword = document.getElementById('input-password').value
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
})
document.getElementById('cash-out-btn').addEventListener('click', function(event){
    event.preventDefault()
    const availableMoney = parseFloat(document.getElementById('available-money').innerText)
    const enterAmount = parseFloat(document.getElementById('cash-out-amount').value)
    const InputPassword = document.getElementById('cas-out-password').value
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
})
document.getElementById('transfer-btn').addEventListener('click', function(event){
    event.preventDefault()
    const phoneNumber = document.getElementById('transfer-other-amount').value
    const availableMoney = parseFloat(document.getElementById('available-money').innerText)
    const enterAmount = parseFloat(document.getElementById('transfer-amount').value)
    const InputPassword = document.getElementById('transfer-password').value
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
})
document.getElementById('bonus-btn').addEventListener("click", function(event){
    event.preventDefault()
    const bonusAmount = document.getElementById('bonus-amount').value
    if(bonusAmount === "123455"){
        const availableMoney = parseFloat(document.getElementById('available-money').innerText)
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
})
document.getElementById('pay-btn').addEventListener('click', function(event){
    event.preventDefault()
    const availableMoney = parseFloat(document.getElementById('available-money').innerText)
    const billerAmount = document.getElementById('biller-amount').value
    const payAmount = parseFloat(document.getElementById('pay-amount').value)
    const payPassword = document.getElementById('pay-password').value
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
})



