document.getElementById('form-usuario').addEventListener('submit', function(event){
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const apeliido = document.getElementById('apellido').value;
    const correo = document.getElementById('correo').value;
    const contrasena = document.getElementById('contrasena').value;

    if(nombre && apeliido && correo && contrasena){
        alert(` ¡Sr o Srta ${nombre} ${apeliido} ha creado su cuenta exitosamente!`); 
        
        alert('Por favor, complete todos los campos.');
    }
});