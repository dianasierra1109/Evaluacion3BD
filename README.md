# Sistema de Gestión Escolar - CRUD Node.js + TypeScript + Tailwind CSS

Este proyecto es una aplicación web full-stack para la gestión de un sistema escolar, desarrollada con **Node.js**, **Express**, **TypeScript**, **Mongoose (MongoDB)** y un diseño moderno utilizando **Tailwind CSS**.

## 🚀 Características
- Gestión completa (CRUD) de la colección de Estudiantes.
- Frontend dinámico con JavaScript vainilla y Tailwind CSS.
- Backend robusto con validación de tipos mediante TypeScript.
- Conexión a base de datos MongoDB.
- Manejo de variables de entorno con `.env`.

## 📂 Colecciones de la Base de Datos
La aplicación utiliza 5 colecciones principales en MongoDB:
1. **Estudiantes**: Almacena la información académica de los alumnos.
2. **Profesores**: Datos de los docentes de la institución.
3. **Materias**: Catálogo de asignaturas disponibles.
4. **Aulas**: Espacios físicos y su capacidad.
5. **Representantes**: Contactos de emergencia y padres de los estudiantes.

## 🛠️ Requisitos Previos
- [Node.js](https://nodejs.org/) (v16 o superior)
- [MongoDB](https://www.mongodb.com/try/download/community) (Instalado localmente o una URI de MongoDB Atlas)
- Git

## 📥 Instrucciones de Instalación

1. **Clonar el repositorio:**
   Si estás viendo este proyecto desde YouTube, asegúrate de tener el link del repositorio de Git y ejecútalo en tu terminal:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd crud-node-ts-tailwind
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo llamado `.env` en la raíz del proyecto y añade lo siguiente:
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:2017/colegio
   ```
   *Nota: Ajusta la URI de MongoDB según tu configuración local.*

## ⚡ Ejecución de la Aplicación

### Modo Desarrollo
Para ejecutar la aplicación con recarga automática para los cambios en el código:
```bash
npm run dev
```

### Modo Producción
Para compilar y ejecutar la versión final:
```bash
npm run build
npm start
```

La aplicación estará disponible en: `http://localhost:3000`

---
*Desarrollado para la Evaluación 3 de la UC: Base de Datos II (Ana Contreras, Diana Sierra, Darwin Colmenares) / **UNETI**.*
