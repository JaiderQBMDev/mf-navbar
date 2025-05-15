<h1 align="center">Mf-Navbar · Layout (Navbar y Sidebar)</h1>

Contiene el navbar y sidebar, y es responsable de montar dinámicamente los otros microfrontends mediante single-spa. Actúa como contenedor principal de vistas.


## 🚀 Tecnologías Utilizadas

- ⚛️ [React](https://react.dev/)
- 🌈 [Tailwind CSS](https://tailwindcss.com/)
- 🧱 [Module Federation (Webpack 5)](https://webpack.js.org/concepts/module-federation/)
- 🔧 [Webpack](https://webpack.js.org/)
- 🧩 [single-spa](https://single-spa.js.org/)

## 📁 Estructura del Proyecto

- `src/`
  - `assets`: Imágenes, íconos y otros recursos estáticos
  - `Components`: Componentes reutilizables de la interfaz
  - `routes`: Configuración de rutas internas
  - `utils`: Funciones utilitarias
  - `MyBodytech-mf-navbar.js`: Archivo de entrada del módulo federado
  - `root.helper.js`: 
  - `root.component.js`: Componente raíz del microfrontend
 
## ⚙️ Instalación 

1. Clona el repositorio si aún no lo has hecho:

   
```bash
   git clone https://github.com/Jaider-QBM/Mf-Navbar
   cd mf-auth
```
2. Instala las dependencias:
    
```bash
npm install
```
## ▶️ Modo Desarrollo

Para iniciar el entorno de desarrollo, ejecuta:
  
```bash
npm run dev
```
Esto levantará el microfrontend en:
 
```bash
http://localhost:8510
```

## 🧩 Integración

Este microfrontend está diseñado para integrarse dentro de un contenedor mediante Module Federation. Asegúrate de que tu contenedor consuma el módulo correctamente desde la URL expuesta.
