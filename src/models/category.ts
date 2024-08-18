import { conn } from '../database/connection';
import { DataTypes } from 'sequelize';

const Category = conn.define(
  'Category',
  {
    category_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false, tableName: 'Category' },
);

export default Category;
