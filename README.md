SISTEMA DE CONTROL Y GESTION DE USUARIOS

INTEGRANTES DEL EQUIPO
Yahel Aleman
Mario Eduardo Grajales Ramirez

DESCRIPCION DETALLADA DEL PROYECTO
Este proyecto consiste en el desarrollo de una aplicación web interactiva orientada al frontend que simula un entorno administrativo o panel de control (Dashboard). El sistema está diseñado para demostrar conceptos fundamentales de seguridad del lado del cliente, persistencia de datos en el navegador y manipulación dinámica del Modelo de Objetos del Documento (DOM). Sin necesidad de conectarse a un servidor o base de datos externa, el proyecto logra emular un flujo completo de inicio de sesión, validación de credenciales, protección de rutas y captura de información estructurada mediante formularios interactivos.

TECNOLOGIAS Y HERRAMIENTAS UTILIZADAS
Lenguajes base: HTML5 para la semántica del documento, CSS3 para ajustes de estilo personalizados y JavaScript (ES6) para toda la lógica de programación y eventos asíncronos.
Framework visual: Bootstrap 5. Se implementó extensivamente para estructurar el sistema de rejillas, aplicar utilidades de Flexbox (como d-flex y w-100 para dividir la pantalla), diseñar el menú de navegación superior (Navbar), el menú lateral colapsable (Sidebar), las tarjetas de contenido (Cards) y el renderizado avanzado de ventanas emergentes (Modales).
Almacenamiento: Uso de la Web Storage API, específicamente LocalStorage, para mantener el estado de la sesión activa incluso si se recarga la página.

FLUJO DEL SISTEMA Y LOGICA DE PROGRAMACION

Motor de Autenticación y Enrutamiento (login.js)
El punto de entrada es la pantalla de acceso. Se programó un event listener tipo 'submit' en el formulario que intercepta el envío por defecto usando la función preventDefault(). Tras verificar que los campos no se encuentren vacíos, el sistema captura el valor del correo electrónico, lo inyecta en la memoria local del navegador (localStorage.setItem) y ejecuta una redirección automática mediante window.location.href hacia el panel de control.

Middleware de Protección y Datos de Sesión (sesion.js)
Para evitar vulnerabilidades de acceso directo mediante la URL, el panel de control ejecuta un script de validación inmediato al cargar. Este lee el LocalStorage buscando la clave del usuario logueado. Si la consulta devuelve un valor nulo, la ejecución se interrumpe y expulsa al usuario devolviéndolo a la pantalla de login. Si la validación es exitosa, el sistema extrae la cadena de texto del correo y actualiza dinámicamente el contenido de la barra de navegación para darle la bienvenida al usuario activo.

Librería de Validaciones (utileria.js)
Se construyó un módulo independiente para garantizar la integridad de los datos capturados:

La función validarCorreo evalúa la cadena ingresada contra una Expresión Regular (Regex) que exige un formato estricto: debe contener caracteres alfanuméricos, seguidos de un símbolo arroba, un dominio, un punto y una extensión válida, rechazando espacios en blanco.

La función validarPassword asegura que la longitud de la cadena sea estrictamente mayor o igual a 6 caracteres.

Interacciones del Dashboard y Eventos Dinámicos (dashboard.js)

Navegación: El Sidebar responde a eventos de clic alternando su estilo CSS de 'none' a 'block' para ocultarse o mostrarse a voluntad del usuario.

Validación reactiva: El campo del Número de Control implementa un evento tipo 'input', el cual evalúa en tiempo real cada tecla presionada. Si la longitud de la cadena es distinta a 6 dígitos exactos, el DOM se actualiza instantáneamente para mostrar un mensaje de error en color rojo.

Lógica algorítmica de edad: Al presionar el botón de verificación, el sistema convierte el valor capturado a un número entero mediante parseInt(). Evalúa mediante condicionales si el dato no es un número (isNaN) o si cumple la condición de ser mayor o igual a 18. Finalmente, inyecta la conclusión textual dentro del cuerpo del Modal y fuerza su aparición en pantalla instanciando el objeto nativo de Bootstrap.

PROCESO DE CREACION Y DESARROLLO
Fase 1: Se construyó la arquitectura base del login, implementando el centrado vertical con clases de Bootstrap y programando el almacenamiento de la sesión en JavaScript.
Fase 2: Se diseñó el esqueleto del archivo index.html, montando la barra de navegación superior con el menú desplegable para cerrar sesión y borrado de LocalStorage.
Fase 3: Se dividió la pantalla del panel para alojar el menú lateral colapsable, configurando los enlaces anidados para la sección de usuarios.
Fase 4: Se maquetaron las tarjetas de captura y se enlazaron los inputs con la librería de validaciones utileria.js.
Fase 5: Se construyó la lógica condicional del número de control y la calculadora de edad, culminando con la integración del Modal de Bootstrap para mostrar los resultados de forma profesional.

CAPTURAS DE PANTALLA DEL SISTEMA EN ACCION

Pantalla de Login
[Inserta aquí la imagen login.png]
Vista del portal de acceso donde se procesa la validación de credenciales.

Dashboard Principal
[Inserta aquí la imagen dashboard.png]
Panel de control estructurado con el nombre del usuario activo en la barra superior y el menú lateral operativo.

Modal de Edad y Validaciones
[Inserta aquí la imagen modal.png]
Ventana emergente ejecutada mediante JavaScript que muestra el resultado del algoritmo de cálculo de mayoría de edad.