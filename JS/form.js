const collection = Array.from(document.getElementsByClassName('input-11'));

function isValidEmail(x){
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(x);
}

function validateForm(){
    let isValid = true;
    collection.forEach(element => {
        if(element.value === ''){
            element.classList.add('form-flaw');
            isValid = false;
        } else {
            element.classList.remove('form-flaw');
        }
        if (element.type === 'email'){
            if(!isValidEmail(element.value)) {
                element.classList.add('form-flaw');
                isValid = false;
            } else {
                element.classList.remove('form-flaw');
            }
        } 

        if(element.type === 'file'){
            let maxsize = 100*1024;
            if(element.files[0]>maxsize){
                element.classList.add('form-flaw');
                isValid = false;
            } else {
                element.classList.remove('form-flaw'); 
            }
        }
    });
    return isValid;
}

document.querySelector('form').addEventListener('submit',(e)=>{
    e.preventDefault();
    if(validateForm()){
        window.location.href='https://github.com/VishnupriyaThammina'
    } else {
        alert("please do a recheck")
    }
});
