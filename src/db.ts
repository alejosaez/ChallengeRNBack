// import { Sequelize } from 'sequelize';
// import dotenv from 'dotenv';

// dotenv.config();

// const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, SSL } = process.env;

// export const sequelize = new Sequelize(
//   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}${
//     SSL ? "?ssl=true" : ""
//   }`,
//   {
//     logging: console.log, // Para ver más detalles en los logs
//     native: false,
//     dialectOptions: {
//       ssl: SSL ? { require: true, rejectUnauthorized: false } : false,
//     },
//   }
// );
