import { conn } from '../database/connection';
import { DataTypes } from 'sequelize';
import Product from './product';
import Size from './size';

const ProductSize = conn.define(
  'ProductSize',
  {
    product_size_id: {
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
    },
    size_id: {
      type: DataTypes.UUID,
      references: {
        model: Size,
        key: 'size_id',
      },
    },
  },
  { timestamps: false, tableName: 'ProductSize' },
);

export default ProductSize;
