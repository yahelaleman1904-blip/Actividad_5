// js/login.js
document.getElementById('formLogin').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que la página se recargue

    const correo = document.getElementById('correo').value.trim();
    const password = document.getElementById('password').value.trim();
    const mensajeError = document.getElementById('mensajeError');

    // Validación simulada
    if(correo === '' || password === '') {
        mensajeError.classList.remove('d-none');
    } else {
        mensajeError.classList.add('d-none');
        
        // Guardamos el usuario en la sesión del navegador
        localStorage.setItem('usuarioLogueado', correo);
        
        // Redirigimos al sistema
        window.location.href = 'index.html';
    }
});