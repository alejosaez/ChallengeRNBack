import 'dotenv/config';
import { Sequelize } from 'sequelize';

// Desestructuramos las variables de entorno
const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST,
  DB_PORT,
  DB_NAME,
  DATABASE_URL,
  NODE_ENV,
} = process.env;

// Detectar si estamos en producción
const isProduction = NODE_ENV === 'production';

// Conexión a la base de datos: Usar `DATABASE_URL` si está presente, o las variables locales si no
export const conn = new Sequelize(
  DATABASE_URL || `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
  {
    logging: false,
    dialect: 'postgres',
    dialectOptions: {
      ssl: isProduction || DATABASE_URL // Usar SSL solo en producción o cuando se use Railway
        ? {
            require: true,
            rejectUnauthorized: false,
          }
        : false, // No usamos SSL en local
    },
  }
);

// local DB
// import 'dotenv/config';
// import { Sequelize } from 'sequelize';

// // Desestructuramos las variables de entorno
// const {
//   DB_USER,
//   DB_PASSWORD,
//   DB_HOST,
//   DB_PORT,
//   DB_NAME,
// } = process.env;

// // Asegurarse de que todas las variables locales estén presentes
// if (!DB_USER || !DB_PASSWORD || !DB_HOST || !DB_PORT || !DB_NAME) {
//   throw new Error("Missing required database environment variables for local connection");
// }

// // Conexión a la base de datos local
// export const conn = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}`,
//   {
//     logging: false,
//     dialect: 'postgres',
//     dialectOptions: {
//       ssl: false, // Deshabilitar SSL para la base de datos local
//     },
//   }
// );
