import { conn } from '../database/connection';
import { DataTypes } from 'sequelize';
import Product from './product';

const Combination = conn.define(
  'Combination',
  {
    combination_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    additional_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: 'Combination' },
);

export default Combination;
