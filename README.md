SISTEMA DE CONTROL Y GESTION DE USUARIOS

INTEGRANTES DEL EQUIPO
Carlos Yahel Aleman Cruz
Mario Eduardo Grajales Ramirez

DESCRIPCION DETALLADA DEL PROYECTO
Este proyecto consiste en el desarrollo de una aplicación web interactiva orientada al frontend que simula un entorno administrativo o panel de control (Dashboard). El sistema está diseñado para demostrar conceptos fundamentales de seguridad del lado del cliente, persistencia de datos en el navegador y manipulación dinámica del Modelo de Objetos del Documento (DOM). En su versión final, el proyecto emula un comportamiento de Single Page Application (SPA), gestionando vistas independientes, notificaciones asíncronas y animaciones fluidas, todo sin requerir un backend de servidor.

TECNOLOGIAS Y HERRAMIENTAS UTILIZADAS
Lenguajes base: HTML5 para la semántica del documento, CSS3 (con transiciones personalizadas para animaciones fluidas) y JavaScript (ES6) para toda la lógica de programación y eventos asíncronos.
Framework visual: Bootstrap 5. Se implementó extensivamente para estructurar el sistema de rejillas, aplicar utilidades de Flexbox, diseñar el menú de navegación (Navbar), el menú lateral colapsable (Sidebar) y el renderizado avanzado de ventanas emergentes (Modales) y notificaciones flotantes (Toasts).
Almacenamiento: Uso de la Web Storage API, específicamente LocalStorage, para mantener el estado de la sesión activa incluso si se recarga la página.

FLUJO DEL SISTEMA Y LOGICA DE PROGRAMACION

Motor de Autenticación y Enrutamiento (login.js)
El punto de entrada es la pantalla de acceso. Se programó un event listener tipo 'submit' en el formulario que intercepta el envío por defecto usando la función preventDefault(). Tras verificar que los campos no se encuentren vacíos, el sistema captura el valor del correo electrónico, lo inyecta en la memoria local del navegador (localStorage.setItem) y ejecuta una redirección automática mediante window.location.href hacia el panel de control.

Middleware de Protección y Datos de Sesión (sesion.js)
Para evitar vulnerabilidades de acceso directo mediante la URL, el panel de control ejecuta un script de validación inmediato al cargar. Este lee el LocalStorage buscando la clave del usuario logueado. Si la consulta devuelve un valor nulo, la ejecución se interrumpe y expulsa al usuario devolviéndolo a la pantalla de login. Si la validación es exitosa, el sistema actualiza dinámicamente el contenido de la barra de navegación para darle la bienvenida al usuario activo.

Librería de Validaciones (utileria.js)
Se construyó un módulo independiente para garantizar la integridad de los datos capturados:

La función validarCorreo evalúa la cadena contra una Expresión Regular (Regex) que exige un formato de email estricto.

La función validarPassword asegura que la longitud de la cadena sea estrictamente mayor o igual a 6 caracteres.

Interacciones del Dashboard y Eventos Dinámicos (dashboard.js)

Navegación y Animaciones: El Sidebar responde a eventos de clic alterando clases CSS dedicadas, lo que permite una transición suave de ancho, relleno y opacidad en lugar de cortes visuales abruptos.

Enrutamiento Interno (SPA): El panel central funciona bajo el concepto de Single Page Application. Al iniciar, presenta una pantalla de bienvenida. Mediante escuchadores de eventos en el menú lateral, el sistema manipula la clase 'd-none' para ocultar y mostrar dinámicamente el módulo de Captura de Usuarios o el de Registro de Alumnos.

Notificaciones Flotantes (Toasts): Las clásicas alertas del navegador fueron reemplazadas por el componente Toast de Bootstrap. El sistema inyecta colores contextuales (verde para éxito, rojo para error) y modifica el mensaje de la notificación en tiempo real según el resultado de la validación de credenciales.

Validación reactiva: El campo del Número de Control implementa un evento tipo 'input', el cual evalúa en tiempo real cada tecla presionada. Si la longitud es distinta a 6 dígitos exactos, muestra un mensaje de error reactivo.

Lógica algorítmica de edad: Al presionar el botón de verificación, el sistema convierte el valor a un número entero y evalúa la mayoría de edad, inyectando la conclusión textual dentro del cuerpo del Modal antes de forzar su aparición en pantalla.

PROCESO DE CREACION Y DESARROLLO
Fase 1: Construcción de la arquitectura base del login y almacenamiento de la sesión en JavaScript.
Fase 2: Diseño del esqueleto index.html y montaje de la barra de navegación superior.
Fase 3: Segmentación de la pantalla para el menú lateral colapsable y los contenedores de formularios.
Fase 4: Maquetación de tarjetas de captura y enlace con la librería de validaciones utileria.js.
Fase 5: Construcción de la lógica condicional del número de control y la calculadora de edad con el Modal.
Fase 6: Pulido de la Experiencia de Usuario (UX) separando los formularios en vistas independientes, animando el despliegue del menú lateral e implementando notificaciones Toast dinámicas.

CAPTURAS DE PANTALLA DEL SISTEMA EN ACCION

Pantalla de Login
[Inserta aquí la imagen login.png]
Vista del portal de acceso donde se procesa la validación de credenciales.

Dashboard Principal y SPA
[Inserta aquí la imagen dashboard.png]
Panel de control mostrando la pantalla de bienvenida y el funcionamiento del menú lateral con transiciones.

Notificaciones y Modales
[Inserta aquí la imagen modal.png]
Ejecución exitosa de los componentes avanzados de Bootstrap (Toasts de validación y Modales de cálculo de edad).
