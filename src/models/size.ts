import { conn } from '../database/connection';
import { DataTypes } from 'sequelize';

const Size = conn.define(
  'Size',
  {
    size_id: {
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
  { timestamps: false, tableName: 'Size' },
);

export default Size;
