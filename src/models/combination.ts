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
    additionalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    product_id: {
      type: DataTypes.UUID,
      references: {
        model: Product,
        key: 'product_id',
      },
      allowNull: false,
    },
  },
  { timestamps: false, tableName: 'Combination' },
);

export default Combination;
