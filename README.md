# Simulación de Acceso y Gestión de Sistema

## Integrantes del Equipo
* Yahel Aleman
* Mario Eduardo Grajales Ramirez

## Descripción Breve
Proyecto escolar que simula un flujo de inicio de sesión validado y el acceso a un panel de control interactivo (Dashboard). El sistema verifica credenciales, protege la sesión y permite la captura de datos y validación de usuarios mediante modales y formularios.

## Tecnologías y Frameworks
* **HTML5, CSS3, JavaScript (ES6)**
* **Framework CSS:** Bootstrap 5 (Utilizado para estructurar rápidamente el diseño, estilizar formularios, el menú de navegación y la ventana modal).

## Flujo del Sistema y Lógica
1. **El Login hacia el Sistema:** El usuario ingresa a `login.html`. Mediante JavaScript (`login.js`), se valida que los campos no estén vacíos. Si pasa la validación, el correo ingresado se guarda en la memoria del navegador usando `localStorage` y se redirige a `index.html`.
2. **Protección y Navbar:** Al cargar `index.html`, el script `sesion.js` verifica si existe el dato en `localStorage`. Si no existe, expulsa al usuario de regreso al login. Si existe, lo lee y lo inyecta en la esquina superior derecha del Navbar.
3. **Métodos Principales:**
   * `validarCorreo()` y `validarPassword()` en `utileria.js`: Aseguran mediante expresiones regulares y longitud mínima que los datos capturados tengan un formato seguro.
   * `localStorage.setItem()` y `localStorage.removeItem()`: Gestionan el estado de la sesión simulada.

## Proceso de Creación
* **Paso 1:** Se maquetó la vista de acceso y se implementó la lógica de redirección y almacenamiento de sesión.
* **Paso 2:** Se estructuró el panel central (`index.html`) integrando un Navbar superior dinámico.
* **Paso 3:** Se añadió el Sidebar colapsable y los formularios de captura.
* **Paso 4:** Se enlazaron las funciones de `utileria.js` para validar los campos en tiempo real y se activó el Modal de Bootstrap para calcular la mayoría de edad.

## Capturas de Pantalla del Flujo
*(Nota: Guarda tus imágenes en una carpeta llamada `img` y reemplaza estos enlaces)*

(img/login.png)
*Pantalla principal de acceso.*

(img/dashboard.png)
*Panel de control con el nombre de usuario cargado desde localStorage.*

(img/modal.png)
*Ventana emergente que verifica si el alumno es mayor o menor de edad.*