# EduConnect - Aplicación Web Migrada a React

Bienvenido a la versión migrada a **React + Vite** de **EduConnect**, una plataforma educativa integral para estudiantes y profesores.

Esta versión es una migración fiel y completa del proyecto original construido en HTML, CSS y JavaScript, conservando el 100% de sus 135 pantallas, estilos visuales en formato móvil (layout de teléfono), interacciones, formularios, validaciones, flujos de navegación y gestión de datos temporales y persistentes.

---

## 🚀 Tecnologías Utilizadas

- **React 19**: Biblioteca base con componentes funcionales y hooks modernos (`useState`, `useEffect`, `useRef`, `useNavigate`).
- **Vite 8**: Herramienta de compilación y empaquetado de alto rendimiento con soporte para code-splitting dinámico.
- **React Router DOM 7**: Enrutamiento client-side sin recargas de página, compatible con rutas semánticas y con las rutas heredadas (`.html` y numéricas).
- **CSS Modular / Scoped**: Cada una de las 135 pantallas cuenta con su propia hoja de estilos aislada (`.seccion-X`), garantizando fidelidad visual total sin colisiones de selectores.
- **Font Awesome 6.5.2**: Iconografía idéntica a la versión original integrada mediante CDN en `index.html`.
- **SessionStorage & LocalStorage**: Gestión de datos temporales con detección automática de recarga (`performance navigation reload`).

---

## 📁 Estructura del Proyecto

```text
Educconect-react/
├── Educconect-react/             # Código fuente de la aplicación React con Vite
│   ├── index.html                # Plantilla HTML base con Font Awesome
│   ├── package.json              # Dependencias y scripts de Vite
│   ├── vite.config.js            # Configuración de compilación de Vite
│   └── src/
│       ├── components/           # Componentes modulares reutilizables
│       │   ├── Header.jsx        # Encabezado móvil con botones atrás/inicio
│       │   ├── PhoneLayout.jsx   # Marco responsivo tipo teléfono (.app y .telefono)
│       │   ├── NavigationBar.jsx # Barra inferior de navegación (.footer)
│       │   ├── SubjectCard.jsx   # Tarjeta de materia con soporte para iconos y etiquetas
│       │   └── FormField.jsx     # Campo de entrada reutilizable
│       ├── pages/                # Páginas semánticas y mapa de secciones
│       │   ├── Welcome.jsx       # Sección 1 (Bienvenida con logo CSS)
│       │   ├── Login.jsx         # Sección 2 (Inicio de sesión)
│       │   ├── ForgotPassword.jsx# Sección 3 (Recuperación de contraseña)
│       │   ├── Register.jsx      # Sección 4 (Registro de usuario)
│       │   ├── StudentDashboard.jsx     # Sección 5 (Menú del estudiante)
│       │   ├── StudentProfile.jsx       # Sección 6 (Perfil del estudiante)
│       │   ├── StudentNotifications.jsx # Sección 7 (Notificaciones estudiante)
│       │   ├── StudentNewSubject.jsx    # Sección 8 (Nueva materia estudiante)
│       │   ├── TeacherDashboard.jsx     # Sección 45 (Menú del profesor)
│       │   ├── TeacherProfile.jsx       # Sección 46 (Perfil del profesor)
│       │   ├── TeacherNotifications.jsx # Sección 47 (Notificaciones profesor)
│       │   ├── TeacherNewSubject.jsx    # Sección 135 (Nueva materia profesor)
│       │   ├── NotFound.jsx             # Pantalla 404 controlada
│       │   └── sections/         # 135 componentes individuales (Section1 a Section135)
│       ├── styles/
│       │   ├── global.css        # Reset global y fondo degradado #172234 a #3b78b8
│       │   └── sections/         # 135 hojas de estilo CSS aisladas (seccion_1 a seccion_135)
│       ├── utils/
│       │   └── storage.js        # Módulo de persistencia, aislamiento y reload
│       ├── App.jsx               # Enrutador principal con React.lazy y HashRouter
│       ├── main.jsx              # Punto de entrada de React 19
│       └── index.css             # Estilos base globales
├── html-referencia/              # Respaldo intacto de los archivos HTML y CSS originales
├── scratch/                      # Suite de pruebas automatizadas y verificaciones
└── package.json                  # Scripts proxy raíz para ejecutar cómodamente desde la raíz
```

