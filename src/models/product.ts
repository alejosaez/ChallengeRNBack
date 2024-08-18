import { conn } from '../database/connection';
import { DataTypes } from 'sequelize';
import Category from './category';

const Product = conn.define(
  'Product',
  {
    product_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    unit_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    category_id: {
      type: DataTypes.UUID,
      references: {
        model: Category,
        key: 'category_id',
      },
    },
  },
  { timestamps: false, tableName: 'Product' },
);

export default Product;
