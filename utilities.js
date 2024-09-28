function showSectionById(id){
    getDocumentElementIdOnly('add-section').classList.add('hidden')
    getDocumentElementIdOnly('out-section').classList.add('hidden')
    getDocumentElementIdOnly('transfer-section').classList.add('hidden')
    getDocumentElementIdOnly('bonus-section').classList.add('hidden')
    getDocumentElementIdOnly('pay-section').classList.add('hidden')
    getDocumentElementIdOnly('transaction-section').classList.add('hidden')
    document.getElementById(id).classList.remove('hidden')
}

function hideDisabledOption(id){
    getDocumentElementIdOnly(id).removeAttribute('disabled')
}

function selectButtonDisabled(id){
    const buttonDtn = document.getElementsByClassName(id)
    for(i = 0; i < buttonDtn.length; i++){
        const colorSection = buttonDtn[i]
        colorSection.classList.add('btn-warning')
        }
    buttonDtn[0].setAttribute('disabled', true)
    buttonDtn[1].setAttribute('disabled', true)
    buttonDtn[2].setAttribute('disabled', true)
    buttonDtn[3].setAttribute('disabled', true)
    buttonDtn[4].setAttribute('disabled', true)
    buttonDtn[5].setAttribute('disabled', true)
}