---

## 💻 Instrucciones de Ejecución Local

Puedes ejecutar los comandos directamente desde la carpeta raíz del proyecto:

### 1. Instalar dependencias
```bash
npm --prefix Educconect-react install
```

### 2. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre tu navegador en `http://localhost:5173`.

### 3. Compilar para producción
```bash
npm run build
```
Generará la carpeta optimizada `Educconect-react/dist/` con chunks individuales code-split por pantalla.

### 4. Previsualizar la compilación de producción
```bash
npm run preview
```

### 5. Ejecutar la suite de pruebas automatizadas (45 pruebas)
```bash
npm test
```

---

## 🛡️ Comportamiento de Datos Temporales y Persistencia

### Materias Temporales (Regla Crítica)
- **Estudiante**: Clave `educonnect_materias_temporales` en `sessionStorage`.
- **Profesor**: Clave `educonnect_materias_profesor_temporales` en `sessionStorage`.

1. **Aislamiento total**: Las materias temporales creadas por el estudiante nunca aparecen en la interfaz del profesor, y viceversa.
2. **Navegación normal**: Al navegar entre secciones mediante la barra de navegación, botones de retorno o enlaces, las materias temporales creadas **permanecen visibles**.
3. **Refresco / F5 (`Reload`)**: La aplicación detecta el refresco mediante `performance.getEntriesByType("navigation")[0].type === "reload"`. Al recargar, las materias temporales creadas **se eliminan automáticamente**, dejando visibles únicamente las materias predeterminadas originales.
4. **Validaciones**: Se impide la creación de materias con campos vacíos y se rechaza la duplicidad de códigos de materias.

### Datos Persistentes en `localStorage`
- `educonnectUsuario`: Credenciales de registro (correo, password, rol, celular, pin).
- `educonnectSesion`: Sesión activa para control de acceso y redirección automática.
- `educonnect_perfil`: Perfil del estudiante/profesor editable desde sus pantallas correspondientes.
- `calificacion_*_actividad2`: Calificaciones y comentarios registrados por el profesor para cada estudiante en Tecnología y Artística.

---

## 🌐 Publicación y Despliegue

La aplicación utiliza `HashRouter` para garantizar compatibilidad nativa con servicios estáticos sin requerir configuraciones de reescritura de servidor:

### Despliegue en GitHub Pages
1. En `Educconect-react/vite.config.js`, agrega `base: './'`.
2. Ejecuta `npm run build`.
3. Sube el contenido de `Educconect-react/dist/` a la rama `gh-pages` de tu repositorio.

### Despliegue en Vercel o Netlify
- Directorio raíz del proyecto: `Educconect-react`
- Comando de compilación: `npm run build`
- Directorio de salida: `dist`

---

## ✅ Resumen de Pruebas Superadas

El proyecto cuenta con una suite automatizada de 45 pruebas unitarias e integrales (`npm test`) que comprueba:
1. Compilación limpia sin errores de Vite.
2. Existencia de los 135 componentes React individuales.
3. Existencia de las 135 hojas de estilo CSS scoped.
4. Registro de todas las rutas numéricas, rutas `.html` y rutas semánticas.
5. Resolución al 100% de enlaces internos (cero enlaces rotos).
6. Creación, consulta y aislamiento de materias temporales.
7. Rechazo de códigos duplicados.
8. Destrucción de materias temporales ante evento `reload`.
9. Preservación de datos de perfil en `localStorage`.
