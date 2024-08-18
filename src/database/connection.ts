import 'dotenv/config'
import { Sequelize } from 'sequelize'

const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME, SSL, DATABASE_URL } =
  process.env

//with heroku
// const sequelize = new Sequelize(DATABASE_URL, {
//   logging: false,
//   native: false,
//   dialectOptions: {
//     ssl: {
//       require: false,
//       rejectUnauthorized: false,
//     },
//   },
// })

export const conn = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}${
    SSL ? '?ssl=true' : ''
  }`,
  {
    logging: false,
    native: false,
    dialectOptions: {
      ssl: SSL ? true : false,
    },
    dialect: 'postgres',
  },
)