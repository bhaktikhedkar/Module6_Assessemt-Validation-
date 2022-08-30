
function validate() {
    let firstNameField = document.getElementById('first-name').value
    let lastNameField = document.getElementById('last-name').value
    let emailField = document.getElementById('email').value
    let contactNoField = document.getElementById('telEl').value
    let batchNoField = document.getElementById('batchEl').value
    let moduleNoField = document.getElementById('modEl').value
    let termsAndConditionsField = document.getElementById('tnc').checked
    

    let error = false

    if(firstNameField.length >= 3){
        document.getElementById('first-name-valid').style.display='block'
        document.getElementById('first-name-invalid').style.display='none'
    }
    else{
        document.getElementById('first-name-invalid').style.display='block'
        document.getElementById('first-name-valid').style.display='none'
        error = true
    }

    if(lastNameField.length >= 3){
        document.getElementById('last-name-valid').style.display='block'
        document.getElementById('last-name-invalid').style.display='none'
    }
    else{
        document.getElementById('last-name-invalid').style.display='block'
        document.getElementById('last-name-valid').style.display='none'
        error = true
    }

    if(emailField.length >=1 && emailField.includes('@') && emailField.includes('.') && emailField.lastIndexOf('.') <= emailField.length-3 && emailField.indexOf('@') != 0){
        document.getElementById('email-valid').style.display='block'
        document.getElementById('email-invalid').style.display='none'
    }
    else{
        document.getElementById('email-invalid').style.display='block'
        document.getElementById('email-valid').style.display='none'
        error = true
    }

    if(contactNoField.length===10){
        document.getElementById('phone-valid').style.display='block'
        document.getElementById('phone-invalid').style.display='none'
    }
    else{
        document.getElementById('phone-invalid').style.display='block'
        document.getElementById('phone-valid').style.display='none'
        error = true
    }

    if(batchNoField != 'None'){
        document.getElementById('batch-valid').style.display='block'
        document.getElementById('batch-invalid').style.display='none'
    }
    else{
        document.getElementById('batch-invalid').style.display='block'
        document.getElementById('batch-valid').style.display='none'
        error = true
    }

    if(moduleNoField != 'None'){
        document.getElementById('module-valid').style.display='block'
        document.getElementById('module-invalid').style.display='none'
    }
    else{
        document.getElementById('module-invalid').style.display='block'
        document.getElementById('module-valid').style.display='none'
        error = true
    }

    if(termsAndConditionsField){
        document.getElementById('tnc-invalid').style.display='none'
    }
    else{
        document.getElementById('tnc-invalid').style.display='block'
        error = true
    }

    if(!error){
        alert('Your details have been saved successfully!')
        document.getElementById('first-name').value = ''
        document.getElementById('last-name').value = ''
        document.getElementById('email').value = ''
        document.getElementById('telEl').value = ''
        document.getElementById('batchEl').value = 'None'
        document.getElementById('modEl').value = 'None'
        document.getElementById('tnc').checked = false
       

        document.getElementById('first-name-valid').style.display = 'none'
        document.getElementById('last-name-valid').style.display = 'none'
        document.getElementById('email-valid').style.display = 'none'
        document.getElementById('phone-valid').style.display = 'none'
        document.getElementById('batch-valid').style.display = 'none'
        document.getElementById('module-valid').style.display = 'none'
    }
}