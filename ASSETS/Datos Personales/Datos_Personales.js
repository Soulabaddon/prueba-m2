// Simulación de datos del usuario
let usuario = {
    nombre: 'Ignacio Zapata',
    correo: 'igncioo.antonio@example.com',
    transacciones: [
        'Compra en rypley: $50000',
        'Pago de factura de luz: $35000'
        // Agrega más transacciones aquí
    ]
};

// Rellenar los campos con los datos del usuario
document.getElementById('nombre').value = usuario.nombre;
document.getElementById('correo').value = usuario.correo;


