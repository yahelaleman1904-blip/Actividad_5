document.addEventListener('DOMContentLoaded', () => {
    
    const btnHamburguesa = document.getElementById('btnHamburguesa');
    const sidebar = document.getElementById('sidebar');

    btnHamburguesa.addEventListener('click', () => {
        sidebar.classList.toggle('sidebar-oculto');
    });

    const linkCaptura = document.getElementById('linkCaptura');
    const linkRegistro = document.getElementById('linkRegistro');
    const mensajeBienvenida = document.getElementById('mensajeBienvenida');
    const seccionCapturaUsuarios = document.getElementById('seccionCapturaUsuarios');
    const seccionRegistroAlumnos = document.getElementById('seccionRegistroAlumnos');

    linkCaptura.addEventListener('click', (e) => {
        e.preventDefault(); 
        mensajeBienvenida.classList.add('d-none'); 
        seccionRegistroAlumnos.classList.add('d-none'); 
        seccionCapturaUsuarios.classList.remove('d-none'); 
    });

    linkRegistro.addEventListener('click', (e) => {
        e.preventDefault(); 
        mensajeBienvenida.classList.add('d-none'); 
        seccionCapturaUsuarios.classList.add('d-none'); 
        seccionRegistroAlumnos.classList.remove('d-none'); 
    });

    document.getElementById('formCaptura').addEventListener('submit', (e) => {
        e.preventDefault();
        const correo = document.getElementById('capCorreo').value;
        const password = document.getElementById('capPassword').value;

        if (validarCorreo(correo) && validarPassword(password)) {
            alert('Usuario capturado correctamente');
            e.target.reset();
        } else {
            alert('Error: Verifica que el correo sea válido y la contraseña tenga al menos 6 caracteres.');
        }
    });

    document.getElementById('numControl').addEventListener('input', (e) => {
        const errorMensaje = document.getElementById('errorControl');
        if (e.target.value.length !== 6) {
            errorMensaje.classList.remove('d-none');
        } else {
            errorMensaje.classList.add('d-none');
        }
    });

    document.getElementById('btnVerificarEdad').addEventListener('click', () => {
        const edad = parseInt(document.getElementById('edadAlumno').value);
        const mensaje = document.getElementById('mensajeModalEdad');
        
        if (isNaN(edad)) {
            mensaje.textContent = 'Por favor ingresa una edad válida.';
        } else if (edad >= 18) {
            mensaje.textContent = 'El alumno es MAYOR de edad.';
        } else {
            mensaje.textContent = 'El alumno es MENOR de edad.';
        }

        const modal = new bootstrap.Modal(document.getElementById('modalEdad'));
        modal.show();
    });
});