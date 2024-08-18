import { conn } from '../database/connection';
import { DataTypes } from 'sequelize';
import Product from './product';
import Combination from './combination';

const ProductCombination = conn.define(
  'ProductCombination',
  {
    product_combination_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
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
    combination_id: {
      type: DataTypes.UUID,
      references: {
        model: Combination,
        key: 'combination_id',
      },
      allowNull: false,
    },
  },
  { timestamps: false, tableName: 'ProductCombination' },
);

export default ProductCombination;
