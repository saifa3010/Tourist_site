function message(){
    let Name = document.getElementById('name');
    let email = document.getElementById('email');
    let msg = document.getElementById('msg');
    const success = document.getElementById('success');
    const danger = document.getElementById('danger');

    if(Name.value === '' || email.value === '' || msg.value === ''){
        danger.style.display = 'block';
    }
    else{
        setTimeout(() => {
            Name.value = '';
            email.value = '';
            msg.value = '';
        }, 2000);

        success.style.display = 'block';
    }


    setTimeout(() => {
        danger.style.display = 'none';
        success.style.display = 'none';
    }, 4000);

}


window.addEventListener('load', () => {


    const name = sessionStorage.getItem('NAME');

    document.getElementById('result-name').innerHTML = name;

})
