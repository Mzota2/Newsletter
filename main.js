// DOM CONSTANTS
const container = document.getElementById('container');
const subscribeBtn = document.getElementById('subscribe-button');
const dismissBtn = document.querySelector('.dismiss-button');
const success = document.getElementById('success');
const emailInput  = document.getElementById('email');
const emailVerification = document.getElementById('success-message');
const errorMessage = document.getElementById('error-message');

//email htmls
const emailMessage = document.querySelector('.email-message');


//DOM MANIPULATION

//Default
success.style.display = 'none';
subscribeBtn.classList.add('btnDisabled');
subscribeBtn.classList.remove('subscribe-btn');
errorMessage.style.display = 'none';
//

function validateEmail(){
    const email = emailInput.value;
    const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(email.match(emailRegex)){
        console.log('it matches');
        emailInput.classList.remove('emailDenied');
        subscribeBtn.classList.remove('btnDisabled');
        subscribeBtn.classList.add('subscribe-btn');
        subscribeBtn.disabled = false;
        errorMessage.style.display = 'none';

    }else{
        emailInput.classList.add('emailDenied');
        subscribeBtn.classList.add('btnDisabled');
        subscribeBtn.classList.remove('subscribe-btn');
        subscribeBtn.ariaDisabled = true;
        errorMessage.style.display = 'block';
    }
    
}

emailInput.addEventListener('keypress', function(){
    validateEmail();
});

subscribeBtn.addEventListener('click', function(e){
    e.preventDefault();
    container.style.display = 'none';
    success.style.display ='flex';
    emailVerification.innerHTML = `
    A confirmation email has been sent to <strong>${emailInput.value}</strong>. Please open it and click the button inside to 
      confirm your subscription
    `
});

dismissBtn.addEventListener('click', function(e){
    e.preventDefault();
    container.style.display = 'flex';
    success.style.display ='none';
})