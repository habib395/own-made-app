const addMoneyBtn = document.getElementById('add-money-btn')
addMoneyBtn.addEventListener('click', function(event){
    event.preventDefault()
    const loginButton = document.getElementById('login-btn')
    loginButton.removeAttribute('disabled')
})
document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault()
    const availableMoney = parseFloat(document.getElementById('available-money').innerText)
    const enterAmount = parseFloat(document.getElementById('enter-amount').value)
    const InputPassword = document.getElementById('input-password').value
    if(InputPassword === '1234' && enterAmount > 0){
        let addMoney = availableMoney + enterAmount
        document.getElementById('available-money').innerText = addMoney
        document.getElementById('enter-amount').value = ''
        document.getElementById('input-password').value = ''
        const loginButton = document.getElementById('login-btn')
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









