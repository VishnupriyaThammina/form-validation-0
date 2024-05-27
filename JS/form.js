const name_id = document.getElementById('name');
function check_null(x){
x.addEventListener('blur',()=>{
    if(name_id.value===''){
        name_id.classList.add('form-flaw')
     

    }else{
       
        name_id.classList.remove('form-flaw')


    }
})
}
check_null(name_id)

