document.getElementById('phone-number').addEventListener('keyup', function(){
    const phoneNumber = document.getElementById('phone-number').value
    const loginButton = document.getElementById('login-button')
    if(phoneNumber.length === 11){
        loginButton.removeAttribute('disabled')
    }else{
    }
})
    const loginButton = document.getElementById('login-button')
    loginButton.addEventListener('click', function(event){
    event.preventDefault()
    const phoneNumber = document.getElementById('phone-number').value
    const loginPassword = document.getElementById('login-pass').value
    if(phoneNumber === "01733333333" && loginPassword === '1234'){
        console.log("You are logged in")
        window.location.href = 'home.html'
    }else{
        alert("Invalid Phone Number or Password")
    }
})


