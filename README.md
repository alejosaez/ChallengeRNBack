# ChallengeRNBack

Este proyecto corresponde al backend para el desafío de crear una aplicación móvil que cumpla con un diseño **pixel-perfect** y que integre gestión de datos mediante una **API RESTful** construida en **Node.js** y **Express**. Este backend permite la autenticación de usuarios, manejo de productos y categorías, y persistencia de datos en **PostgreSQL**.

## Descripción del Backend

El backend gestiona toda la lógica de negocio de la aplicación móvil, incluyendo la creación, consulta, actualización y eliminación (CRUD) de productos y categorías. Este sistema se ha desarrollado en **TypeScript** y **Express**, y usa **Sequelize** para manejar la base de datos en **PostgreSQL**.

- [Diseño en Figma](https://www.figma.com/design/wyEuQ8vu7rkx4kIfm5h9Zn/Coffee-Mobile-App-UI-Template-(Community)?node-id=0-1&t=fFryQwtdgeBl0kwf-0)

## Estructura del Proyecto y Funcionalidad

### Configuración Inicial

- El backend está configurado en **TypeScript** para mejorar la seguridad en tiempo de compilación y reducir errores.
- Utilizamos **Sequelize** como ORM para interactuar con **PostgreSQL**.
- Toda la configuración está organizada en módulos y controladores, siguiendo las buenas prácticas de arquitectura en **Node.js**.

### Relación entre las Tablas

El modelo de datos tiene la siguiente estructura:

1. **Usuarios**: Contiene la información de los usuarios registrados y autenticados en la aplicación.
2. **Productos**: Almacena los detalles de cada producto, como nombre, precio, descripción, categoría, entre otros.
3. **Categorías**: Agrupa los productos y permite la organización en secciones. Cada categoría tiene una relación uno a muchos con los productos.

Las relaciones se establecen con **Sequelize** para permitir asociaciones entre las tablas y consultas conjuntas (eager loading).

### Rutas y Endpoints

Las rutas principales del backend son:

- **Productos**:
  - `POST /api/products`: Crea un nuevo producto.
  - `GET /api/products`: Recupera todos los productos.
  - `GET /api/products/:id`: Recupera un producto específico por su ID.
  - `PUT /api/products/:id`: Actualiza un producto existente.
  - `DELETE /api/products/:id`: Elimina un producto.

- **Categorías**:
  - `GET /api/categories`: Obtiene todas las categorías.
  - `GET /api/categories/:id/products`: Recupera todos los productos asociados a una categoría específica.

- **Usuarios** (Autenticación):
  - `POST /api/auth/register`: Registra un nuevo usuario.
  - `POST /api/auth/login`: Autentica a un usuario.
  - `GET /api/auth/logout`: Cierra la sesión de usuario.

## Middleware

Para mejorar la seguridad y el manejo de datos, se implementaron los siguientes middlewares:

1. **Autenticación**: Protege rutas sensibles utilizando JWT (JSON Web Tokens) para asegurar que solo usuarios autenticados puedan acceder a recursos específicos.
2. **Validación**: Se utiliza **Zod** para validar los datos de entrada en cada solicitud, asegurando que cumplan con los requisitos esperados antes de procesarlos.
3. **Manejo de Errores**: Middleware de manejo de errores global para capturar excepciones y enviar respuestas de error unificadas, mejorando la experiencia de desarrollo y la depuración.

## Pruebas

Se implementaron pruebas unitarias y de integración para asegurar la fiabilidad de los endpoints y la lógica de negocio:

1. **Pruebas de Endpoints**: Cada endpoint cuenta con pruebas para verificar que responda correctamente en diferentes escenarios (éxito, error, autenticación fallida).
2. **Pruebas de Validación**: Se prueba que las validaciones implementadas con **Zod** funcionen correctamente y respondan con mensajes adecuados cuando los datos de entrada son inválidos.
3. **Mocking de Base de Datos**: Para evitar realizar operaciones reales en la base de datos durante las pruebas, se utilizan mocks de Sequelize.

Las pruebas se ejecutan usando **Jest**, proporcionando reportes claros y detallados de la cobertura de código.

## Buenas Prácticas

En el desarrollo de este backend, se han seguido las siguientes buenas prácticas:

- **Código Limpio y Modular**: Separación de responsabilidades en controladores y servicios, permitiendo un código más mantenible y fácil de escalar.
- **Uso de TypeScript**: Tipado estático que reduce los errores y mejora la mantenibilidad.
- **Principios DRY (Don't Repeat Yourself)**: Estandarización de funciones y lógica para evitar duplicación de código.
- **Documentación**: Comentarios y documentación en puntos clave del código para facilitar el entendimiento y la colaboración.
  
## Configuración y Ejecución del Proyecto

Para levantar el backend en un entorno de desarrollo, sigue estos pasos:

### Paso 1: Clonar el Repositorio

```bash
git clone https://github.com/tuusuario/ChallengeRNBack.git
cd ChallengeRNBack


DB_USER=##
DB_PASSWORD=***
DB_HOST=localhost
DB_PORT=5432
DB_NAME=challengeRN
PORT=3001



El servidor se ejecutará en http://localhost:3000 por defecto.



Librerías Utilizadas

	•	Express: Framework para construir la API de forma rápida y eficiente.
	•	Sequelize: ORM para interactuar con PostgreSQL.
	•	Zod: Validación de datos en tiempo real.
	•	JWT: Autenticación de usuarios.
	•	Swagger: Documentación de la API.
	•	Jest: Framework de pruebas para asegurar la funcionalidad.
	•	Auth0: Manejo de autenticación y autorización de usuarios.

Recursos y Referencias

	•	Sequelize
	•	Zod
	•	Swagger
	•	Auth0
	•	PostgreSQL
	•	Jest
