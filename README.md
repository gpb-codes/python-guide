# Guía de Python - DuocUC

<div align="center">
  <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" width="120" height="120" alt="Python Logo" />
  <h1>Guía de Python Interactiva</h1>
  <p>Aprende Python con ejercicios prácticos y código syntax highlighting</p>
  <p>
    <a href="https://gpb-codes.github.io/python-guide/">
      <img src="https://img.shields.io/badge/Live Demo-0ea5e9?style=for-the-badge&logo=google-chrome&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://github.com/gpb-codes/python-guide">
      <img src="https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github" alt="GitHub Repository" />
    </a>
    <img src="https://img.shields.io/badge/Tailwind CSS-38bdf8?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" alt="License: MIT" />
  </p>
</div>

---

## Tabla de Contenidos

- [Descripción](#descripción)
- [Características](#características)
- [Vista Previa](#vista-previa)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Cómo Usar](#cómo-usar)
- [Desplegar en GitHub Pages](#desplegar-en-github-pages)
- [Tecnologías](#tecnologías)
- [Créditos](#créditos)

---

## Descripción

Esta es una guía interactiva de Python diseñada para estudiantes de DuocUC. Incluye:

- **Ejercicios prácticos** organizados por categorías
- **Sintaxis highlighting** con resaltado de código
- **Diseño moderno** con Tailwind CSS
- **Modo oscuro** atractivo y fácil de leer
- **Navegación fluida** entre secciones

---

## Características

- ✅ Diseño responsivo (móvil y escritorio)
- ✅ Código con syntax highlighting
- ✅ Ejercicios organizados por tema
- ✅ Secciones de sintaxis básica
- ✅ Guía de progreso de aprendizaje
- ✅ Enlaces a código fuente en GitHub
- ✅ Totalmente en español

---

## Vista Previa

### Página Principal
La guía incluye una hero section con estadísticas, navegación, y enlaces a los ejercicios.

### Categorías de Ejercicios
- Ejercicios en Clase (validación de datos)
- Bucles (FOR/WHILE)
- Condicionales (IF)
- Funciones
- Inicio

### Sintaxis Básica
Secciones con ejemplos de código:
- Variables
- Tipos de Datos
- Condicionales
- Bucles
- Funciones
- Entrada/Salida

---

## Estructura del Proyecto

```
python-guide/
├── index.html          # Página principal de la guía
├── README.md        # Este archivo
└── .gitignore      # Archivos ignorados por Git
```

---

## Cómo Usar

### Ver la Guía Online

1. Visita: **https://gpb-codes.github.io/python-guide/**

### Ejecutar Localmente

1. **Clona el repositorio:**
   ```bash
   git clone https://github.com/gpb-codes/python-guide.git
   cd python-guide
   ```

2. **Abre en tu navegador:**
   - Doble clic en `index.html`
   - O usa un servidor local:
   ```bash
   # Con Python
   python -m http.server 8000
   # Luego abre http://localhost:8000
   ```

---

## Desplegar en GitHub Pages

### Opción 1:Desde GitHub.com

1. Ve a tu repositorio en GitHub
2. Ir a **Settings** > **Pages**
3. En **Source**, selecciona **Deploy from a branch**
4. En **Branch**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Espera ~2 minutos y tu sitio estará publicado

### Opción 2:con GitHub Actions

1. Crea el archivo `.github/workflows/deploy.yml`:
   ```yaml
   name: Deploy to GitHub Pages
   
   on:
     push:
       branches: [main]
   
   jobs:
     deploy:
       runs-on: ubuntu-latest
       steps:
         - uses: actions/checkout@v4
         
         - name: Deploy
           uses: peaceiris/actions-gh-pages@v3
           with:
             github_token: ${{ secrets.GITHUB_TOKEN }}
             publish_dir: ./
   ```

2. Habilita GitHub Pages en Settings
3. El deployment será automático

---

## Tecnologías

| Tecnología | Descripción |
|------------|--------------|
| HTML5 | Estructura de la página |
| Tailwind CSS | Framework de estilos |
| JavaScript | Interactividad |
| GitHub Pages | Hosting gratuito |

---

## Créditos

**Gabriel Pedreros**
- Estudiante de Ingeniería en Informática
- Creador de la guía

### Enlaces

- **GitHub**: [github.com/gpb-codes](https://github.com/gpb-codes)
- **Portafolio**: [gpb-codes.github.io/gabrielPedreros/](https://gpb-codes.github.io/gabrielPedreros/)
- **Email**: g.pedreros.becerra@gmail.com

---

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

---

<div align="center">
  <p>⭐️ Si te gusta esta guía, no olvides darle una estrella en GitHub</p>
  <p>Hecho con ❤️ usando Tailwind CSS</p>
</div>