import { Model, DataTypes, Optional } from 'sequelize';
import sequelize from '../../config/sequelize';
import { UserRoles, UsersAttributes, UserStatus } from '../types/common';

class UserModel extends Model<
  UsersAttributes | Optional<UsersAttributes, 'id'>
> {
  declare id: number;
  declare password: string;
  declare roles: UserRoles | string;
  declare status: UserStatus | string;
  declare email: string;
  declare createdAt: Date;
  declare recentLoginTime: Date;
}

UserModel.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    roles: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: UserRoles.CLIENT,
    },
    status: {
      type: DataTypes.STRING(20),
      defaultValue: UserStatus.INITIAL,
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'created_at',
    },
    recentLoginTime: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: 'recent_login_time',
    },
  },
  {
    tableName: 'users',
    timestamps: false,
    sequelize,
  }
);

export default UserModel;
