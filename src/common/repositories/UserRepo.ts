import { FindAttributeOptions } from 'sequelize';
import { UsersAttributes, UserStatus } from '../types/common';
import UserModel from '../models/UserModel';

class UserRepository {
  async findAllUser(): Promise<UsersAttributes[]> {
    return UserModel.findAll({
      raw: true,
    });
  }

  async findUserByEmail(email: string): Promise<UsersAttributes> {
    return UserModel.findOne({
      where: {
        email,
      },
      raw: true,
    });
  }

  async getAllUser() {
    return UserModel.findAll({});
  }

  async getUserWithStatus(status: UserStatus, attributes?: string[]) {
    return UserModel.findAll({
      attributes: attributes || ['id', 'roles', 'status', 'email'],
      where: {
        status,
      },
    });
  }
}

export default new UserRepository();
