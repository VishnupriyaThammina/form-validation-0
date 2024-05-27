const collection = Array.from(document.getElementsByClassName('input-11'));

function isValidEmail(email){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}

function check_null(x){
    x.addEventListener('blur',()=>{
        if(x.value===''){
            x.classList.add('form-flaw');
        } else {
            x.classList.remove('form-flaw');
        }

        if(x.type==='email' && !isValidEmail(x.value)){
            x.classList.add('form-flaw');
        } else {
            x.classList.remove('form-flaw');
        }
    });
}

collection.forEach((x)=>{
    check_null(x);
});
