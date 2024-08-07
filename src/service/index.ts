import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('postgres://user:pass@localhost:5432/database');

export { sequelize };