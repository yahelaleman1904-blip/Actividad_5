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

<img width="697" height="573" alt="image" src="https://github.com/user-attachments/assets/a635857d-2a6f-40af-9863-f35ae464de52" />


### Dashboard Principal y SPA
> Panel de control mostrando la pantalla de bienvenida y el funcionamiento del menú lateral.

<img width="1901" height="916" alt="image" src="https://github.com/user-attachments/assets/3d7efb9c-4260-4d0e-bab2-19f2a8821ce9" />


### Notificaciones y Modales
> Ejecución de componentes Bootstrap: Toasts de validación y Modales de cálculo de edad.

<img width="751" height="447" alt="image" src="https://github.com/user-attachments/assets/388061b7-5246-462a-8857-f03376fc73dd" />
<img width="772" height="542" alt="image" src="https://github.com/user-attachments/assets/42cdbe53-49dc-4367-91d9-b580bcd456f6" />

