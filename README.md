# Sistema de Control y Gestión de Usuarios

> **Descripción:** Desarrollo de una aplicación web interactiva orientada al frontend que simula un entorno administrativo o panel de control (Dashboard). 

Este sistema está diseñado para demostrar conceptos fundamentales de seguridad del lado del cliente, persistencia de datos en el navegador y manipulación dinámica del DOM. En su versión final, el proyecto emula un comportamiento de Single Page Application (SPA), gestionando vistas independientes, notificaciones asíncronas y animaciones fluidas sin requerir un backend de servidor.

---

## Integrantes del Equipo

| Nombre | Rol / Participación |
| :--- | :---: |
| **Carlos Yahel Alemán Cruz** | 50% |
| **Mario Eduardo Grajales Ramírez** | 50% |

---

## Tecnologías y Herramientas Utilizadas

El proyecto se construyó utilizando **HTML5** para la semántica estructural y **CSS3** para las transiciones personalizadas. Toda la lógica de programación y los eventos asíncronos están desarrollados en **JavaScript ES6**.

Como framework visual principal se implementó **Bootstrap 5**, aprovechando su sistema de rejillas, utilidades Flexbox y componentes preconstruidos como el menú de navegación (Navbar), el menú lateral colapsable (Sidebar), ventanas emergentes (Modales) y notificaciones flotantes (Toasts). Para el almacenamiento de la sesión, se utilizó la **Web Storage API** (específicamente LocalStorage), permitiendo mantener el estado del usuario activo incluso si se recarga la página.

---

## Flujo del Sistema y Lógica de Programación

### 1. Motor de Autenticación y Enrutamiento (login.js)
El formulario de acceso utiliza un escuchador de eventos que intercepta el envío por defecto. Tras verificar que los campos no estén vacíos, el sistema captura el correo electrónico, lo inyecta en la memoria local del navegador y ejecuta una redirección automática hacia el panel de control principal.

### 2. Middleware de Protección y Sesión (sesion.js)
Al cargar el panel, un script valida inmediatamente la existencia del usuario en el LocalStorage. Si la consulta devuelve un valor nulo, el usuario es expulsado y devuelto a la pantalla de login. En caso de éxito, el Navbar se actualiza dinámicamente inyectando el nombre del usuario activo.

### 3. Librería de Validaciones (utileria.js)
Se desarrolló un módulo independiente para garantizar la integridad de los datos. Incluye funciones que evalúan el correo electrónico mediante una Expresión Regular estricta y aseguran que la contraseña capturada cumpla con una longitud mínima de 6 caracteres.

### 4. Interacciones del Dashboard (dashboard.js)
El panel central funciona bajo el concepto de Single Page Application (SPA), manipulando clases CSS para ocultar o mostrar los distintos formularios de captura sin recargar la página. El menú lateral cuenta con transiciones fluidas de ancho y opacidad para mejorar la experiencia de usuario. 

Además, se implementaron validaciones reactivas, como la evaluación en tiempo real de los 6 dígitos del Número de Control, y una calculadora lógica que determina la mayoría de edad e inyecta el resultado directamente dentro de un Modal interactivo de Bootstrap. Las notificaciones del sistema se manejan a través de Toasts.

---

## Proceso de Creación y Desarrollo

1. Construcción de la arquitectura base del login y almacenamiento de sesión en JavaScript.
2. Diseño del esqueleto HTML principal y montaje de la barra de navegación superior.
3. Segmentación de la pantalla para el menú lateral colapsable y los contenedores de los formularios.
4. Maquetación de tarjetas de captura y conexión con la librería global de validaciones.
5. Desarrollo de la lógica condicional del número de control y la calculadora de edad vinculada al Modal.
6. Pulido de la interfaz, separando las vistas internas e implementando alertas dinámicas.

---

## Capturas de Pantalla del Sistema

### Pantalla de Login
> Vista del portal de acceso donde se procesa la validación de credenciales.

<!-- REEMPLAZA EL ENLACE DE ABAJO CON LA RUTA DE TU IMAGEN -->
![Pantalla de Login](img/login.png) 

### Dashboard Principal y SPA
> Panel de control mostrando la pantalla de bienvenida y el funcionamiento del menú lateral.

<!-- REEMPLAZA EL ENLACE DE ABAJO CON LA RUTA DE TU IMAGEN -->
![Dashboard Principal](img/dashboard.png)

### Notificaciones y Modales
> Ejecución de componentes Bootstrap: Toasts de validación y Modales de cálculo de edad.

<!-- REEMPLAZA EL ENLACE DE ABAJO CON LA RUTA DE TU IMAGEN -->
![Modales y Toasts](img/modal.png)
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
