document.getElementById('transfer-money-btn').addEventListener('click', function(event){
    event.preventDefault()
    const transferSection = document.getElementById('transfer-section')
    transferSection.classList.remove('hidden')
    const transferBtn = document.getElementById('transfer-btn')
    transferBtn.removeAttribute('disabled')
})

document.getElementById('transfer-btn').addEventListener('click', function(event){
    event.preventDefault()
    // const phoneNumber = document.getElementById('transfer-other-amount').value
    // if(phoneNumber.length === 11){
    //     const loginButton = document.getElementById('transfer-btn')
    //     loginButton.removeAttribute('disabled')
    // }



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

