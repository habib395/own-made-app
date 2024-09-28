function getAvailableMoneyProvidingId(id){
    return money = parseFloat(document.getElementById(id).innerText)
}

function getInputValueByProvidingId(id){
    return amount = parseFloat(document.getElementById(id).value)
}
function getInputPasswordByProvidingId(id){
    return password = document.getElementById(id).value
}
function getDocumentElementIdOnly(id){
    return document.getElementById(id)
}

function disabledSection(id){
    const buttonDtn = document.getElementsByClassName(id)
    for( i = 0 ; i < buttonDtn.length ; i++){
        const buttonBtn = buttonDtn[i]
        buttonBtn.removeAttribute('disabled') 
    }
}