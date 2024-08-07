import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../db';

class User extends Model {
    public id!: number;
    public name!: string;
    public email!: string;
}

User.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            primaryKey: true,
            allowNull: false,
          },
          user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
          },
          email: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
          },
          google_id: {
            type: DataTypes.STRING,
            allowNull: true,
          },
    },
    {
        sequelize,
        modelName: 'User',
    }
);

export default User;
