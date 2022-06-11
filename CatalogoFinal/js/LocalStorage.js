$(document).ready(function () {
    $('#box-form').submit(function () {
        var txt_user = $('#txt-user').val();
        var txt_password = $('#txt-password').val();

        //almacenar los valores dentro de localstorage
        localStorage.setItem('usuario', txt_user);
        localStorage.setItem('password', txt_password);

        setTimeout(function (){
            Swal.fire(
                'Registrado correctamente!',
                'Dale aceptar!',
                'success'
              )
        },3000)
    });


    const btn_login = document.getElementById('btn-login');

    btn_login.addEventListener('click', function () {

        var log_user = $('#log-user').val();
        var log_password = $('#log-password').val();

        if (log_user == localStorage.getItem('usuario') && log_password == localStorage.getItem('password')) {
            Swal.fire(
                'Bienvenido!',
                'Dale aceptar!',
                'success'
              )
              setTimeout(function(){
                window.location.href = 'index2.html';
              }, 2000);  
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    })

});



