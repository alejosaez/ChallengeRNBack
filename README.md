# ChallengeRNBack

Este desafío consiste en crear una aplicación móvil con **React Native** y **TypeScript**, incluyendo el desarrollo de una **API de backend** para la gestión de datos. La aplicación debe seguir el diseño proporcionado y cumplir con varios requisitos funcionales y de autenticación.

[Figma](https://www.figma.com/design/wyEuQ8vu7rkx4kIfm5h9Zn/Coffee-Mobile-App-UI-Template-(Community)?node-id=0-1&t=fFryQwtdgeBl0kwf-0)

## Backend (API con Node.js y Express)

### Requisitos y Funcionalidad

1. **Configuración Inicial**
   - Configuración del backend en **TypeScript** y **Express**.
   - Utilización de **Sequelize** para gestionar una base de datos en **PostgreSQL**.

2. **Autenticación** (Pendiente de implementación)
   - Autenticación de usuario con **Auth0** y protección de rutas mediante middleware.

3. **Rutas**
   - `POST /api/products`: Crear un nuevo producto.
   - `GET /api/products`: Obtener todos los productos.
   - `GET /api/products/:id`: Obtener un producto por ID específico.
   - `PUT /api/products/:id`: Actualizar un producto.
   - `DELETE /api/products/:id`: Eliminar un producto.
   - `GET /api/categories`: Obtener todas las categorías.
   - `GET /api/categories/:id/products`: Obtener productos de una categoría específica.

4. **Validación y Manejo de Errores**
   - Validación de datos de entrada con **Zod**.
   - Manejo global de errores.

5. **Documentación de la API** (Pendiente)
   - Documentación de la API utilizando **Swagger**.

6. **Pruebas**
   - Implementación de pruebas unitarias para la creación de productos, asegurando que los productos se crean correctamente y la respuesta incluye los datos esperados.

## Frontend (Aplicación React Native)

1. **Configuración Inicial**
   - Proyecto de **React Native** con **TypeScript** y **Styled Components**.
   - Configuración de **ESLint** y **Prettier**.

2. **Autenticación**
   - Autenticación de usuario en el frontend utilizando **Auth0** y **Redux Toolkit** para el estado global.

3. **Gestión de Productos**
   - Consumo de la API con **Axios** y manejo de estado mediante **Redux Toolkit**.
   - Creación, edición, eliminación y visualización de productos.

4. **UI/UX**
   - Implementación del diseño en React Native, siguiendo el estilo proporcionado y la funcionalidad de filtrado por categorías.

5. **Persistencia de Estado**
   - Persistencia de estado con **Redux Persist** y almacenamiento local con **AsyncStorage**.

6. **Pruebas**
   - Pruebas unitarias para el formulario de creación de productos, verificando la renderización y los campos requeridos.

## Requisitos Adicionales

1. **Pruebas**:
   - Pruebas unitarias para el backend y el frontend.
   
2. **Despliegue**:
   - Instrucciones de despliegue para el entorno de producción.

3. **Documentación**:
   - Documentación clara sobre el proceso de configuración y despliegue.

## Criterios de Evaluación

1. **Funcionalidad**: Cumplimiento de todos los requisitos.
2. **Calidad del Código**: Código limpio y organizado.
3. **Autenticación y Seguridad**: Implementación de autenticación y protección de rutas.
4. **Pruebas**: Inclusión de pruebas unitarias críticas.
5. **Documentación**: Documentación clara y completa.
6. **Despliegue**: Disponibilidad de la aplicación en línea.

## Librerías Utilizadas

- TypeScript
- Express
- Sequelize
- PostgreSQL
- Auth0
- Zod
- Swagger
- React Native
- Styled Components
- ESLint y Prettier
- Redux Toolkit
- Axios
- React Query
- React Hook Form
- Redux Persist
- AsyncStorage

## Recursos y Referencias Adicionales

- [Instalaciones](https://www.notion.so/Instalaciones-8b92d3212c274fcea311857eddf78729?pvs=21)
- [Middlewares](https://www.notion.so/Middlewares-7a15aab5f068459ea1b75b81c03ed514?pvs=21)
- [Validación de Rutas con Zod en Express](https://www.notion.so/Validaci-n-de-Rutas-con-Zod-en-Express-3a9bdcf710ed43baa022a4b749385846?pvs=21)
- [Backend rutas y relaciones](https://www.notion.so/Backend-rutas-y-relaciones-ef9b89d83400472f93d48f32e4a511ef?pvs=21)
- [Auth0](https://www.notion.so/AUTH0-109b0453285a46bfb2eb4098065c2f06?pvs=21)
- [Publicación de Auth0](https://www.notion.so/publicacion-de-auth0-10964b694833805190e9efc3f926cb38?pvs=21)
- [Testing con Jest](https://www.notion.so/Testing-con-Jest-10e64b694833808ca6c2c7b0181da0e5?pvs=21)

