import dotenv from 'dotenv';
import app from './src/app';
import { sequelize } from './src/db';
import "./src/models/"
dotenv.config();

const SERVER_PORT = process.env.PORT || 3001;

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected!');

    await sequelize.sync({ force: true }); // Cambia a { alter: true } en producción
    console.log('Database synchronized!');

    app.listen(SERVER_PORT, () => {
      console.log(`Server is running on port ${SERVER_PORT}`);
    });
  } catch (error) {
    if (error instanceof Error) {
      console.error('Unable to connect to the database or start the server:', error.message);
      console.error(error.stack);
    } else {
      console.error('Unexpected error', error);
    }
  }
})();
