let Submit = document.getElementById("submit");

let FullNameSpan = document.getElementById("fullnamespan");
let EmailSpan = document.getElementById("emailspan");
let PasswordSpan = document.getElementById("passwordspan");
let MessageSpan = document.getElementById("messagespan");
let SubmitSpan = document.getElementById("submitspan");

function FullNameError(){
    let FullName = document.getElementById("fullname").value;
    
    if(FullName.length == 0){
        FullNameSpan.textContent = "Full Name is Required";
        return false;
    }
    if(!FullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        FullNameSpan.textContent = "Write Full Name";
        return false;
    }
    FullNameSpan.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}


function EmailError(){
    let Email = document.getElementById("email").value;
    
    if(Email.length == 0){
        EmailSpan.innerHTML = "Email is Required";
        return false;
    }
    if(!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        EmailSpan.textContent = "Invalid Email";
        return false;
    }
    EmailSpan.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
    return true;
}



function PasswordError(){
    let Password = document.getElementById("password").value;
    
    if(Password.length == 0){
        PasswordSpan.textContent = "Password is Required";
        return false;
    }
    if(Password.length !==10){
        PasswordSpan.textContent = "Passsword Should be 10 Digits";
        return false;
    }
    if(!Password.match(/^[0-9]{10}$/)){
        PasswordSpan.textContent = "Only Digits";
        return false;
    }
        PasswordSpan.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
}

function MessageError(){
    let Message = document.getElementById("message").value;
    let required = 30;
    let left = required - Message.length;
    
    if(left>0){
        MessageSpan.textContent = left + " More Characters Left";
        return false;
    }
        MessageSpan.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        return true;
}

function validateForm(){
    if(!FullNameError() || !EmailError() || !PasswordError() || !MessageError()){
        SubmitSpan.style.display = 'block';
        SubmitSpan.innerHTML = "Please Fix The Error";
        setTimeout(function(){SubmitSpan.style.display = "none";},2000)
            return false;
    }
}