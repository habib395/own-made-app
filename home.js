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
})
document.getElementById('bonus-btn').addEventListener("click", function(event){
    event.preventDefault()
    document.getElementById('bonus-amount').value = ''
    const loginTwoButton = document.getElementById('bonus-btn')
        loginTwoButton.setAttribute('disabled', true)
})








