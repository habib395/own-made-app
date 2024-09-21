const addMoneyBtn = document.getElementById('add-money-btn')
addMoneyBtn.addEventListener('click', function(event){
    event.preventDefault()
    const addSection = document.getElementById('add-section')
    addSection.classList.remove('hidden')
    const loginButton = document.getElementById('cash-in-btn')
    loginButton.removeAttribute('disabled')
    const outSection = document.getElementById('out-section')
    outSection.classList.add('hidden')
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
    const cashOutSection = document.getElementById('add-section')
    cashOutSection.classList.add('hidden')
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







