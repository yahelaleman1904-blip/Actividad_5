// js/sesion.js
document.addEventListener('DOMContentLoaded', function() {
    // 1. Verificar si hay alguien logueado
    const usuario = localStorage.getItem('usuarioLogueado');

    if (!usuario) {
        // Si no hay nadie en localStorage, lo regresamos al login
        window.location.href = 'login.html';
    } else {
        // Si sí hay, mostramos su nombre en el Navbar
        document.getElementById('nombreUsuario').textContent = usuario;
    }

    // 2. Funcionalidad de Salir del sistema
    document.getElementById('btnSalir').addEventListener('click', function(e) {
        e.preventDefault();
        // Borramos los datos de la sesión
        localStorage.removeItem('usuarioLogueado');
        // Redirigimos al login
        window.location.href = 'login.html';
    });
});