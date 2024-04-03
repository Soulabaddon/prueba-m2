document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('Formulario').addEventListener('submit', function(event){
        event.preventDefault();
        
        var nomUsuario = document.getElementById('nomUsuario').value;
        var pass = document.getElementById('pass').value;

        if(nomUsuario === 'admin' && pass==='password'){
            alert('Se ha iniciado Sesión Exitosamente')
            window.location.href='/ASSETS/Home/home.html';
        } else{
            alert('Nombre de Usuario o Contraseña Invalida');
        }
    });
});
document.getElementById('registrarBtn').addEventListener('click', redirigirRegister);
document.getElementById('lostPass').addEventListener('click', redirigirPassPerdida);

function redirigirRegister(){
    window.location.href = '/prueba m2/ASSETS/crear usuario/Crear_Usuario.html'; 
}

function redirigirPassPerdida(){
    window.location.href =  '/prueba m2/ASSETS/recuperar contraseña/recuperar_contraseña.html';
}